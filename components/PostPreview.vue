<template>
  <v-flex xs12 md6 lg4>
    <v-card>
      <v-card-media :src="post.thumbnail" height="200px">
      </v-card-media>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{ post.title }} </h3>
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
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
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
    computed: {
      postLink() {
        return this.isAdmin ? `/admin/${this.post.id}` : `/posts/${this.post.id}`
      },
    }
  }
</script>



