<template>
  <form v-on:submit.prevent="submitForm">
    <div>
      <label for="username">id: </label>
      <input type="text" name="username" v-model="username" id="">
    </div>
    <div>
      <label for="password">pw: </label>
      <input type="password" name="password" v-model="password" id="">
    </div>
    <button type="submit" >login</button>
  </form>
</template>


<script>
import axios from 'axios';

export default {
  data : function() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    submitForm: function() {
      //event.preventDefault();
      console.log(this.username, this.password);
      var url = 'https://jsonplaceholder.typicode.com/users';
      var data = {
        username : this.username,
        password : this.password
      }
      axios.post(url, data)
      .then(function(response) {
        console.log(response);
      })
      .catch(function (error){
        console.log(error);
      })
    }
  },
}
</script>

<style>

</style>