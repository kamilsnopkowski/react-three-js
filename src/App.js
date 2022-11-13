import './App.css';
import { Canvas, useFrame, useThree, useLoader, extend } from '@react-three/fiber'
import { useTexture } from "@react-three/drei"
import { useState, useRef, Suspense } from 'react'
import { OrbitControls } from "three/addons/controls/OrbitControls";
import * as THREE from 'three';
import { useHelper } from '@react-three/drei/native'
import WoodTexture from './assets/images/wood.jpg'
import ShopTexture from './assets/images/autoshop.jpg'
extend({ OrbitControls })

const handlePointerDown = event => {
    event.object.active = true;
    if(window.activeMesh) {
        scale(window.activeMesh, 1,1,1)
        window.activeMesh.active = false;
    }
    window.activeMesh = event.object;
}

const handlePointerEnter = event => {
    const targetMesh = event.object;
    scale(targetMesh, 2,2,2);
}
const handlePointerLeave = event => {
    const targetMesh = event.object;
    if(event.object.active) return;
    scale(targetMesh, 1,1,1);
}

const scale = (target, x,y,z) => target.scale.set(x || 1, y || 1, z || 1)

const PointLight = props => {
    const light = useRef();
    useHelper(light, THREE.PointLightHelper,0.5,'cyan');
    return(
            <pointLight
                ref={light}
                color={'#fff'}
                intensity={1}
                distance={10}
                position={[3,5,3]}
                castShadow
                shadow-mapSize-height={512}
                shadow-mapSize-width={512}
            />
    )
}

const Background = props => {
    const texture = useTexture(ShopTexture)
    //grabbing renderer
    const { gl } = useThree()
    const formatted = new THREE.WebGLCubeRenderTarget(texture.image.height).fromEquirectangularTexture(gl, texture)
    //in course dude passed formatted as object to the primitive and it worked for him
    //but in my case I needed to pass exactly the texture from the formatted variable
    return (
        <primitive attach='background' object={formatted.texture}/>
    )
}

const Orbit = () => {
    const { camera, gl } = useThree();
    return (
        <orbitControls args={[camera, gl.domElement ]}/>
    )
}

const Box = (props) => {
    const ref = useRef(null);
    const texture = useLoader(THREE.TextureLoader, WoodTexture)
    useFrame((state)=>{
        ref.current.rotation.x+= 0.01;
        ref.current.rotation.y+= 0.01;
    })

    return (
        <mesh ref={ref}
              castShadow
              onPointerDown={handlePointerDown}
              onPointerEnter={handlePointerEnter}
              onPointerLeave={handlePointerLeave}
              {...props}
        >
            <boxGeometry args={[1,1,1]}/>
            <meshPhysicalMaterial map={texture}/>
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
          {/*Suspense forces all children to wait with render for async actions to happen*/}
          <Suspense fallback={null}>
              <Canvas
                  style={{ backgroundColor: 'black'}}
                  camera={{ position: [3,3,5]}}
                  shadows={true}
              >
                  <Background/>
                  <Box position={[3,1,3]} />
                  <Box position={[-3,1,3]} />
                  <Floor  position={[0,-0.05,0]} />
                  <ambientLight intensity={0.3} color={'white'}/>
                  <axesHelper args={[5]}/>
                  <PointLight/>
                  <Orbit/>
              </Canvas>
          </Suspense>
      </div>
    );
}

export default App;
