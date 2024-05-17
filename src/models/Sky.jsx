import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

import skyScene from "../assets/3d/sky.glb";

const Sky = () => {
  const sky = useGLTF(skyScene);
  const skyRef = useRef();
  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
