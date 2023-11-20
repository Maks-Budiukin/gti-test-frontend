<template>
    
        <tr class="row" @click="console.log( from )">
            <td class="row__cell">{{ from }}</td>
            <td class="row__cell">{{ to }}</td>
            <td class="row__cell">{{ type }}</td>
            <td class="row__cell">{{ description }}</td>
            <td class="row__cell"> {{ new Date(date) }}</td>
            <td class="cell"> <slot name="button"></slot> </td>
        </tr>
    


    <!-- <div>
        <h1>{{ date }}</h1>
        <div>
            <p>FROM: {{ from }}</p>
            <p>TO: {{ to }}</p>
            <p>TYPE: {{ type }}</p>
            <p>DESCRIPTION: {{ description }}</p>
            <p>DATE: {{ date }}</p>
        </div>
        <slot name="button"></slot>
    </div> -->


</template>

<script setup>
defineProps({
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }

})
</script>

<style>
.row {
   
}
.row__cell {
padding: 1rem;
}
</style>