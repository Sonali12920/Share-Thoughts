<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <h1> Share Your Thoughts</h1>
        <b>Feel free to write anything you want.</b>
        <div class="form-group">
            <textarea class="form-control"  v-model="msg" rows="6"></textarea>
        </div>
         <button v-if ="spinner == false" v-on:click="addData" class="btn btn-primary">Submit</button>
        <div v-else class="spinner-border text-primary" role="status">
            <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from '@/config/firebase'
export default {
  name: 'Home',
  components: {
  },
  data:()=>({
    msg:'',
    spinner:false
  }),
  methods:{
    addData(){
      this.spinner=true
      if(this.msg.length>0){
        let AddData={
          msg: this.msg,
          timestamp:new Date()
        }
       firebase.firestore.collection('msgs').add(AddData).then(res=>{
          console.log(res)
          this.spinner = false
          alert('Your thought has been recorded')
          this.msg = ''
        }).catch(e=>{
          this.spinner = false
          console.log(e)
        })
      }else{
        this.spinner = false
        alert('You must write something first')
      }
    }
  }
  }
</script>

