// import axios from 'axios';

import { ACTIONS, MUTATIONS }    from './config';
import state from './state';

const actions = {
    async [ACTIONS.GET_BOOKMARKS_LIST](context) {
        await fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => context.commit('setBookmarksList', json));
    }
};

const mutations = {
    [MUTATIONS.SET_BOOKMARKS_LIST](state, response) {
        state.itemsList = response;
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
};
