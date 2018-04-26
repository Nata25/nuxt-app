<template>
  <div>
    <v-btn
      v-if="!isLoggedIn"
      color="info"
      nuxt
      to="/admin/auth"
    >Log in</v-btn>
    <v-btn
      v-if="isLoggedIn"
      color="info"
      @click="onLogout"
    >Logout</v-btn>
    <v-btn
      v-if="isLoggedIn"
      color="info"
      nuxt
      to="/admin"
    >Admin</v-btn>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isLoggedIn: true,
      }
    },
    methods: {
      onLogout() {
        this.isLoggedIn = false;
        this.$router.push('/');
      }
    }
  }
</script>
