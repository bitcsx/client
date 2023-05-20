<template>
    <div class="card edit-field">
        <div class="card-body">
            <div class="mb-3"> <!-- 这里是：Form controls -->
                <label for="edit-post" class="form-label">发些什么吧！</label>
                <textarea v-model="content" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <select class="form-select" aria-label="Default select example">
                <option selected>招聘信息</option>
                <option value="1">求职经验</option>
            </select>
            <button @click="submit_post" type="button" class="btn btn-secondary btn-sm">发帖</button>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    name: "WritePosts",
    setup(props, context) {
        let content = ref('');

        const submit_post = () => {
            if (content.value == "") return;
            context.emit('submit_post', content.value)
            content.value = ""; //content内容清空
        };
 
        return {
            content: content,
            submit_post,
        }
    }
}
</script>

<style scoped>
.edit-field {
    margin-top: 20px;
}

button {
    margin-top: 10px;
}
</style>