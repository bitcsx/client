<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
            <router-link class="navbar-brand" :to="{ name: 'home' }">BIT实习论坛</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0" v-if="$store.state.user.is_login">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'job' }">招聘信息</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'experience' }">求职经验</router-link>
                    </li>
                </ul>
              <ul class="navbar-nav me-auto mb-2 mb-lg-0" v-else>
                <li class="nav-item">
                  <router-link class="nav-link" :to="{ name: 'login' }">招聘信息</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" :to="{ name: 'login' }">求职经验</router-link>
                </li>
              </ul>
                <ul class="navbar-nav" v-if="!$store.state.user.is_login">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'login' }">登录</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'register' }">注册</router-link>
                    </li>
                </ul>
              <ul class="navbar-nav" v-else>
                <li class="nav-item">
                  <router-link class="nav-link" :to="{ name: 'write' }">发帖</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" :to="{ name: 'userprofile',params:{userId: $store.state.user.id} }">{{$store.state.user.username}}</router-link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" style="cursor:pointer" @click = "logout">注销</a>
                </li>
              </ul>

            </div>
        </div>
    </nav>
</template>

<script>
import {useStore} from 'vuex';
import router from "@/router";
export default {
  name: "NavBar",
  setup(){
    const store = useStore();
    const logout = () => {
      store.commit('logout');
      router.push({ name: 'home'});
      };
      return {
        logout,
      }
  }
}
</script>

<style scoped ></style>