<template>
  <div class="login-view">
    <h1>Login Form</h1>
    <LoginForm :onlogin="handleLogin" />
  </div>
</template>

<script>
import LoginForm from '@/components/molecules/BaseLoginForm.vue';

export default {
  name: 'LoginView',

  components: {
    LoginForm,
  },

  methods: {
    handleLogin() {
      return true;
    },
  },
};
</script>

<style scoped>
.login-view {
  width: 320px;
  margin: auto;
}
</style>
