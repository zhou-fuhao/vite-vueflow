<script setup>
import { ref } from 'vue';
import { VueFlow, useVueFlow, MarkerType, Position } from '@vue-flow/core';
import ViewColor from './demo-test/CustomNode.vue'

const onChange = (changes) => {
  console.log('onChange', changes);
}
const { onConnect, addEdges } = useVueFlow()

onConnect((params) => addEdges(params))

const initialElements = [
  {
    id: '1',
    label: 'Node 1',
    type: 'custom',
    position: { x: 0, y: 50 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left
  },
  {
    id: '2',
    label: 'Node 2',
    position: { x: 250, y: 0 },
    targetPosition: Position.Left,
  },
  {
    id: '3',
    label: 'Node 3',
    position: { x: 250, y: 100 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left
  },
  {
    id: '4',
    label: 'Node 4',
    position: { x: 500, y: 150 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left
  },
  {
    id: '5',
    label: 'Node 5',
    position: { x: 750, y: 50 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: 'e1-2',
    source: '1',
    target: '2'
  },
  {
    id: 'e1-3',
    source: '1',
    target: '3',
    markerEnd: MarkerType.Arrow
  },
  {
    id: 'e4-5',
    source: '4',
    target: '5',
    // style: { stroke: 'orange' },
    // labelBgStyle: { fill: 'orange' },
  },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    // animated: true,
    markerEnd: MarkerType.Arrow,
    markerStart: MarkerType.Arrow
  },
  // {
  //   id: 'e4-1',
  //   source: '4',
  //   target: '1',
  //   // animated: true,
  //   markerEnd: MarkerType.Arrow,
  //   markerStart: MarkerType.Arrow
  // },
  // {
  //   id: 'e1-4',
  //   source: '1',
  //   target: '4',
  //   // animated: true,
  //   markerEnd: MarkerType.Arrow,
  //   markerStart: MarkerType.Arrow
  // },
]

const elements = ref(initialElements)

</script>

<template>
  <VueFlow v-model="elements" :default-edge-options="{ type: 'smoothstep' }" fit-view-on-init @nodes-change="onChange"
    @edges-change="onChange">
    <!-- <template #node-custom="{ label }">
      <div>
        {{ label }}-----asd
      </div>
    </template> -->
  </VueFlow>
</template>
