import User from "~/model/apiObjects/user"

export const state = () => ({
    users: []
})



export const mutations = {
    setUsers(state, users) {
        state.users = users
    }
}

export const getters = {
    getUsers: (state) => state.users // .map(u => UserListItem.fromUser(u))
}

export const actions = {
    async loadUsers({ commit }) {
        await this.$axios
            .get('/users?page=2')
            .then(response => {
                console.log('store | user | response | ', response)
                commit('setUsers', response.data.data)
            }).catch(error => {
                console.log('store | user | error | ', error)
            })
    },
    async save({ commit }) {
        const payload = { name: 'omar', job: 'developer' }
        await this.$axios
            .post('/users', payload)
            .then(response => {
                console.log('store | user |  save | response | ', response)

            }).catch(error => {
                console.log('store | user | save |  error | ', error)
            })
    }
}