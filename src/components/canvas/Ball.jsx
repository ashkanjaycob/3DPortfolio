/* eslint-disable react/no-unknown-property */
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, OrbitControls, Preload, useTexture } from "@react-three/drei";
import CanvasLoader from "../Loader";
import {Float} from "@react-three/drei"


// eslint-disable-next-line react/prop-types
const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
        />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};


// eslint-disable-next-line react/prop-types
const Ball = ({imgUrl}) => {
  // eslint-disable-next-line react/prop-types
  const [decal] = useTexture([imgUrl]);

  return (
    <>
      <Float 
        speed={1.5} // Animation speed, defaults to 1
        rotationIntensity={1.75} // XYZ rotation intensity, defaults to 1
        floatIntensity={3} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        >
        <ambientLight intensity={0.25}/>
        <directionalLight position={[0, 0, 0.5]}/> 
        <mesh castShadow receiveShadow scale={2.75}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial 
            color="#B7C9F2"
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
          <Decal
            position={[0, 0, 1]}
            flatShading
            rotation={[2 * Math.PI, 0, 6.25]}
            map={decal}
          />
        </mesh>
      </Float>
    </>
  );
};


export default BallCanvas;
