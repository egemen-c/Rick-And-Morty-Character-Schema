import {
    createStore
} from 'vuex'
export default createStore({
    state: {
        api: 'https://rickandmortyapi.com/api/character',
        chars: [],
        id: 2,
    },
    mutations: {
        setChars(state, payload) {
            state.chars = payload
        },
        setMore(state, payload) {
            state.chars = state.chars.concat(payload)
        }
    },
    getters: {
        getChars(state) {
            return state.chars
        },

    },
    actions: {
        fetchChars({
            commit,
            state
        }) {
            fetch(state.api)
                .then(data => data.json())
                .then(data => commit('setChars', data.results))
        },
        getMore({
            commit,
            state,
        }) {
            fetch(state.api + '/?page=' + state.id)
                .then(res => res.json())
                .then(res => commit('setMore', res.results))
        }
    },
    modules: {}
})