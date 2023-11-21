<template>
  <div class="wrapper">
    <div class="about">
      <h1 class="about__title">TEST ASSIGNMENT SUMMARY</h1>
      <h2 class="about__subtitle">STACK:</h2>

        <ul class="about__stack">
          <li class="about__stack-item">
            <div class="about__thumb">
              <img src="/src/components/icons/vueIcon.png" alt="Vue icon">
            </div>
            <p class="about__stackName">Vue.js</p>
          </li>
          <li class="about__stack-item">
              <div class="about__thumb">
                <img src="/src/components/icons/pinia.png" alt="Vue icon">
              </div>
              <p class="about__stackName">Pinia</p>
            </li>
            <li class="about__stack-item">
              <div class="about__thumb">
                <img src="/src/components/icons/nest.png" alt="Vue icon">
              </div>
              <p class="about__stackName">Nest.js</p>
            </li>
            <li class="about__stack-item">
              <div class="about__thumb">
                <img src="/src/components/icons/mongo.png" alt="Vue icon">
              </div>
              <p class="about__stackName">MongoDB</p>
            </li>
            <li class="about__stack-item">
              <div class="about__thumb">
                <img src="/src/components/icons/ts.png" alt="Vue icon">
              </div>
              <p class="about__stackName">TypeScript</p>
            </li>
            <li class="about__stack-item">
              <div class="about__thumb">
                <img src="/src/components/icons/vercel.png" alt="Vue icon">
              </div>
              <p class="about__stackName">Vercel</p>
            </li>
        </ul>

        <h2 class="about__subtitle">LINKS:</h2>

        <ul class="about__links">
          <li>
            <h3 class="about__links-title">Front-end:</h3>
            <p class="about__links-item"><img src="/src/components/icons/icon3.png" width="24" alt=""><a href="https://gti-test-frontend.vercel.app/">Application</a></p>
            <p class="about__links-item"><img src="/src/components/icons/github.png" width="24" alt=""><a href="https://github.com/Maks-Budiukin/gti-test-frontend">Github / Frontend</a></p>
          </li>
          <li>
              <h3 class="about__links-title">Back-end:</h3>
              <p class="about__links-item"><img src="/src/components/icons/icon3.png" width="24" alt=""><a href="https://gti-test-backend.vercel.app/">Application</a></p>
              <p class="about__links-item"><img src="/src/components/icons/github.png" width="24" alt=""><a href="https://github.com/Maks-Budiukin/gti-test-backend">Github / Backend</a></p>
            </li>
            <li>
              <h3 class="about__links-title">Api Documentation:</h3>
              <p class="about__links-item"><img src="/src/components/icons/swagger.png" width="24" alt=""><a href="https://gti-test-backend.vercel.app/swagger">Swagger Docs</a></p>
            </li>
        </ul>
        <h2 class="about__subtitle">Thank you for visiting my app!</h2>
      <img class="about__image" src="/src/components/images/about.png" alt="Not Found image">
    </div>
  </div>
</template>

<script setup>


</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  grid-area: main;
  display: flex;
  justify-content: center;
  align-items: center;
}

.about {
  background-color: #fff;
  border-radius: 0.5rem;
  text-align: center;

  padding: 1.5rem;
  margin: 1rem 0;

  &__title {
    background-color: #352f4b;
    color: #fff;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }

  &__subtitle {
    margin-top: 2rem;
  }

  &__description {
    margin: 0.5rem 0;
  }

  &__stack {
    list-style: none;
    padding: 0;
    margin: 2rem auto;
    text-align: center;
    justify-content: center;
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;

  }

  &__thumb {
    width: 100px;
    height: 100px;

    padding: 16px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-right: 1px solid lightgrey;
    border-top: 1px solid lightgrey;
    border-radius: 8px;

    transition-property: filter;
    transition-duration: 400ms;

    img {
      height: 100%;
    }
  }

  &__links {
    list-style: none;
  }

  a {
    color: #352f4b;
    padding: 0.4rem;

    &:hover {
      background-color: transparent;
      color: #ab53c3;
    }
  }

  &__links-title {
    text-align: left;
    font-weight: bold;
    margin: 1rem;
  }

  &__links-item {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  &__image {
    margin: 2rem;
  }
}

</style>