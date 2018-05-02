<template>

  <section>
    <v-form ref="registrationForm">
      <h3>Registration</h3>
      <AppInput
        name="userName"
        label="User Name"
        required
        :rules="[rules.required]"
        v-model="userData.userName"
      />
      <AppInput
        type="email"
        name="email"
        label="User e-mail"
        required
        :rules="[rules.required, rules.email]"
        v-model="userData.email"
      />
      <AppInput
        type="password"
        name="password"
        label="Password"
        required
        :rules="[rules.required, rules.password]"
        :counter="8"
        v-model="userData.password"
      />
      <AppInput
        type="password"
        name="confirmPassword"
        required
        label="Confirm Password"
        :rules="[rules.required, rules.passwordMatch(userData.password, userData.confirmPassword)]"
        :counter="8"
        v-model="userData.confirmPassword"
      />

      <AppButton
        @click="onSubmit"
        color="success"
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
          userName: '',
          email: '',
          password: '',
          confirmPassword: '',
        }
      }
    },
    methods: {
      onReset() {
        this.$refs.registrationForm.reset();
      },
      onSubmit() {
        if (this.$refs.registrationForm.validate()) {
          console.log('Form is valid, do something on the server...');
          this.$store.commit('setAdminStatus', true);
          localStorage.setItem('loggedIn', '1');
          this.$router.push('/');
        }
      }
    }

  }
</script>
