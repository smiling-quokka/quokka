<template>
  <button
    :classes="classes"
  >
    <span
      v-if="title"
      class="button_title"
    >{{ title }}</span>
    <icon
      v-if="icon"
      :icon-name="name"
    />
  </button>
</template>

<script>

export default {
    name: 'ButtonIcon',
    props: {
        title: {
            type: String,
            default: ''
        },
        classes: {
            type: [Array, String],
            default: ''
        },
        icon: {
            type: String,
            default: null
        }
    }
};
</script>

<style style lang="scss" scoped>
</style>