<template>
  <div class="hello">
    <marks-list :items="itemsList" />
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
</style>
