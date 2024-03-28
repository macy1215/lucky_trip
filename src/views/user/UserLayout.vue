<template>
    <Navbar-Component class="bg-white"></Navbar-Component>
    <RouterView></RouterView>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue';

export default {
  components: {
    NavbarComponent,
  },
};
</script>

<style lang="scss">
@import '../src/assets/scss/helper/_main.scss';
</style>
