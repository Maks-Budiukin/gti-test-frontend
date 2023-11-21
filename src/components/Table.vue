<template>
    <div class="controls-wrapper">
                <div class="button-add">
                    <MyModalButton :submitAction="submitActions.ADD"/>
                    </div>
        
                <div class="filter">
                <div class="filter__type">

                                <label class="filter__label" for="type">TYPE:</label>
                                    <select class="filter__select" name="select" id="type" v-model="type">
                                        <option value="">ALL</option>
                                        <option value="gadgets">gadgets</option>
                                        <option value="clothes">clothes</option>
                                        <option value="medicines">medicines</option>
                                        <option value="drinks">drinks</option>
                                        <option value="other">other</option>
                                    </select>
                </div>
                <div class="filter__date">

                    <label class="filter__label" for="date">ORDER:</label>
                        <select class="filter__select" name="select" id="date" v-model="date">
                            <option value="Asc">Former</option>
                            <option value="Desc" selected>Recent</option>
                        </select>
                    </div>
                    </div>
            </div>

    <table class="table">
      
                <tr class="table__headRow">
                <th class="table__headCell">FROM</th>
                <th class="table__headCell">TO</th>
                <th class="table__headCell">TYPE</th>
                <th class="table__headCell">DESCRIPTION</th>
                <th class="table__headCell">DATE</th>
                <th class="table__headCell">CONTROLS</th>
              </tr>

                 
                    <MyViewItem v-for="request in filterRequests(type, date)" :key="request._id" :from="request.from" :to="request.to" :type="request.type" :description="request.description" :date="request.createdAt">
                        <template #button>
                                <div class="table__buttonContainer">
                                    <MyModalButton :request="request" :submitAction="submitActions.EDIT"/>
                                    <MyModalButton :request="request" :submitAction="submitActions.DELETE"/>
                                </div>
                        </template>
                    </MyViewItem>
            
                    
            </table>
</template>

<script setup>
import { useRequestsStore } from '../stores/requests'
import MyViewItem from '../components/TableItem.vue';
import MyModalButton from '../components/Modal.vue';
import { submitActions } from '../utils/submitActions'
import { ref } from 'vue'

// defineProps({
//     requests: {
//         type: Array,
//         required: true
//     }
// })

const store = useRequestsStore();
await store.getRequests()


const type = ref(null)
const date = ref("Desc")

const filterRequests = (type, date) => {
    const orderedRequests = store.requests.sort((a, b) => date === "Asc" ? new Date(a.createdAt) - new Date(b.createdAt) : new Date(b.createdAt) - new Date(a.createdAt));

    if (type) {
        const filteredRequests = orderedRequests.filter(request => request.type === type)
        return filteredRequests;
    }

    return orderedRequests;
}

</script>

<style lang="scss" scoped>

.controls-wrapper {
    
    display: flex;
    justify-content: space-between;
    padding: 1rem 1rem;
    @media screen and (max-width: 768px) {
        padding: 1rem 0;    
    }
}

.button-add {
    padding: 1rem 1rem;
    @media screen and (max-width: 768px) {
    padding: 1rem 0;
}
}

.filter {
display: flex;
gap: 1rem;

padding: 1rem 1rem;

@media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-end;
    padding: 1rem 0;
    
}

    &__label {
        margin-right: 10px;
    }
    &__select {
        min-width: 15vw;
        padding: 8px;
        border: 2px solid var(--color-main-transparent);
        border-radius: 0.5rem;
        font-size: inherit;

        transition-property: border;
        transition-duration: 400ms;

        @media screen and (max-width: 768px) {
            min-width: 33vw;            
        }

        &:focus, 
        &:hover {
            outline: 0;
            border: 2px solid var(--color-main);
        }

        &::placeholder {
            opacity: 0.5;
            font-style: italic;
        }
    }

    &__select {
        cursor: pointer;
    }
    
}
.table {
    min-width: min-content;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
    padding: 0 1rem;
    border-collapse: collapse; 

    &__headCell {
        padding: 1rem;
        text-align: left;
        cursor: default;
        @media screen and (max-width: 768px) {
            padding: 0.5rem 0.2rem;           
        }

        background-color: var(--color-secondary);
        
    }

    &__headCell:first-child { 
        border-top-left-radius: 10px;
        padding-left: 1rem; 
        @media screen and (max-width: 768px) {
                    padding-left: 0.5rem;           
                }
        }

    &__headCell:last-child { 
        border-top-right-radius: 10px;
        text-align: center; 
    }

    &__headRow {
        background-color: var(--color-secondary);
        color: #e2e2e2;
        padding: 1rem 0;  
    }

    &__buttonContainer {
        padding: 5px;
        display: flex;
        gap: 5px;
    }

}
</style>