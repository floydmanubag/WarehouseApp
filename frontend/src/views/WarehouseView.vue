<script>
import axios from 'axios';

export default {
  data() {
    return {
      items: [] // The fetched data will be stored here
    };
  },
  created() {
    axios.get('https://localhost:7071/api/People')
      .then(response => {
        this.items = response.data; // Store the fetched data in the component's data property
      })
      .catch(error => {
        console.error(error);
      });
  }
  
};

</script>

<template>
  <div class="container">

    <el-container>
      <el-header>Skanlog</el-header>
      <el-main><div class="common-layout">
        <!-- List of Tables -->
    <el-container>
      <el-aside width="200px">Users</el-aside>

      <!-- Buttons for Get, Post, Put, and Delete -->
      <el-container>
        <el-header>   
          <el-button type="primary" :icon="Search">Search</el-button>
          <el-button type="primary" :icon="Edit" />
        </el-header>
        <el-main>
          <el-table :data="items" style="width: 100%" >
            <el-table-column prop="peopleID" label="User ID"></el-table-column>
           <el-table-column prop="peopleName" label="Name" width="100" align="center"></el-table-column>
           <el-table-column prop="age" label ="Age" width="80" align="center"></el-table-column>
           <el-table-column prop="email" label="Email" align="center"></el-table-column>
           <el-table-column prop="age" label="Age" align="center"></el-table-column>
           <el-table-column prop="age" label="Address" align="center"></el-table-column>
           
  </el-table></el-main>
      </el-container>
    </el-container>
  </div></el-main>
    </el-container>
  </div>

</template>

<style scoped>
.container{
  display: flex;
  justify-content:center;
  align-items: center;
}
</style>
