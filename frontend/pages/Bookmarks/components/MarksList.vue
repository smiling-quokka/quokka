<template>
  <ul v-if="items.length">
    <li v-for="item in items" :key="item.id">
      <div>{{ JSON.stringify(item) }}</div>
    </li>
  </ul>
</template>

<script>
export default {
    name: 'MarksList',
    props: {
        items: {
            type: Array,
            default: () => []
        }
    }
};
</script>

<style>

</style>