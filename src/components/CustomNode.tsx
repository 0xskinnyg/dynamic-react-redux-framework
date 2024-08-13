import React, { useState } from "react";
import ReactFlow, {
  NodeProps,
  Handle,
  Position,
  Background,
  BackgroundVariant,
  Node,
  Edge,
} from "react-flow-renderer";

const CustomNode: React.FC<NodeProps> = ({ data }) => {
  const [nodes, setNodes] = useState<Node[]>([
    {
      id: "1",
      type: "input",
      data: { label: "Start Node" },
      position: { x: 50, y: 50 },
    },
    {
      id: "2",
      type: "customNode",
      data: { label: "Custom Node with Sub-Diagram" },
      position: { x: 200, y: 200 },
    },
  ]);

  const [edges, setEdges] = useState<Edge[]>([
    {
      id: "sub-e1-2",
      source: "sub-node-1",
      target: "sub-node-2",
      type: "smoothstep",
    },
  ]);

  return (
    <div style={{ padding: 10, background: "#f0f0f0", borderRadius: 5 }}>
      <Handle type="target" position={Position.Top} />
      <div>{data.label}</div>
      <div
        style={{
          height: 150,
          width: 300,
          border: "1px solid #ddd",
          marginTop: 10,
        }}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          style={{ width: "100%", height: "100%" }}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
        >
          <Background variant={BackgroundVariant.Lines} gap={12} size={1} />
        </ReactFlow>
      </div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default CustomNode;
