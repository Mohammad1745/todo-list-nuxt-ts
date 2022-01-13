<template>
    <div class="nav">
        <NuxtLink
            v-for="(link, index) in links"
            :key="index"
            :to="link.path"
            class="link-item"
            :class="{active: page===link.name}"
         >
            {{link.name}}
         </NuxtLink>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  props: ['page'],
  computed: {
      ...mapGetters(['links'])
  }
}
</script>

<style>
.nav {
    display: flex;
    justify-content: center;
    margin: 10px;
}
.link-item {
    margin: 0 10px;
}
.active {
    color: red;
}
</style>
