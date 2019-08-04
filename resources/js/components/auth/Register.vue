<template>
  <div class="ui middle aligned center aligned grid enlarge">
    <div class="column">
      <h2 class="ui image header">
        <div class="content">Create new account</div>
      </h2>
      <form @submit.prevent="register" class="ui large form">
        <div class="ui stacked secondary segment">
          <div class="field">
            <div class="ui left icon input">
              <i class="address book icon"></i>
              <input type="text" id="name" v-model="name" required autofocus placeholder="Name" />
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input type="text" v-model="email" name="email" placeholder="E-mail address" />
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input
                type="password"
                v-model="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input
                type="password"
                v-model="password_confirmation"
                name="password-confirm"
                placeholder="Confirm Password"
                required
              />
            </div>
          </div>
          <div>
            <button type="submit" class="ui fluid large teal submit button">Register</button>
          </div>
        </div>
        <div v-if="isError" class="ui red message">
          <ul>
          <li v-bind:key="name" v-for="(value, name) in authError">{{ value.toString() }}</li>
          </ul>
        </div>
      </form>
      <div class="ui message">
        Already have an account?
        <router-link to="/login">Login</router-link>
      </div>
    </div>
  </div>
</template>
<style>
body > .grid {
  height: 100%;
}
.image {
  margin-top: -100px;
}
.column {
  max-width: 450px;
}
</style>
<script>
export default {
  computed: {
    isError: function() {
      return this.is_error;
    },
    authError: function() {
      return this.error;
    }
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      is_admin: null,
      error: null,
      is_error: false
    };
  },
  methods: {
    register: function() {
      let data = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password,
        is_admin: this.is_admin
      };
      this.$store
        .dispatch("authRegister", data)
        .then(response => {
          this.$router.push("/");
        })
        .catch(err => {
          console.log(err);
          this.is_error = true;
          this.error = this.$store.getters.authError;
          this.$store.dispatch("authReset");
        });
    }
  }
};
</script>