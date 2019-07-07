<template>
  <div class="ui grid container">
    <sidebar></sidebar>
    <div class="twelve wide column">
      <topmenu v-on:logout-event="logout"></topmenu>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    }
  }
};
</script>