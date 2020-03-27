<template>
    <div class=''>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'VForm',
        data() {
            return {}
        },
        props: ["model", "rules"],
        provide() {
            return {
                form: this
            }
        },
        components: {},
        created() { },
        mounted() { },
        methods: {
            validate(cb) {
                const tast = this.$children.filter(item => item.prop).map(item => {
                    return item.validate()
                });
                Promise.all(tast).then(() => cb(true)).catch(() => cb(false))
            }
        }
    }
</script>
<style lang='scss' scoped>
</style>