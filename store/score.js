export const state = () => ({
    score: 0
})

export const mutations = {
    incrementScore(state, points) {
        state.score += points
    },
    decrementScore(state, points) {
        state.score -= points
    },
    resetScore(state) {
        state.score = 0
    }
}

export const getters = {
    getScore: (state) => state.score
}

export const actions = {
    incrementScore({ commit }, points) {
        commit('incrementScore', points)
    },
    decrementScore({ commit }, points) {
        commit('decrementScore', points)
    },
    resetScore({ commit }, points) {
        commit('resetScore', points)
    }
}