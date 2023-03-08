<template>
  <svg
    :class="classes"
    class="icon"
  >
    <use
      v-bind="{'xlink:href':id}"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    />
  </svg>
</template>

<script>
export default {
    name: 'Icon',
    props: {
        iconName: {
            type: String,
            default: ''
        },
        classes: {
            type: [String, Array],
            default: ''
        }
    },
    computed: {
        id() {
            return `#${this.iconName}`;
        }
    }
};
</script>

<style lang="scss" scoped>
.icon {
  width: 25px;
  height: 25px;
}

</style>
