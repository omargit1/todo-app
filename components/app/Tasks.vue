<template>
    <v-container class="grey lighten-5">
        <v-row no-gutters>
            <v-col>
                <v-card>
                    <v-card-title class="title">TO DO</v-card-title>
                </v-card>
            </v-col>
            <v-col>
                <v-card>
                    <v-card-title class="title">IN PROGRESS</v-card-title>
                </v-card>
            </v-col>
            <v-col>
                <v-card>
                    <v-card-title class="title">DONE</v-card-title>
                </v-card>
            </v-col>
        </v-row>
        <br/>
        <v-row no-gutters>
            <v-col>
            <ul>
                <li v-for="(t, index) in tasksToDo" :key="index">
                    <v-card @click="passInProgress(t)" > 
                        <v-card-title class="todo"> {{ t.label }}</v-card-title>
                    </v-card>
                </li>
            </ul>
            </v-col>
            <v-col>
            <ul>
                <li v-for="(t, index) in tasksInProgress" :key="index">
                    <v-card @click.prevent="passDone(t)" id="inprogressEl"> 
                        <v-card-title class="inprogress"> {{ t.label}}</v-card-title>
                    </v-card>
                </li>
            </ul>
            </v-col>
            <v-col>
            <ul>
                <li v-for="(t, index) in tasksDone" :key="index">
                    <v-card  @dblclick.prevent="remove(t)"> 
                        <v-card-title class="done"> {{ t.label}} </v-card-title>
                    </v-card>
                </li>
            </ul>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                    <v-row>
                        <v-col class="col-4">
                            <v-text-field v-model="labelTask" label="add task" @click:append="addTask" append-icon="mdi-plus"></v-text-field>
                        </v-col>
                    </v-row>
            </v-col>
        </v-row>
    </v-container>    
</template>
<script>
import Task from "~/model/componentObjects/task"
import { mapGetters } from 'vuex'
export default {
    data : () => ({
        labelTask : ''
    }),
    methods : {
        addTask() {
            const t = new Task()
            t.id = Math.floor(Math.random() * 100)
            t.label = this.labelTask
            t.status = 'TODO'
            this.$store.dispatch('task/addTask', t)
            this.labelTask = ''
        },
        passInProgress(t) {
            // console.log('passInProgress', t)
            const task = new Task()
            task.id  = t.id
            task.status  = 'INPROGRESS'
            task.label  = t.label

            this.$store.dispatch('task/updateStatus', task)
        },
        passDone(t) {
            // console.log('passDone', t)
            const task = new Task()
            task.id  = t.id
            task.status  = 'DONE'
            task.label  = t.label

            this.$store.dispatch('task/updateStatus', task)
        },
        remove(t) {
            // console.log('passToDo', t)
            this.$store.dispatch('task/removeTask', t.id)
        }
    },
    computed : {
        ...mapGetters('task', {
            tasks : 'getTasks'
        }),
        tasksInProgress() {
            return this.tasks.filter(t => t.status === 'INPROGRESS')
        },
        tasksDone() {
            return this.tasks.filter(t => t.status === 'DONE')
        },
        tasksToDo() { 
            return this.tasks.filter(t => t.status === 'TODO')
        }
    },
}
</script>

<style>
li {
    list-style: none;
}
.todo {
    background-color: rgb(157, 236, 236);
    margin-bottom: 4px;
}
.inprogress {
    background-color: rgb(142, 170, 230);
    margin-bottom: 4px;
}
.done {
    background-color: green;
    margin-bottom: 4px;
}
.title {
    background-color: rgb(242, 255, 127);
    margin-right: 4px;
}
</style>