<template>
    <v-card>
        <v-col v-if="$fetchState.pending">
            <transition name="fade">
                <v-data-table
                    class="elevation-1"
                    loading
                    loading-text="Loading ... Please wait"
                >
                </v-data-table> 
            </transition>
        </v-col>
        <v-col v-else>
            <transition name="fade" >
                <v-row>
                    <v-col>
                        <v-card-title>
                            <v-btn class="primary" @click="newRow()">New</v-btn>
                            <v-spacer></v-spacer>
                            <v-text-field 
                                v-model="search"
                                append-icon="mdi-magnify"
                                single-line
                                hide-details
                                label="Search"></v-text-field>
                        </v-card-title>
                        <v-data-table
                            :headers="headers"
                            :items="rows"
                            :items-per-page="5"
                            class="elevation-1"
                            item-key="id"
                            :search="search"
                        >
                            <template #[`item.avatar`]="{ item }">
                                 <v-img
                                    :src="item.avatar"
                                    max-height="80"
                                    max-width="100"
                                 >
                                 </v-img>
                            </template>
                        
                        </v-data-table>
                    </v-col>
                </v-row>
            </transition> 
        </v-col>
    </v-card>
    
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    fetchOnServer: false,
    data : () => ({
        headers : [
            { text : 'ID', value: 'id' },
            { text : 'First Name', value: 'first_name' },
            { text : 'Last Name', value: 'last_name' },
            { text : 'Email', value: 'email' },
            { text : 'Avatar' , value : 'avatar'}
        ],
        search: ''
    }),
    async fetch() {
        await this.$store.dispatch('user/loadUsers')
    },
    computed : {
        ...mapGetters({
            rows :  'user/getUsers'
        })
    },
    methods: {
        newRow() {
            this.$router.push('/user-form')
        }
    }
}
</script>