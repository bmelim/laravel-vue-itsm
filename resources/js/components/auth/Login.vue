
<template>
  <div class="ui middle aligned center aligned grid enlarge">
    <div class="column">
      <h2 class="ui image header">
        <div class="content">Log-in to your account</div>
      </h2>
      <form @submit.prevent="login" class="ui large form">
        <div class="ui stacked secondary segment">
          <div class="field" v-bind:class="{ error: isError }">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input type="text" v-model="email" name="email" placeholder="E-mail address" @focus="reset"/>
            </div>
          </div>
          <div class="field" v-bind:class="{ error: isError }">
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input type="password" v-model="password" name="password" placeholder="Password" @focus="reset" />
            </div>
          </div>

          <button type="submit" class="ui fluid large teal submit button">
            <div v-bind:class="{ active: loading }" class="ui centered inline loader"></div>
            <span v-if="loading == false">Login</span>
          </button>
        </div>

        <div v-if="isError" class="ui red message">{{ authError }}</div>
      </form>

      <div class="ui message">
        New to us?
        <router-link to="/register">Register</router-link>
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
import SimpleLayout from "../layouts/SimpleLayout";

export default {
  name: "Login",
  created() {
    this.$emit("update:layout", SimpleLayout);
  },
  computed: {
    loading: function() {
      return this.$store.getters.authStatus == "loading";
    },
    isError: function() {
      return this.$store.getters.authStatus == "error";
    },
    authError: function() {
      let authError = this.$store.getters.authError;
      if (authError == null) {
        return "";
      }
      return authError.response.statusText;
    }
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      let email = this.email;
      let password = this.password;
      this.$store
        .dispatch("authLogin", { email, password })
        .then(() => {
          this.$router.push("/");
        })
        .catch(err => console.log(err));
    },
    reset: function(){
      console.log('reset called because of onfocus');
      this.$store.dispatch('authReset');
    }
  }
};
</script>