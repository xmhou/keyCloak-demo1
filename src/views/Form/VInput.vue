<template>
    <div>
        <input :value="value" @input="onInput" v-bind="$attrs">
    </div>
</template>
<script>
    export default {
        inheritAttrs: false,
        props: ["value"],
        methods: {
            onInput(e) {
                this.$emit("input", e.target.value);

                this.$parent.$emit("validate")
            }
        }
    }
</script>