<template lang="pug">
-var list = ['vue3','typescript','vue-class-components','vue-router', 'vuex', 'jest', 'cypress']

.hello
  h3 {{ msg }}
  ul
    each lang in list
      li=lang
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String,
  },
})
export default class HelloWorld extends Vue {
  msg!: string
}
</script>

<style scoped lang="scss">

</style>
