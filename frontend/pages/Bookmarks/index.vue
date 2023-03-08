<template>
  <div class="hello">
    <marks-list />
    The NOTES list will be here!
  </div>
</template>

<script>
import MarksList from './components/MarksList';

export default {
    name: 'Bookmarks',
    components: { MarksList },
    props: {
        msg: {
            type: String,
            default: 'Welcome to Your Vue.js App'
        },
    },
    created() {
        this.$store.dispatch('getItemsList');
    }
};
</script>

<style lang="scss" scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
