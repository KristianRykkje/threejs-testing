import React from "react";
import { Canvas } from "@react-three/fiber";
import Box from "./Box";

function ThreeTest() {
  const getRandomArr = () => {
    return Array(3)
      .fill(10)
      .map(num => {
        return Math.random() * num;
      });
  };

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box position={getRandomArr()} />
      <Box position={getRandomArr()} />
      <Box position={getRandomArr()} />
      <Box position={getRandomArr()} />
      <Box position={getRandomArr()} />
      <Box position={getRandomArr()} />
      <Box position={getRandomArr()} />
      <Box position={getRandomArr()} />
      <Box position={getRandomArr()} />
      <Box position={getRandomArr()} />
      <Box position={getRandomArr()} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  );
}

export default ThreeTest;
