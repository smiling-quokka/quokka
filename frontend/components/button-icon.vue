<template>
  <button
    :classes="classes"
  >
    <span
      v-if="title"
      class="button_title"
    >{{ title }}</span>
    <icon
      :icon-name="iconName"
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
            default: ''
        }
    },
    computed: {
        iconName() {
            return this.icon;
        }
    }
};
</script>

<style style lang="scss" scoped>
</style>