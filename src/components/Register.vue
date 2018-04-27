<template>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title></v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field name="OfpptID" label="Ofppt ID" type="text" :error-messages="ofppt_errors" v-model="ofppt"></v-text-field>
                  <v-text-field name="email" label="Email" type="text" :error-messages="email_errors" v-model="email"></v-text-field>
                  <v-text-field name="name1" label="First Name" type="text" :error-messages="name1_errors" v-model="name1"></v-text-field>
                  <v-text-field name="name2" label="Last Name" type="text" :error-messages="name2_errors" v-model="name2"></v-text-field>
                  <v-text-field name="password" label="Password" id="password" type="password" :error-messages="passowrd1_errors" v-model="password"></v-text-field>
                  <v-text-field name="password2" label="Confirm Password" id="password2" type="password" :error-messages="password2_errors" v-model="password2"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" @click.prevent="onRegister">Create Account</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
</template>

<script>
  import axios from 'axios'

  export default {
    data: () => ({
      ofppt: '',
      email: '',
      name1: '',
      name2: '',
      password: '',
      password2: '',
      ofppt_errors: [],
      email_errors: [],
      name1_errors: [],
      name2_errors: [],
      passowrd1_errors: [],
      password2_errors: []
    }),
    methods: {
      onRegister () {
        axios.post('http://127.0.0.1:8000/register', 
          JSON.stringify({
            ofppt: {
              mat: this.ofppt
            },
            email: this.email,
            first_name: this.name1,
            last_name: this.name2,
            password1: this.password,
            password2: this.password2
          }),
          {
            headers: {
              'content-type': 'application/json'
            }
          }).then(res => {
            console.log(res.data)
            if(!res.data.errored) {
              this.$router.push('/')
            }
            else {
              this.validate(res.data.errors)
            }
          }).catch(err => console.log('register error: ', err))
      },
      validate (errors) {
        errors.hasOwnProperty('ofppt') ? this.ofppt_errors = errors.ofppt.mat : this.ofppt_errors = []
        errors.hasOwnProperty('email') ? this.email_errors = errors.email : this.email_errors = []
        errors.hasOwnProperty('first_name') ? this.name1_errors = errors.first_name : this.name1_errors = []
        errors.hasOwnProperty('last_name') ? this.name2_errors = errors.last_name : this.name2_errors = []
        errors.hasOwnProperty('password1') ? this.passowrd1_errors = errors.password1 : this.passowrd1_errors = []
        errors.hasOwnProperty('password2') ? this.password2_errors = errors.password2 : this.password2_errors = []
        if ( errors.hasOwnProperty('non_field_errors')) {
          this.password2_errors = errors.non_field_errors
        }
        else {
          return
        }
      }
    }
  }
</script>