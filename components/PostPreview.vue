<template>
  <v-flex xs12 md6 lg4>
    <v-card>
      <v-card-media :src="post.thumbnail" height="200px">
      </v-card-media>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">
            <nuxt-link :to="`/posts/${this.post.id}`">
              {{ post.title }}
            </nuxt-link>
          </h3>
          <div>{{ post.summary }}</div>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn
          flat
          color="orange"
          exact
          :to="postLink"
        >{{ isAdmin ? 'Edit post' : 'Details' }}</v-btn>
        <v-btn
          @click.stop="confirmBeforeDelete()"
          v-if="isAdmin"
          flat
          color="error"
        >Delete</v-btn>
      </v-card-actions>

      <v-dialog v-model="dialog" max-width="350">
        <v-card>
          <v-card-text>Are you sure to delete this post?</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="info" flat="flat" @click="deletePost">Yes</v-btn>
            <v-btn color="error" flat="flat" @click.native="dialog = false">Cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>
  </v-flex>
</template>

<script>
  import axios from 'axios';

  export default {
    props: {
      post: {
        type: Object,
        required: true,
      },
      isAdmin: {
        type: Boolean,
        required: true,
      }
    },
    data() {
      return {
        dialog: false,
      }
    },
    computed: {
      postLink() {
        return this.isAdmin ? `/admin/${this.post.id}` : `/posts/${this.post.id}`
      },
    },
    methods: {
      confirmBeforeDelete() {
        this.dialog = true;
      },
      deletePost() {
        axios.delete('https://nuxt-blog-8718b.firebaseio.com/posts/' + this.post.id + '.json')
        .then(result => {
          this.dialog = false;
          this.$store.dispatch('deletePost', this.post.id); 
        })
        .catch(e => { console.log(e); });
      }
    }
  }
</script>

<style scoped>
  h3 > a {
    display: inline-block;
    margin-bottom: 10px;
    color: #000;
    text-decoration: none;
  }
</style>



