
<template>

    <div class="main-wrapper">
        <div class="controls-wrapper">
            <div class="button-add">
                <MyModalButton :submitAction="submitActions.ADD"/>
                </div>
        
            <div class="filters">
            <div class="filter__type">

                            <label for="type">TYPE:</label>
                                <select name="select" id="type" v-model="type">
                                <option value="">ALL</option>
                                <option value="gadgets">gadgets</option>
                                <option value="clothes">clothes</option>
                                <option value="medicines">medicines</option>
                                <option value="drinks">drinks</option>
                                <option value="other">other</option>
                                </select>
            </div>
            <div class="filter__date">

                                <label for="date">DATE:</label>
                                    <select name="select" id="date" v-model="date">
                                    <option value="Asc" selected>Ascending</option>
                                    <option value="Desc">Descending</option>
                            
                                    </select>
                </div>
                </div>
        </div>


        <table class="table">
            <tr class="head-tr">
            <th>FROM</th>
            <th>TO</th>
            <th>TYPE</th>
            <th>DESCRIPTION</th>
            <th>DATE</th>
            <th>CONTROLS</th>

        
          </tr>
            <MyViewItem v-for="request in filterRequests(type, date)" :key="request._id" :from="request.from" :to="request.to" :type="request.type" :description="request.description" :date="request.createdAt">
            <template #button>
                    <div class="btn-container">
                        <MyModalButton :request="request" :submitAction="submitActions.EDIT"/>
                        <MyModalButton :request="request" :submitAction="submitActions.DELETE"/>
                    </div>
            </template>
        </MyViewItem>
        </table>
    </div>
 

</template>


<script setup>
import MyViewItem from '../components/MyViewItem.vue';
import {useRequestsStore} from '../stores/requests'
import MyModalButton from './MyModalButton.vue';
import {submitActions} from '../utils/submitActions'
import { ref } from 'vue'


const store = useRequestsStore();

store.getRequests() 

const requests = store.requests;

const type = ref(null)
const date = ref("Asc")

const filterRequests = (type, date) => {
    const orderedRequests = store.requests.sort((a, b) => date === "Asc" ? a.createdAt - b.createdAt : b.createdAt - a.createdAt);
        
    
    if (type) {
        const filteredRequests = orderedRequests.filter(request => request.type === type)
        return filteredRequests;
    }

    return orderedRequests;
}

</script>


<style lang="scss" scoped>
.main-wrapper {
    grid-area: main;
    padding: 0 1rem;
}
.controls-wrapper {
    
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
}

.button-add {

    padding: 1rem 0;
}

.filters {
display: flex;
/* justify-content: flex-end; */
gap: 1rem;

padding: 1rem 0;

    label {
        margin-right: 10px;
    }
    input,
    select {
        min-width: 15vw;
        padding: 8px;
        border: 2px solid #ab53c34d;
        border-radius: 0.5rem;
        font-size: inherit;

        transition-property: border;
        transition-duration: 400ms;

        &:focus, 
        &:hover {
            outline: 0;
            border: 2px solid #ab53c3;
        }

        &::placeholder {
            opacity: 0.5;
            font-style: italic;
        }
    }

    select {
        cursor: pointer;
    }
}





.table {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 0 1rem;
    border-collapse: collapse; 

    th {
        padding: 1rem;
        /* border: 1px solid #352f4b; */
        /* border-radius: 10px; */
        background-color: #352f4b;
        
    }
    th:first-child { border-top-left-radius: 10px; }
    th:last-child { border-top-right-radius: 10px; }
    
    
    tr {
        background-color: #fff;
        transition-property: background-color;
        transition-duration: 400ms;

        &:hover {
            background-color: #fdfdfd;
        }
        

    }

    tr:nth-child(even) {
        background-color: #f6f6f6;
        &:hover {
            background-color: #f9f9f9;
        }
    }

    td {
        padding: 1rem;
    }
}
.head-tr {
    background-color: #352f4b;
    /* border: 1px solid black;
    box-sizing: border-box; */
    color: #e2e2e2;
    padding: 1rem 0;    
    
    
}

.btn-container {
    padding: 5px;
    display: flex;
    gap: 5px;
}


</style>