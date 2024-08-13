import React, { useState } from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  Edge,
  Connection,
  Node,
} from "react-flow-renderer";
import CustomNode from "./CustomNode";

const nodeTypes = {
  customNode: CustomNode,
};

const FlowWithCustomNode: React.FC = () => {
  const [nodes, setNodes] = useState<Node[]>([
    {
      id: "1",
      type: "input",
      data: { label: "Start Node" },
      position: { x: 250, y: 5 },
    },
    {
      id: "2",
      type: "customNode",
      data: { label: "Custom Node with Sub-Diagram" },
      position: { x: 100, y: 100 },
    },
  ]);

  const [edges, setEdges] = useState<Edge[]>([
    {
      id: "e1-2",
      source: "1",
      target: "2",
      type: "smoothstep",
    },
  ]);

  const onConnect = (params: Edge | Connection) =>
    setEdges((eds) => addEdge(params, eds));

  return (
    <ReactFlowProvider>
      <div style={{ height: "500px", width: "500px" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          style={{ width: "100%", height: "100%" }}
        ></ReactFlow>
      </div>
    </ReactFlowProvider>
  );
};

export default FlowWithCustomNode;
