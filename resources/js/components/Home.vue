<template>
<div class="ui placeholder">
  <div class="full line"></div>
  <div class="very long line"></div>
  <div class="long line"></div>
  <div class="medium line"></div>
  <div class="short line"></div>
  <div class="very short line"></div>
</div>
</template>
<script>
import AppLayout from './layouts/AppLayout';

export default {
    created() {
    this.$emit('update:layout', AppLayout);
  },
}
</script>