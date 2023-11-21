<template>
    <ModalButton :submitAction="submitAction" @click="modalOpen = true"/>

        <teleport to="#teleport">
          <transition name="fade">
          <div v-if="modalOpen" class="backdrop" @click="modalOpen = false" >
            <div class="modal" @click.stop="">
              <h3 class="modal__heading">{{ submitAction }}</h3>
              <div class="modal__info" :class="{ modal__infoDelete: submitAction === submitActions.DELETE }">
                <div class="modal__description-thumb">
                  <div class="modal__imageThumb">
                    <img class="modal__image" :src="`/${submitAction}.png`" />
                  </div>
                    <p v-if="submitAction === submitActions.ADD" class="modal__description"> Fill in the form and your delivery request will be saved!</p>
                    <p v-if="submitAction === submitActions.EDIT" class="modal__description"> Anything wrong? Edit all the fields you see wrong and we will fix it!</p>
                    <p v-if="submitAction === submitActions.DELETE" class="modal__description"> Are you sure you want to delete this Request? It will be gone forever!</p></div>
                <MyForm  :request="request" :submitAction="submitAction" @close-modal="modalOpen = false" />
              </div>
            </div>
          </div>
          </transition>
        </teleport>
</template>

<script setup>
import { ref } from 'vue'
import MyForm from './Form.vue';
import { submitActions } from '../utils/submitActions'
import ModalButton from './ModalButton.vue';

const props = defineProps({
    request: {
        type: Object,
        required: false,
    },
    submitAction: {
        type: String,
        required: true
    }
})

let modalOpen = ref(false)

</script>

<style lang="scss" scoped>
.backdrop {
position: fixed;
  overflow-y: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  overscroll-behavior: none;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
}
.modal {
  overflow-y: auto;
  display: flex;
  
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 60vw;
  z-index: 10;

  padding: 1rem 2rem;
  border-radius: 1rem;

  @media screen and (max-width: 890px) {
      min-width: 90vw;
      padding: 1rem 2rem;
      
      @media (orientation: landscape) {
        max-width: 90vw;
        height: 100vh;
      };
    }

  &__heading {
    font-size: 2rem;
    text-transform: capitalize;
    @media screen and (max-width: 870px) {
      font-size: 1.5rem;
    }
  }

  &__description {
    width: 65%;
    text-align: center;
    font-size: 1.5rem;
    @media screen and (max-width: 870px) {
      font-size: 1rem;
      line-height: 1.1;
      width: 100%;
    }
  }

  &__description-thumb {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  &__imageThumb {
    max-width: 200px;
  }

  &__image {
    width: 100%;
  }

  &__info {
    display: flex;
    gap: 1rem;

    @media screen and (max-width: 870px) {
      flex-direction: column;
      gap: 0;
    }
  }

  &__infoDelete {
    flex-direction: column;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 250ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>