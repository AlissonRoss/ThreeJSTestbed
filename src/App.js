import React, { Suspense } from "react";
import { Canvas} from "@react-three/fiber";
import {Model} from "./Tower.js";
import { Text } from "@react-three/drei"
import { OrbitControls} from '@react-three/drei';
import "./styles.css";

export default function App() {
  return (
    <Canvas camera={{ position: [30, 35, 60] }}>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight intensity={50} />
      <Suspense fallback={null}>
        <Model position={[0, 0, 0]}/>
        <Text
          position={[0, 0, 0]} // Position the text in the scene
          fontSize={5} // Adjust the font size
          color="white" // Text color
        >
          Hackmerced X Testbed
        </Text>
      </Suspense>
    </Canvas>
  );
}
