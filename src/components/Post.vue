<template>
  <v-container>
      <v-layout row>
          <v-text-field multi-line 
            name="p-text" 
            label="Say something"
            v-model="p_text"></v-text-field>
      </v-layout>
      <v-layout row>
          <v-btn
            color="blue-grey"
            class="primary"
            @click.prevent="onPickFile"
            > upload an image
            <v-icon right dark>cloud_upload</v-icon>
          </v-btn>
          <input type="file" @change="onFileChanged" style="display: none" ref="fileInput" accept="image/*">
          <v-spacer></v-spacer>
          <v-btn
            raised
            color="primary"
            @click.prevent="onPost"
            > Post
          </v-btn>
      </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'
import { constant } from 'async';

export default {
  data: () =>({
      p_text: '',
      p_image: null
  }),
  methods: {
      onFileChanged (event) {
          this.p_image = event.target.files[0]
          console.log(this.p_image)
      },
      onPost () {
          let formdata = new FormData()
          formdata.append('post_text', this.p_text)
          formdata.append('post_image', this.p_image)

          axios.post(this.$store.getters.backendURL + 'feed/post', formdata, {
              headers: {
                  'content-type': 'multipart/form-data',
                  'Authorization': `Bearer ${localStorage.getItem('authToken')}`
              }
          }).then(res => {
              console.log(res)
          }).catch(err => console.log(err))
      },
      onPickFile () {
          this.$refs.fileInput.click()
      }
  }
}
</script>
