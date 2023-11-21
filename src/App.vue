<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
  <header class="header">
      <nav class="navigation">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
  </header>


  <RouterView />

</template>

<style scoped>

.header {
 
background: var(--color-secondary);
color: #fff;
grid-area: header;
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
  background-color: var(--color-main-semitransparent);
}

.navigation a {
  color: #eeeeee;
  width: 120px;
  display: inline-block;
  padding: 1rem 2rem;
  border-left: 1px solid var(--color-main);
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
