<script setup>
import { reactive, ref } from 'vue'
import { Edit } from '@element-plus/icons-vue'


const formLabelWidth = '70px'
const visible = ref(false)
const dialogFormVisible = ref(false)

const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

</script>

<template>

    <el-container>
      <el-header>Warehouse App</el-header>
      <!-- Side Menu -->
      <el-main>
    <el-container>
      <div class="menu-container" >
        <el-menu class="el-menu-vertical-demo" active-text-color = "#67C23A">
        <el-menu-item index="1" router><span>Users</span></el-menu-item>
        <el-menu-item index="2"><span >Warehouse</span></el-menu-item>
        <el-menu-item index="3"><span>Role</span></el-menu-item>
        <el-menu-item index="4"><span>Address</span></el-menu-item>
      </el-menu>
      </div>
     
      <!-- <div class = "menu-container">
        <el-aside width="200px">Users</el-aside>
        <el-aside width="200px">Warehouse</el-aside>
        <el-aside width="200px">Address</el-aside>
        <el-aside width="200px">Role</el-aside></div> -->
       <!-- Main -->
      <el-container>
        <el-header>
          <el-tooltip :visible="visible" placement = "top">
    <template #content>
      <span>Create New User</span>
    </template>
    <el-button type="primary" :icon="Edit" @click="dialogFormVisible = true" @mouseenter="visible = true" @mouseleave="visible = false" />
    <el-button @mouseenter="visible = true" @mouseleave="visible = false">
      Hover me
    </el-button>
  </el-tooltip>
          
          <el-dialog v-model="dialogFormVisible" width = "500px">
    <el-form :model="form" >
      <el-form-item label="Name" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Age" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Email" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Role" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="Please select a Role">
          <el-option label="Software Engineer" value="shanghai" />
          <el-option label="Driver" value="beijing" />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>

  </el-header>

        <el-main><el-table><el-table-column label="Operations">
      <template #default="scope">
        <el-button size="small" >Edit</el-button>
        <el-button size="small" type="danger">Delete</el-button>
      </template>
    </el-table-column>
  </el-table></el-main>
      </el-container>
    </el-container>
  
      </el-main>
    </el-container>
 
</template>

<style>

.container{
  padding-top: 50px;
  padding-left: 50px;
  display: flex;
  justify-content:center;
  align-items: center;
}

.el-button--text {
  margin-right: 15px;
}
.el-select {
  width: 200px;
}
.el-input {
  width: 300px;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}

.menu-container{
  justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    padding-top: 100px;
     
}
.users-container{
  padding-top: 100px;
}

.warehouse-container{
  padding-top: 50px;
}
</style>
