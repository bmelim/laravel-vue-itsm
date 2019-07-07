<template>
    
</template>
<script>
import AppLayout from './layouts/AppLayout';

export default {
    created() {
    this.$emit('update:layout', AppLayout);
  },
}
</script>