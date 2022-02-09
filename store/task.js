
export const state = () => ({
    tasks: [],
    current: {
        task: {},
    },

})



export const mutations = {
    setTasks(state, tasks) {
        state.tasks = tasks
    },
    setStatus(state, task) {
        let ind = state.tasks.findIndex(t => t.id === task.id)
        state.tasks[ind].status = task.status
    },
    addTask(state, task) {
        state.tasks.push(task)
    }
}

export const getters = {
    getTasks: (state) => state.tasks
}

export const actions = {
    addTask({ commit }, task) {
        // console.log('addTask | task', task)
        commit('addTask', task)
    },
    updateStatus({ commit }, task) {
        // console.log('updateStatus | task', task)
        commit('setStatus', { id: task.id, status: task.status })
    }
}