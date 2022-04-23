<template>
  <h1>Contador: {{ count }}</h1>
  <button @click="increment">Incrementar</button>
</template>

<script lang="ts">
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';

export default {
  setup() {
    const { count } = storeToRefs(useCounterStore());
    const { increment } = useCounterStore();

    return {
      count,
      increment
    };
  }
};
</script>
