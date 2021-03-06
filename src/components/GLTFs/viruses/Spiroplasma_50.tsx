/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei/useGLTF";

export default function Model(props) {
  const group = useRef();
  const { nodes } = useGLTF("/models/viruses/Spiroplasma_50.glb") as any;
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        material={nodes.Spiroplasma_viruscif_assembly_1_A_SES_surface.material}
        geometry={nodes.Spiroplasma_viruscif_assembly_1_A_SES_surface.geometry}
      />
    </group>
  );
}

// useGLTF.preload("/models/viruses/Spiroplasma_50.glb");
