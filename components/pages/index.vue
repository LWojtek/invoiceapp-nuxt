<template>
  <main class="container">
    <div class="login__wrapper">
      <div class="login">
        <label for="email">Email Address</label>
        <input id="email" v-model="email" type="email">
        <label for="password">Password</label>
        <input id="password" v-model="password" type="password">
        <button @click="fbAuth">
          Sign in
        </button>
        <button @click="fbAuth(true)">
          Create user
        </button>
        <button @click="signOut">
          Sign out
        </button>
      </div>
    </div>
  </main>
</template>

<script>
// import firebase from '@firebase/app'
import fb from '~/plugins/firebaseInit'

export default {
  data () {
    return {
      firebaseConfig: {
        // apiKey: 'AIzaSyClu_0RpNhy3doHIf_9BL_ROKR4U1dyotc',
        // authDomain: 'invoice-app-538ad.firebaseapp.com',
        // projectId: 'invoice-app-538ad',
        // storageBucket: 'invoice-app-538ad.appspot.com',
        // messagingSenderId: '725517910214',
        appId: '1:725517910214:web:8bab33a0354c50e4f4d7c7'
      },
      email: '',
      password: ''
    }
  },
  created () {
    // firebase.initializeApp(this.firebaseConfig)
  },
  methods: {
    fbAuth (create = false) {
      window.console.log(fb)
      fb.auth()[create ? 'signInWithEmailAndPassword' : 'createUserWithEmailAndPassword'](this.email, this.password)
        .then((userCredential) => {
          window.console.log(userCredential)
          this.$store.commit('auth', true)
        })
        .catch((error) => {
          // var errorCode = error.code;
          // var errorMessage = error.message;
          window.console.log(error)
        })
    },
    signOut () {
      fb.auth().signOut()
      this.$store.commit('auth', false)
    }
  }
}
</script>

<style lang="scss" scoped>

@import '~/assets/scss/global.scss';

.login__wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
}

.login {
  display: flex;
  flex-direction: column;
  border-radius: 2rem;
  box-shadow: 0 4px 12px rgba(0,0,0,.15);
  padding: 3rem;
  height: 26rem;
  width: 35rem;
}

label {
  margin-bottom: 1rem;
}

input {
  outline: none;
  border: none;
  margin-bottom: 1rem;
  padding: 0.7rem;
  background: rgba(145, 117, 255, 0.1);
}

button {
  margin-top: auto;
  padding: 1rem 3rem;
  border: none;
  outline: none;
  border-radius: 1rem;
  cursor: pointer;
  background: #9175FF;
  color: #fff;
  transition: 250ms opacity;

  &:hover {
    opacity: 0.8;
  }
}

</style>
