<script setup>
import { Handle, Position } from '@vue-flow/core'
import { computed } from 'vue'
// import { colors } from './presets.js'
const presets = {
  sumi: '#1C1C1C',
  gofun: '#FFFFFB',
  byakuroku: '#A8D8B9',
  mizu: '#81C7D4',
  asagi: '#33A6B8',
  ukon: '#EFBB24',
  mushikuri: '#D9CD90',
  hiwa: '#BEC23F',
  ichigo: '#B5495B',
  kurenai: '#CB1B45',
  syojyohi: '#E83015',
  konjyo: '#113285',
  fuji: '#8B81C3',
  ayame: '#6F3381',
  torinoko: '#DAC9A6',
  kurotsurubami: '#0B1013',
  ohni: '#F05E1C',
  kokikuchinashi: '#FB9966',
  beniukon: '#E98B2A',
  sakura: '#FEDFE1',
  toki: '#EEA9A9',
}

const colors = Object.keys(presets).map((color) => {
  return {
    name: color,
    value: presets[color],
  }
})


const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['change', 'gradient'])

function onSelect(color) {
  emit('change', color)
}

function onGradient() {
  emit('gradient')
}

const sourceHandleStyleA = computed(() => ({ backgroundColor: props.data.color, filter: 'invert(100%)', top: '10px' }))

const sourceHandleStyleB = computed(() => ({
  backgroundColor: props.data.color,
  filter: 'invert(100%)',
  bottom: '10px',
  top: 'auto',
}))
</script>

<template>
  <div>Select a color</div>

  <div
    style="display: flex; flex-direction: row; flex-wrap: wrap; justify-content: center; max-width: 90%; margin: auto; gap: 3px">
    <template v-for="color of colors" :key="color.name">
      <button :title="color.name" :style="{ backgroundColor: color.value }" type="button" @click="onSelect(color)" />
    </template>

    <button class="animated-bg-gradient" title="gradient" type="button" @click="onGradient" />
  </div>

  <Handle id="a" type="source" :position="Position.Right" :style="sourceHandleStyleA" />

  <Handle id="b" type="source" :position="Position.Right" :style="sourceHandleStyleB" />
</template>
