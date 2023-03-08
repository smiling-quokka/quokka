<template>
  <div class="hello">
    <marks-list :items="itemsList" />
    The NOTES list will be here!
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { MODULE } from './store/config';
import MarksList from './components/MarksList';

export default {
    name: 'Bookmarks',
    components: { MarksList },
    computed: {
        ...mapState({
            itemsList(state) {
                return state[MODULE].itemsList;
            }
        }),
    },

    created() {
        this.$store.dispatch(`${MODULE}/getBookmarksList`);
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
