import './App.css';
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber'
import { useRef } from 'react'
import { OrbitControls } from "three/addons/controls/OrbitControls";
import * as THREE from 'three';
extend({ OrbitControls })

const Orbit = () => {
    const { camera, gl } = useThree();
    //useThree works similar way to useFrame but it runs only once
    return (
        <orbitControls args={[camera, gl.domElement ]}/>
    )
}
const Box = (props) => {
    const ref = useRef(null);
    useFrame((state)=>{
        ref.current.rotation.x+= 0.01;
        ref.current.rotation.y+= 0.01;
    })
    return (
        <mesh ref={ref} {...props} >
            <boxGeometry/>
            <meshBasicMaterial color="red"/>
        </mesh>
    )
}

function App() {
    const positions = new Float32Array(
        [1,1,1]);

  return (
      <div className="webgl">
          <Canvas
              style={{ backgroundColor: 'black'}}
              camera={{ position: [3,3,3]}}
          >
              <Box position={[-1,1,1]}/>
              <axesHelper args={[5]}/>
              <points>
                  <bufferGeometry attach="geometry">
                      <bufferAttribute
                          attach="attributes-position"
                          count={positions.length / 3}
                          array={positions}
                          itemSize={3}
                      />
                  </bufferGeometry>
              </points>
              <Orbit/>
          </Canvas>
      </div>
  );
}

export default App;
