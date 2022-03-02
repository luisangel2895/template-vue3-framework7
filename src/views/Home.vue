<template lang="pug">
.home
  img(alt="Vue logo" src="../assets/logo.png" width="50")
  hello-world(msg="Welcome to Template")
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue';

@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
