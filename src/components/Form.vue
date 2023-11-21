<template>
<form v-if="submitAction !== submitActions.DELETE" class="form" v-on:submit.prevent="submitHandler(submitAction)" @keydown.esc="$emit(close-modal)" tabindex="0">
        <label for="from">FROM:</label>
            <input required="true" id="from" v-model="from" placeholder="London" />
            <label for="to">TO:</label>
            <input required="true" id="to" v-model="to" placeholder="Paris" />
            <label for="type">TYPE:</label>
                <select name="select" required="true" id="type" v-model="type">
                <option value="gadgets">gadgets</option>
                <option value="clothes" selected>clothes</option>
                <option value="medicines">medicines</option>
                <option value="drinks">drinks</option>
                <option value="other">other</option>
                </select>

            <label for="description">DESCRIPTION:</label>
            <textarea id="description" v-model="description" placeholder="Your description here..." rows="3" cols="5" />
            <div class="button-container">
                <button class="form__button" type="submit">OK</button>
                <button class="form__button" type="button" @click="emit('close-modal')">CANCEL</button>
            </div>

</form>
<div v-if="submitAction === submitActions.DELETE">
    <div class="button-container">
                    <button class="form__button" v-on:click="submitHandler(submitAction)" type="button" >DELETE</button>
                    <button class="form__button" type="button" @click="emit('close-modal')">CANCEL</button>
                </div>
    </div>
</template>

<script setup>
import { useRequestsStore } from '../stores/requests'
import { onMounted, onUnmounted, ref } from 'vue'
import { submitActions } from '../utils/submitActions'

const emit = defineEmits(['close-modal'])

const props = defineProps({
    request: {
        type: Object,
        required: false,
    },
    submitAction: {
        type: String,
        required: true
    },
    toggleModal: {
        type: Function,
        required: false
    }
})


const from = ref("");
const to = ref("")
const type = ref("")
const description = ref("")

const store = useRequestsStore();

if (props.request) {
        from.value = props.request.from;
        to.value = props.request.to;
        type.value = props.request.type;
        description.value = props.request.description;
    }

const handleClose = (event) => {
    if (event.key === 'Escape') {
     emit('close-modal')
}
}
    
onMounted(() => {
    document.addEventListener('keyup', handleClose)
})

onUnmounted(() => {
    document.removeEventListener('keyup', handleClose)
})

const submitHandler = (submitAction) => {
    switch (submitAction) {
        case submitActions.ADD:
            store.addRequest({
                from: from.value,
                to: to.value,
                type: type.value,
                description: description.value
            });
            
            emit('close-modal')
            
            break;
        case submitActions.EDIT:
            store.editRequest({
                from: from.value,
                to: to.value,
                type: type.value,
                description: description.value
            }, props.request._id)
            
            emit('close-modal')
            break;
        case submitActions.DELETE:
            store.deleteRequest(props.request._id)
            
            emit('close-modal')
            break;
        default:
            return;
    }
    
}

</script>

<style lang="scss" scoped>

.button-container {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 0.5rem;
    margin: 16px 0;
}
.form {
    display: flex;
    flex-direction: column;

    font-size: 16px;

    label {
        margin-top: 16px;
        @media screen and (max-width: 768px) {
margin-top: 4px;
            
        }
       }

    input,
    textarea,
    select {
        min-width: 25vw;
        padding: 8px;
        border: 2px solid #ab53c34d;
        border-radius: 0.5rem;
        font-family: inherit;
        font-size: inherit;

        transition-property: border;
        transition-duration: 400ms;

        @media screen and (max-width: 768px) {
            min-width: 50vw;
            font-size: 1rem;            
        }

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

    textarea {
        resize: none;
    }

   

    &__button {
    padding: 12px 24px;
    border: none;
    outline: none;
    color: #fff;
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
    font: inherit;
    font-size: 0.8rem;

    &:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}


&:active:after {
    background: #4b4269;

}

&:hover:before {
    opacity: 1;
}

&:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #352f4b;
    left: 0;
    top: 0;
    border-radius: 10px;
}

@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}
    }


    }
</style>