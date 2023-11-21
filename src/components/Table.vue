<template>
    <table class="table">
      
                <tr class="table__headRow">
                <th class="table__headCell">FROM</th>
                <th class="table__headCell">TO</th>
                <th class="table__headCell">TYPE</th>
                <th class="table__headCell">DESCRIPTION</th>
                <th class="table__headCell">DATE</th>
                <th class="table__headCell">CONTROLS</th>
              </tr>

                 
                    <MyViewItem v-for="request in requests" :key="request._id" :from="request.from" :to="request.to" :type="request.type" :description="request.description" :date="request.createdAt">
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
import MyViewItem from '../components/TableItem.vue';
import MyModalButton from '../components/Modal.vue';
import { submitActions } from '../utils/submitActions'

defineProps({
    requests: {
        type: Array,
        required: true
    }
})
</script>

<style lang="scss" scoped>
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