<template>
    <v-container>
        <v-navigation-drawer
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-tile v-for="item in menuItems" :key="item.name" :to="item.link">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{item.title}}
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title> 
          <router-link to="/" tag="span" style="cursor: pointer"> ISTA Net </router-link> 
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
          <v-btn flat v-for="item in menuItems" :key="item.name" :to="item.link"> 
            <v-icon left>{{item.icon}}</v-icon> {{ item.title }} 
          </v-btn>
        </v-toolbar-items>
    </v-toolbar>
    </v-container>
</template>

<script>
export default {
  data: () => ({
      drawer: false
    }),
    computed: {
      user () {
        return this.$store.getters.user
      },
      isAuthenticated () {
        return this.$store.getters.user !== null
      },
      menuItems () {
        let items = [
          {title: 'Register', icon: 'face', link: '/register'},
          {title: 'Login', icon: 'lock_open', link: '/login'}
        ]
        if (this.isAuthenticated) {
          items = [
            {title: 'Profile', icon: 'account_circle', link: '/register/' + this.user.id}
          ]
        }
        return items
      }
    }
}
</script>
