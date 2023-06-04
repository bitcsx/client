<template>
    <ContentBase>
      <div class="row justify-content-md-center">
        <div class="col-3">
          <form @submit.prevent="login">
            <div class="mb-3">
              <label for="email" class="form-label">电子邮件</label>
              <input v-model="email" type="email" class="form-control" id="email">
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">密码</label>
              <input v-model="password" type="password" class="form-control" id="password">
            </div>
            <div class="error-message">{{error_message}}</div>
            <button type="submit" class="btn btn-primary">登录</button>
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

export default {
    name: 'LoginView',
    components: {
        ContentBase
    },
  setup(){
      const store = useStore();
      let email =ref('');
      let password = ref('');
      let error_message =ref('');
      const login = () =>{
        error_message.value = "";
        store.dispatch("login",{
          email: email.value,
          password: password.value,
          success(){
            router.push({ name: 'userprofile',params:{userId:store.state.user.id}});
          },
          error(){
            error_message.value = "电子邮件或密码错误";
          }
        });
      };

      return {
        email,
        password,
        error_message,
        login
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