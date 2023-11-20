<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="header">
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <!-- <div class="wrapper"> -->
      <!-- <HelloWorld msg="You did it!" /> -->

      <nav class="navigation">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <!-- <RouterLink to="/myview">MyView</RouterLink> -->
      </nav>
    <!-- </div> -->
  </header>

  <RouterView />
</template>

<style scoped>
/* header {
  line-height: 1.5;
  max-height: 100vh;
} */
.header {
  /* background: linear-gradient(90deg, rgba(201,80,195,1) 0%, rgba(53,47,75,1) 10%, rgba(201,80,195,1) 100%); */
background: #352f4b;
  color: #fff;
grid-area: header;
/* display: flex; */
justify-content: center;
}

.navigation {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0.5rem;
}


.navigation a.router-link-exact-active {
  color: #fff;
  background-color: #ab53c38d;
}

.navigation a.router-link-exact-active:hover {
  /* background-color: transparent; */
}

.navigation a {
  color: #eeeeee;
  width: 120px;
  display: inline-block;
  padding: 1rem 2rem;
  border-left: 1px solid #ab53c3;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}

.navigation a:first-of-type {
  border: 0;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

@media (min-width: 1024px) {
  /* header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  } */

  /* .logo {
    margin: 0 2rem 0 0;
  } */

  /* header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  } */

  /* nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  } */
}
</style>
