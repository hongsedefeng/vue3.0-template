<template>
  <aside>
    <Menu />
  </aside>
  <header>
    <Header />
  </header>
  <main>
    <router-view></router-view>
  </main>
</template>
<script>
import Menu from "./menu/menu.vue";
import Header from "./header";
export default {
  components: {
    Menu,
    Header
  },
  setup() {
    return {};
  }
};
</script>

<style lang="less" scoped></style>
