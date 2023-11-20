<template>
    <div>
        <div class="type-filter">

                        <label for="type">TYPE:</label>
                            <select name="select" id="type" v-model="type">
                        
                            <option value="gadgets">gadgets</option >
                            <option value="clothes">clothes</option>
                            <option value="medicines">medicines</option>
                            <option value="drinks">drinks</option>
                            <option value="other">other</option>
                            </select>
        </div>
        <div class="date-filter">

                            <label for="date">DATE:</label>
                                <select name="select" id="date" v-model="date">
                                <option value="Asc" selected>Ascending</option>
                                <option value="Desc">Descending</option>
                            
                                </select>
            </div>
            </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRequestsStore } from '../stores/requests';

const emit = defineEmits(['filter'])

const store = useRequestsStore();

const type = ref(null)
const date = ref("Asc")



    if (type) {
        const filteredRequests = store.requests.filter(request => request.type === type)
        emit('filter', filteredRequests)
        
    }



</script>

<style lang="scss" scoped>

</style>