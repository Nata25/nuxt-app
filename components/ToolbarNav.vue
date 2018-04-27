<template>
  <div>
    <v-btn
      v-if="!isAdmin"
      color="info"
      nuxt
      to="/admin/auth"
    >Log in</v-btn>
    <v-btn
      v-if="isAdmin"
      color="info"
      @click="onLogout"
    >Logout</v-btn>
    <v-btn
      v-if="isAdmin"
      color="success"
      nuxt
      to="/admin"
    >Admin</v-btn>
  </div>
</template>

<script>
  export default {
    computed: {
      isAdmin() {
        return this.$store.getters.isAdmin;
      }
    },
    methods: {
      onLogout() {
        this.$store.commit('setAdminStatus', false);
        this.$router.push('/');
      }
    }
  }
</script>
