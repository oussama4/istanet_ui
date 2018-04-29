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
                  <v-text-field prepend-icon="person" name="login" label="Login" type="text" v-model="email"></v-text-field>
                  <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password" v-model="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-text v-if="!valid">
                <p class="red"> please enter valid credentials </p> 
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" @click.prevent="onLogin">Login</v-btn>
                <v-spacer></v-spacer>
                <router-link to="/register"> Create Account </router-link>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
</template>

<script>
import graph from '../graph/client'
import _login from '../graph/login.mutation.graphql'

  export default {
    data: () => ({
      email: '',
      password: '',
      valid: true
    }),
    methods: {
      onLogin () {
        graph.mutate({
          mutation: _login,
          variables: {
            email: this.email,
            password: this.password
          }
        }).then(res => {
          this.valid = true
          console.log(res.data.tokenAuth)
          this.$router.push('/')
        }).catch(err => {
          this.valid = false
        })
      }
    }
  }
</script>
