import './App.css';
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber'
import { useRef } from 'react'
import { OrbitControls } from "three/addons/controls/OrbitControls";
import * as THREE from 'three';
import { useHelper } from '@react-three/drei/native'
extend({ OrbitControls })

const PointLight = props => {
    const light = useRef();
    //remember to pass radius and color
    useHelper(light, THREE.PointLightHelper,0.5,'cyan');
    return(
            <pointLight
                ref={light}
                color={'#fff'}
                intensity={1}
                distance={10}
                position={[3,3,3]}
                castShadow
                shadow-mapSize-height={512}
                shadow-mapSize-width={512}
            />
    )
}
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
        <mesh ref={ref} {...props} castShadow  >
            <boxGeometry/>
            {/* main params for materials: opacity={1} transparent wireframe metalness={1} roughness={0} */}
            {/*setting transparent, clearcoat=1 and transmission=1 on meshPhysicalMaterial */}
            {/*makes it see through while still being light reflectable */}
            <meshPhysicalMaterial color="pink" transparent roughness={0} clearcoat={1} transmission={0.5} reflectivity={1} side={THREE.DoubleSide}/>
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
              <fog attach='fog' color={'black'} near={1} far={10}/>
              <Box position={[3,1,3]} />
              <Floor  position={[0,-0.05,0]} />
              <ambientLight intensity={0.3} color={'red'}/>
              <axesHelper args={[5]}/>
              <PointLight/>
              <Orbit/>
          </Canvas>
      </div>
  );
}

export default App;
