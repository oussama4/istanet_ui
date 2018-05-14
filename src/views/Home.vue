<template>
    <v-container>
        <v-layout row>
            <Post class="elevation-1"></Post>
        </v-layout>
    </v-container>
</template>

<script>
import axios from 'axios'

import Post from '../components/Post.vue'

export default {
    data: () => ({

    }),
    created () {},
    components: {
        Post
    }
}

</script>
