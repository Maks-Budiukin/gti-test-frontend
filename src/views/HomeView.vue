
<template>
    <div class="main-wrapper">
        <Suspense>
             <Table />
            <template #fallback>
                <div class="spinner">
                    <BounceLoader :loading="SpinnerOpts.loading" :color="SpinnerOpts.color" :size="SpinnerOpts.size"></BounceLoader>
                </div>
            </template>
        </Suspense>
    </div>
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
.main-wrapper {
    grid-area: main;
    padding: 0 1rem;
    width: 100%;
}

.spinner {
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
}
</style>