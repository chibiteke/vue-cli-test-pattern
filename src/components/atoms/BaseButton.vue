<template>
  <button :class="classes" :disabled="disabled" type="button" @click="handleClick">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    type: {
      type: String,
      default: 'button',
    },
    disabled: {
      type: Boolean,
      defalut: false,
    },
  },

  computed: {
    classes() {
      const cls = this.type === 'text' ? '-' + this.type : '';
      return [`kbn-button${cls}`];
    },
  },

  methods: {
    handleClick(ev) {
      this.$emit('click', ev);
    },
  },
};
</script>

<style scoped>
.kbn-button {
  padding: 0.6em 1.3em;
}
.kbn-button-text {
  border: noen;
  padding-right: 0;
  padding-left: 0;
}
</style>
