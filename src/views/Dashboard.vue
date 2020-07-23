<template>
  <div class="container">   
    <div class="row">
      <div class="col-md-12 text-center">
        <h1>Messages</h1>
        <br>
        <button v-on:click="logout" class="btn btn-info">Logout</button>
      </div>
    </div>

    <div class="row mt-5" v-if="loader">
      <div class="col-md-12 text-center">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>

    <div class="row mt-5" v-else>
      <div class="col-md-3" v-for="(item,index) in resData" :key="index">
        <div class="card" id="ms" style="margin:8px"  >
              <div class="card-body" >
                 <h5 class="card-title">Message</h5>
                 <p>[{{item.timestamp.toDate()}}]</p><br><br>
                <p>{{item.msg}}</p><br>
                <button class="btn btn-danger" v-on:click="deleteData(item.id)">Delete</button>
              </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from '@/config/firebase'
export default {
  name: 'Dashboard',
  components: {
  },
  data:()=>({
    resData:[],
    loader:true,
    userData:{}
  }),
  mounted(){
    this.showData()
  },
  methods:{
    showData(){
      this.loader = true
      this.resData = []
      firebase.firestore.collection('msgs').get().then(res=>{
        res.forEach(doc=>{
          let obj = doc.data()
          obj['id']=doc.id
          this.resData.push(obj)
         
        })
        this.loader = false
      }).catch(e=>{
        this.loader = false
        console.log(e)
      })
    },
     logout(){
      firebase.auth.signOut().then(res=>{
        console.log(res)
        this.$router.replace('login')
      }).catch(e=>{
        console.log(e)
      })
    },
    deleteData(id){
      if(confirm('Are you sure?')){
        firebase.firestore.collection('msgs').doc(id).delete().then(()=>{
          alert('Done')
          this.showData()
        }).catch(e=>{
          console.log(e)
        })
      }
    },
    
  }
}
</script>

<style>
.ms:hover{
    background-color: black;
    color: white;
}
.ms{
        border: 1px solid black;
        padding:4px;
        width:100%;
}
</style>