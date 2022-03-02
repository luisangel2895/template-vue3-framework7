<template lang="pug">
mixin external-link(url, name)
  f7-link(href="/" + url external): =name

f7-app(v-bind="{ theme: 'auto', name: 'My App', id: 'com.demoapp.test' }")
  f7-view(main)
    f7-page.page(color-theme="teal")
      f7-navbar(title="Template")
      f7-toolbar(bottom)
        f7-link Link 1
        f7-link Link 2
      router-view
      +external-link('', 'Home')
      +external-link('about', 'About')
</template>

<style lang="scss">
$background-color : rgba(0, 42, 75, 0.5);
#app {
  width: 50%;
}
.page {
  color: $background-color ;
}
</style>
