/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei/useGLTF";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(
    "/models/nanotech/computationally_designed_mini_tetraloop_tetraloop_receptor_10.glb"
  );
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        material={nodes["6dvkcif_H_SES_surface"].material}
        geometry={nodes["6dvkcif_H_SES_surface"].geometry}
      />
    </group>
  );
}

useGLTF.preload(
  "/models/nanotech/computationally_designed_mini_tetraloop_tetraloop_receptor_10.glb"
);