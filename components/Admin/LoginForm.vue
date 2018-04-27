<template>

  <section>
    <v-form ref="loginForm">
      <h3>Login</h3>
      <AppInput
        type="email"
        name="email"
        label="User e-mail"
        required
        :rules="[rules.required]"
        v-model="userData.email"

      />
      <AppInput
        type="password"
        name="password"
        label="Password"
        required
        :rules="[rules.required]"
        v-model="userData.password"
      />

      <AppButton
        color="success"
        @click="onSubmit"
      >
        Go!
      </AppButton>

      <AppButton
        color="warning"
        @click="onReset"
      >
        Reset
      </AppButton>

    </v-form>

  </section>

</template>

<script>
  import AppInput from '~/components/UI/AppInput';
  import AppButton from '~/components/UI/AppButton';

  export default {
    components: {
      AppInput,
      AppButton
    },
    props: {
      rules: {
        type: Object,
        required: false,
      }
    },
    data() {
      return {
        userData: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      onReset() {
        this.$refs.loginForm.reset();
      },
      onSubmit() {
        if (this.$refs.loginForm.validate()) {
          console.log('form is valid!');
          this.$store.commit('setAdminStatus', true);
          this.$router.push('/');
        }
      }
    }

  }
</script>
