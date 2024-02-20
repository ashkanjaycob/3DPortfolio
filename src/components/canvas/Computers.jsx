/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload , useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({isMobile}) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <>
      <mesh>
        <hemisphereLight intensity={0.9} groundColor="white" />
        <spotLight intensity={1} position={[-30, 1000, 100]} 
        angle={0.12}
        penumbra={1}
        castShadow
        shadowMap={{ size: 1024 }}/>
        <primitive
          object={computer.scene}
          scale={isMobile ? 0.65 : 0.75}
          position={isMobile? [0 , -2.3 , -1.8] : [0, -3.25, -1.5]}
          rotation={[-0, -0.2, -0.1]}
        />
        <pointLight intensity={5} />
      </mesh>
    </>
  );
};

const ComputerCanvas = () => {
  
  const [isMobile , setIsMobile] = useState(false);


  // change is mobile 
  useEffect(() => {
    // check if screen size is changing 
    const mediaQuery = window.matchMedia('(max-width:500px)');

    // set initial value to if its a mobile screen 
    // console.log(mediaQuery.matches);
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
        setIsMobile(e.matches)
    }

    mediaQuery.addEventListener('change' , handleMediaQueryChange)

    return() => {
      mediaQuery.removeEventListener('change' , handleMediaQueryChange);
    }

  } , [])

  return (
    <>
      <Canvas
        frameloop="demand"
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} />
        </Suspense>

        <Preload all />
      </Canvas>
    </>
  );
};

export default ComputerCanvas;
