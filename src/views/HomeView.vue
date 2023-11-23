
<template>
    
        <Suspense>
             <Table />
            <template #fallback>
                <div class="spinner">
                    <BounceLoader :loading="SpinnerOpts.loading" :color="SpinnerOpts.color" :size="SpinnerOpts.size"></BounceLoader>
                </div>
            </template>
        </Suspense>
    
</template>


<script setup>
import BounceLoader from 'vue-spinner/src/BounceLoader.vue'
import Table from '../components/Table.vue';

const SpinnerOpts = {
    color: "#352f4b",
    loading: true,
    size: '60px'
}

</script>


<style lang="scss" scoped>


.spinner {
    display: flex;
    grid-area: main;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
}
</style>