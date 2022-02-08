<template>
    <v-row>
        <v-col>
            <v-card>
                 <v-col cols="12">
                     <v-form
                     ref="form"
                     v-model="valid"
                     >
                        <v-row dense justify="center">        
                            <v-col>
                                <v-row justify="center">
                                    <v-col>                                   
                                         <h6 class="display-1 text-center font-weight-thin"> Personal Informations</h6>
                                    </v-col>
                                </v-row>
                                <v-row justify="center">
                                    <v-col
                                    cols="12"
                                    md="4"
                                    >
                                    <v-text-field
                                        v-model="firstname"
                                        :rules="[rules.required]" 
                                        label="First name"
                                        required
                                    ></v-text-field>
                                    </v-col>
                                    <v-col
                                    cols="12"
                                    md="4"
                                    >
                                    <v-text-field
                                        v-model="lastname"
                                        :rules="[rules.required]" 
                                        label="Last name"
                                        required
                                    ></v-text-field>
                                    </v-col>
                                </v-row>
                                   <v-row justify="center">
                                    <v-col
                                    cols="12"
                                    md="4"
                                    >

                                    </v-col>
                                    <v-col
                                    cols="12"
                                    md="4"
                                    >
                                        <v-select
                                        v-model="civility"
                                        :items="civilities"
                                        :rules="[rules.required]"
                                        label="Civility"></v-select>
                                    </v-col>
                                </v-row>
                            </v-col>                          
                        </v-row>

                        <v-row dense>
                            
                            <v-col>
                                <v-row justify="center">
                                    <v-col>                                   
                                         <h6 class="display-1 text-center font-weight-thin"> Contact </h6>
                                    </v-col>
                                </v-row>
                                <v-row justify="center" >
                                    <v-col
                                    cols="12"
                                    md="4"
                                    >
                                    <v-text-field
                                        v-model="email"
                                        :rules="[rules.required]" 
                                        label="email"
                                        required
                                    ></v-text-field>
                                    </v-col>

                                    <v-col
                                    cols="12"
                                    md="4"
                                    >
                                    <v-text-field
                                        v-model="phone"
                                        :rules="[rules.required]" 
                                        label="Phone"
                                        required
                                    ></v-text-field>
                                    </v-col> 
                                </v-row>
                            </v-col>                          
                        </v-row>

                     </v-form>
                 </v-col>
                    
                <v-card-actions>
                    <v-spacer></v-spacer>
                       <v-btn
                        color="error"
                        class="mr-4"
                        @click="resetForm"
                        >
                        Reset Form
                        </v-btn>
                        <v-btn
                        color="warning" 
                        @click="resetValidation">
                        Reset Validation
                        </v-btn>
                        <v-btn 
                        @click="save" 
                        class="primary" 
                        :disabled="false">
                        Save</v-btn>

                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import FormMixin from "~/components/form/FormMixin"
 
export default {
    mixins : [FormMixin],
    data : () => ({
        firstname : '',
        lastname: '',
        email: '',
        phone: '',
        civility: '',
        civilities : ['Mr', 'Mrs', 'Miss']
    }),
    methods: {
        save() {
            console.log('form.validate: ', this.$refs.form.validate())

            if (this.$refs.form.validate()) {
                this.$store.dispatch('user/save').then(
                    this.$vuetify.goTo(0,  { duration: 1500} )
                )
                setTimeout(() => this.$router.push('user-list') , 1500 )
            }
        },
        resetForm() {
            this.$refs.form.reset()
        },
        resetValidation() {
            this.$refs.form.resetValidation()
        }
    }
}
</script>