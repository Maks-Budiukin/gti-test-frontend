<template>
    <div class="wrapper">
        <div class="notFound">
            <h1 class="notFound__title">NOTHING TO SEE HERE!</h1>
            <img src="/src/components/images/notFound.png" alt="Not Found image">
            <h3 class="notFound__subtitle">Please, pass by!</h3>
            <p class="notFound__description"> We really do not hide ANYTHING interesting here. Please,</p>
            <RouterLink class="glowOnHover" to="/">GO BACK!</RouterLink>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

</script>

<style lang="scss" scoped>
.wrapper {
    padding: 0 1rem;
    grid-area: main;
    display: flex;
    justify-content: center;
    align-items: center;
}

.notFound {
    background-color: #fff;
    border-radius: 0.5rem;
    text-align: center;
    max-width: 80vw;
    padding: 1.5rem;

    &__description {
        margin: 0.5rem 0;
    }
}

.glowOnHover {
    padding: 8px 16px;
    display: block;
    width: 100px;
    margin: 1rem auto;
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
    color: #fff
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
</style>