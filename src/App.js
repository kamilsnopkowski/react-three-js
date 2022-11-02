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
        <mesh ref={ref} {...props} castShadow receiveShadow >
            <boxGeometry/>
            <meshStandardMaterial color="pink"/>
        </mesh>
    )
}

const Floor = (props) => {
    return (
        <mesh {...props} receiveShadow >
            <boxGeometry args={[10,0.1,10]} />
            <meshStandardMaterial />
        </mesh>
    )
}

function App() {
  return (
      <div className="webgl">
          <Canvas
              style={{ backgroundColor: 'black'}}
              camera={{ position: [3,3,3]}}
              shadows={true}
          >
              <Box position={[-1,1.5,1]}/>
              <Floor  position={[0,-0.05,0]} />
              <ambientLight intensity={0.3} color={'red'}/>
              <axesHelper args={[5]}/>
              <pointLight  color={'#fff'}
                           intensity={1}
                           distance={10}
                           position={[0,3,0]}
                           castShadow
                           shadow-mapSize-height={512}
                           shadow-mapSize-width={512}
              />
              <Orbit/>
          </Canvas>
      </div>
  );
}

export default App;
