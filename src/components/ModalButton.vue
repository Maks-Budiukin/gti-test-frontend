<template>
    <button class="glowOnHover" :class="{ intable: submitAction !== submitActions.ADD }" >
          <span v-if="submitAction === submitActions.ADD">{{ submitAction }} </span> 
          <img v-if="submitAction === submitActions.DELETE" class="button__icon" src="/src/components/icons/cross.svg">
          <img v-if="submitAction === submitActions.EDIT" class="button__icon" src="/src/components/icons/editIcon.svg">
        </button>
</template>

<script setup>
import { submitActions } from '../utils/submitActions'

const emit = defineEmits(['open-modal']);

const props = defineProps({
    submitAction: {
        type: String,
        required: true
    }
});

</script>

<style lang="scss" scoped>
.glowOnHover {
    padding: 8px 16px;
    border: none;
    outline: none;
    color: #fff;
    background: var(--color-secondary);
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
    font: inherit;
}
.glowOnHover:before {
    content: '';
    background: var(--button-gradient);
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
.glowOnHover:active {
    color: #fff;
}
.glowOnHover:active:after {
    background: var(--color-secondary-light);
}
.glowOnHover:hover:before {
    opacity: 1;
}
.glowOnHover:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--color-secondary);
    left: 0;
    top: 0;
    border-radius: 10px;
}

@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}
.intable {
padding: 8px 16px;
border-radius: 8px;
display: flex;
align-items: center;
justify-content: center;

@media screen and (max-width: 768px) {
    padding: 8px 8px;    
}
}

.button__icon {
  svg {
    fill: #fff;
    color: #fff;
  }
  color: #fff;
  fill: #fff;
  width: 24px;
}
</style>