<script setup>
import { Panel, VueFlow, isNode, useVueFlow } from '@vue-flow/core'
import { Background } from '@vue-flow/background'
import { MiniMap } from '@vue-flow/minimap'
import { nextTick, ref } from 'vue'

const getElements = (xElements = 10, yElements = 10) => {
  const initialNodes = []
  const initialEdges = []
  let nodeId = 1
  let recentNodeId = null

  for (let y = 0; y < yElements; y++) {
    for (let x = 0; x < xElements; x++) {
      const position = { x: x * 75, y: y * 75 }
      const node = {
        id: nodeId.toString(),
        style: { width: `50px`, fontSize: `11px`, zIndex: 1 },
        label: `Node ${nodeId}`,
        class: 'light',
        position,
      }
      initialNodes.push(node)

      if (recentNodeId && nodeId <= xElements * yElements) {
        initialEdges.push({
          id: `${x}-${y}`,
          source: recentNodeId.toString(),
          target: nodeId.toString(),
          style: (edge) => {
            if (!edge.sourceNode.selected && !edge.targetNode.selected) {
              return
            }
            return { stroke: '#10b981', strokeWidth: 3 }
          },
        })
      }

      recentNodeId = nodeId
      nodeId++
    }
  }

  return {
    nodes: initialNodes,
    edges: initialEdges,
  }
}


const { nodes, edges } = getElements(15, 15)

const elements = ref([...nodes, ...edges])

const { onPaneReady, dimensions, fitView } = useVueFlow()

onPaneReady(({ fitView, getElements }) => {
  fitView({ padding: 0.2 })

  console.log(getElements.value)
})

function toggleClass() {
  return elements.value.forEach((el) => (el.class = el.class === 'light' ? 'dark' : 'light'))
}

function updatePos() {
  elements.value.forEach((el) => {
    if (isNode(el)) {
      el.position = {
        x: Math.random() * 10 * dimensions.value.width,
        y: Math.random() * 10 * dimensions.value.height,
      }
    }
  })

  nextTick(() => {
    fitView({ duration: 1000, padding: 0.5 })
  })
}
</script>

<template>
  <VueFlow v-model="elements" :min-zoom="0.1">
    <MiniMap />

    <Background />

    <Panel position="top-right">
      <button style="margin-right: 5px" @click="updatePos">update positions</button>
      <button @click="toggleClass">toggle class</button>
    </Panel>
  </VueFlow>
</template>
