<template>
    <div>
        <label v-if="label">{{label}}</label>
        <slot></slot>
        <p v-if="errorMessage">{{errorMessage}}</p>
    </div>
</template>

<script>
    import Schema from "async-validator";
    export default {
        name: '',
        data() {
            return {
                errorMessage: false
            }
        },
        props: ["label", "prop"],
        inject: ['form'],
        components: {},
        created() { },
        mounted() {
            this.$on("validate", () => {
                this.validate();
            });
        },
        methods: {
            validate() {
                let rules = this.form.rules[this.prop];
                let value = this.form.model[this.prop]

                // 3.执行校验
                const desc = {
                    [this.prop]: rules
                };
                const schema = new Schema(desc);
                //   参数1是值,参数2是校验错误对象数组
                //   返回的Promise<boolean>
                return schema.validate({ [this.prop]: value }, errors => {
                    if (errors) {
                        // 有错
                        this.errorMessage = errors[0].message;
                    } else {
                        // 没错，清除错误信息
                        this.errorMessage = "";
                    }
                });

            }
        }
    }
</script>
<style lang='scss' scoped>
</style>