<template>
  <div class="container">
      <h1>Login </h1>
    <div class="row mt-2">
      <div class="col-md-6 offset-md-3" >
        <form>
          <div class="form-group">
            <input type="email" class="form-control" v-model="email" placeholder="email@example.com" />
          </div>
          <div class="form-group">
            <input type="password" class="form-control"  v-model="password" placeholder="password" />
          </div>
          <button v-on:click="login" type="submit" class="btn btn-primary">Login</button>
          <!-- <button  v-on:click="signup" type="submit" class="btn btn-primary">Sign up</button> -->
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from '@/config/firebase'
export default {
  name: 'Login',
  data:()=>({
    email:'',
    password:''
  }),
  methods:{
    login(){
      if(this.email.length > 0 && this.password){
        console.log(this.email)
        firebase.auth.signInWithEmailAndPassword(this.email, this.password).then(res=>{
          console.log(res)
          this.$router.replace('/dashboard')
        }).catch(e=>{
          alert('Invalid Username or Password')
        })
      }
      else{
        alert('Something went wrong!!')
        }
    }
    // signup(){
    //   if(this.email.length && this.password){
    //     console.log(this.email)
    //     firebase.auth.createUserWithEmailAndPassword(this.email, this.password).then(res=>{
    //       console.log(res)
    //     }).catch(e=>{
    //       console.log('Error')
    //     })
    //   }else{
    //     alert('Something went wrong')
    //   }
    // }
  }
}
</script>