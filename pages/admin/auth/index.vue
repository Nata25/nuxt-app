<template>
  <section>
    <h2>Welcome!</h2>

    <v-content v-if="login">
      <LoginForm
        :rules="rules"
      />
    </v-content>

    <v-content v-else>
      <RegistrationForm
        :rules="rules"
      />
    </v-content>

    <v-content>
      <AppButton
        :color="['info', ''][+login]"
        @click="switchMode"
      >
        I already have account
      </AppButton>

      <AppButton
        :color="['', 'info'][+login]"
        @click="switchMode"
      >
        I don't have account
      </AppButton>

      <AppButton
        color="error"
        @click="$router.push('/')"
      >
        Cancel
      </AppButton>
    </v-content>

  </section>
</template>

<script>
  import LoginForm from '~/components/Admin/LoginForm';
  import RegistrationForm from '~/components/Admin/RegistrationForm';
  import AppButton from '~/components/UI/AppButton';

  export default {
    components: {
      LoginForm,
      RegistrationForm,
      AppButton
    },
    data() {
      return {
        login: true,
        rules: {
          required: v => !!v || 'This info is required',
          email:  v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid',
          password: v => v.length > 7 || 'Password should be at least 8 characters length',
          passwordMatch: (v1, v2) => v1 === v2 || 'Passwords don\'t match'
        }
      }
    },
    methods: {
      switchMode() {
        this.login = !this.login;
      },
    }
  }
</script>
