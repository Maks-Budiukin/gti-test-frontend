<template>
        <tr class="row">
            <td class="row__cell">{{ from }}</td>
            <td class="row__cell">{{ to }}</td>
            <td class="row__cell">{{ type }}</td>
            <td class="row__cell">{{ description }}</td>
            <td class="row__cell">{{ new Date(date).toLocaleString() }}</td>
            <td class="row__cell"> <slot name="button"></slot> </td>
        </tr>
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

<style lang="scss" scoped>
.row {
    background-color: #fff;
        transition-property: background-color;
        transition-duration: 400ms;
        white-space: pre-wrap;

        @media screen and (max-width: 768px) {
            font-size: 0.5rem;
            padding: 1rem;            
        }

        &:hover {
            background-color: rgb(234, 204, 243);
            cursor: pointer;
        }

        &:nth-child(even) {
        background-color: #f6f6f6;
        &:hover {
            background-color: rgb(234, 204, 243);
            cursor: pointer;
        }
    }
    
   &__cell:last-child {
    padding: 0 1rem;
    @media screen and (max-width: 768px) {
        padding: 0 0.5rem;
    }
   }

   &__cell:first-child {
        padding: 0 1rem;
        @media screen and (max-width: 768px) {
            padding: 0 0.5rem;
        }
    }
}
.row__cell {
    padding: 0 1rem;
    @media screen and (max-width: 768px) {
        padding: 0.3rem;
    }
}
</style>