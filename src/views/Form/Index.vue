<template>
    <div class='form'>
        {{user}}
        <VForm :model="user" :rules="rules" ref="vForm">
            <VFormItem label="用户名" prop="name">
                <VInput v-model="user.name"></VInput>
            </VFormItem>
            <VFormItem label="密码" prop="pswd">
                <VInput v-model="user.pswd" type="password"></VInput>
            </VFormItem>
            <VFormItem>
                <button @click="onLogin">登录</button>
            </VFormItem>
        </VForm>
    </div>
</template>

<script>
    import VForm from "./VForm";
    import  VFormItem from "./VFormItem";
    import  VInput  from "./VInput";
    export default {
        name: '',
        data() {
            return {
                user: {
                    name: 'aaa',
                    pswd: '123'
                },
                rules: {
                    name: [{ required: true, message: "用户名必填" }],
                    pswd: [{ required: true, message: "密码必填" }]
                }
            }
        },
        components: {
            VForm,
            VFormItem,
            VInput
        },
        created() { },
        mounted() { },
        methods: {
            onLogin() {
                this.$refs.vForm.validate(validate => {
                    if(validate) {
                        alert("登录成功");
                    }else {
                        alert("登录失败")
                    }
                })
            }
        }
    }
</script>
<style lang='scss' scoped>
</style>