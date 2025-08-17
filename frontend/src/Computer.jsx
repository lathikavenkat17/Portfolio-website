import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "./Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf"); // Load model from public folder

  // Change CPU color when model is loaded
  React.useEffect(() => {
    computer.scene.traverse((child) => {
      if (child.isMesh) {
        // Adjust this condition based on your mesh's name in the model
        if (child.name.toLowerCase().includes("cpu")) {
          // Change material color to e.g. bright red
          child.material.color.set("#ff0000");
          // Optional: tweak material properties
          child.material.metalness = 0.8;
          child.material.roughness = 0.3;
          child.material.needsUpdate = true;
        }
      }
    });
  }, [computer.scene]);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.7}
        position={isMobile ? [0, -2, -1] : [0, -2.5, -1]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <div style={{ width: "100%", height: "500px" }}>
      {/* Container with fixed height */}
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [8, 5, 8], fov: 45 }}
        gl={{ preserveDrawingBuffer: true }}
        style={{ width: "100%", height: "100%" }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            minPolarAngle={0}
            maxPolarAngle={Math.PI}
          />
          <Computers isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;

