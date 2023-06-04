import $ from 'jquery';

const ModuleUser ={
    state:{
        token:"",
        id:"",
        email:"",
        username:"123",
        photo:"",
        followerCount:0,
        starContent:"", //收藏的帖子的字符串值，通过,分隔
        is_login:false,
    },
    getter:{

    },
    mutations:{
        updateUser(state, user){
            state.id = user.id;
            state.token = user.token;
            state.email = user.email;
            state.photo = user.avatar_url;  //带下划线不合法？？？？？
            state.username = user.name;
            state.followerCount = user.follower_count;
            state.starContent = user.star_content;
            state.is_login = user.is_login;
        },
        logout(state){
            state.id = "";
            state.token = "";
            state.email = "";
            state.photo = "";
            state.username = "";
            state.followerCount = 0;
            state.starContent = "";
            state.is_login = false;
        }

    },
    actions:{
        login(context, data){
            $.ajax({
                url:"http://172.26.96.139:8888/login",
                //url: "https://mock.apifox.cn/m2/2679388-0-default/84874627",
                type:"POST",
                data:{
                    email: data.email,
                    password: data.password,
                },
                success(resp){
                    console.log(resp);
                    context.commit("updateUser",{
                        ...resp,
                        is_login: true,
                    });
                    data.success();
                },
                error(){
                    data.error();
                }
            });
        }
    },
    modules:{

    }
};
export default ModuleUser;