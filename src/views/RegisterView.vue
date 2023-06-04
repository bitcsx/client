<template>
  <ContentBase>
    <div class="row justify-content-md-center">
      <div class="col-3">
        <form @submit.prevent="register">
          <div class="mb-3">
            <label for="email" class="form-label">电子邮件</label>
            <input v-model="email" type="email" class="form-control" id="email">
          </div>
          <div class="mb-3">
            <label for="username" class="form-l  abel">用户名</label>
            <input v-model="username" type="text" class="form-control" id="username">
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">密码</label>
            <input v-model="password" type="password" class="form-control" id="password">
          </div>
          <div class="mb-3">
            <label for="password_confirm" class="form-label">确认密码</label>
            <input v-model="password_confirm" type="password" class="form-control" id="password_confirm">
          </div>
          <div class="error-message">{{error_message}}</div>
          <button type="submit" class="btn btn-primary">注册</button>
        </form>
      </div>
    </div>
  </ContentBase>
</template>

<script>
import ContentBase from '../components/ContentBase.vue';
import {ref} from "vue";
import {useStore} from "vuex";
import router from "@/router/index";
import $ from 'jquery';

export default {
  name: 'LoginView',
  components: {
    ContentBase
  },
  setup(){
    const store = useStore();
    let email =ref('');
    let username = ref('');
    let password = ref('');
    let password_confirm = ref('');
    let error_message =ref('');
    const register = () =>{
      error_message.value = "";
      console.log(store, router);
      console.log(email.value, password.value, password_confirm.value);
      if (password.value === password_confirm.value){
        $.ajax({
          url: "http://172.26.96.139:8888/signup",
          type: "POST",
          data:{
            email: email.value,
            password: password.value,
            username: username.value,
          },
          success(resp){
            console.log(resp);
          }
        })
      }
      else {
        error_message.value = "密码不一致，请重新输入！"
      }
    };

    return {
      email,
      password,
      username,
      error_message,
      password_confirm,
      register
    }
  }
}
</script>

<style scoped>
button{
  width: 100%;
}
.error-message{
  color: red;
}
</style>