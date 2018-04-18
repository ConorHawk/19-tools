<template>
    <div class="">
        <label for="id">Test</label>
        <input type="text" name="id" :value="value" v-on:input="$emit('input', $event.target.value)">
    </div>
</template>

<script>
export default {
  name: 'form-input',
  props: ['value'],
  data: function () {
    return {
    }
  }
}
</script>
