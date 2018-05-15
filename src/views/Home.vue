<template>
    <v-container align-content-start>
        <v-layout row align-content-start>
            <Post class="elevation-1"></Post>
        </v-layout>
    </v-container>
</template>

<script>

import Post from '../components/Post.vue'
import _user from '../graph/user.query.graphql'
import graph from '../graph/client'

export default {
    data: () => ({

    }),
    created () {
        const token = localStorage.getItem('authToken')
        graph.query({
            query: _user,
            variables: {
                token: localStorage.getItem('authToken')
            },
            context: {
                headers: {
                    authorization: token ? `Bearer ${token}` : ''
                }
            }

        }).then(res => {
            console.log('res ', res.data.userByToken)
            const u = res.data.userByToken
            this.$store.commit('setUser', {
                id: u.id,
                first_name: u.firstName,
                last_name: u.lastName,
                email: u.email,
                avatar: u.avatar,
                bio: u.bio,
                date_joined: u.dateJoined
            })
        }).catch(err => {
            console.log('err ', err.networkError.result)
            this.$store.commit('setUser', null)
            this.$router.push('/login')
        })
    },
    components: {
        Post
    }
}

</script>
