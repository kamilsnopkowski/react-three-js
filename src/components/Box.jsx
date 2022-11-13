import { useRef } from 'react'
import {useFrame, useLoader} from "@react-three/fiber";
import * as THREE from "three";
import WoodTexture from "../assets/images/wood.jpg";
import {scale} from '../utils/utils';

const handlePointerDown = event => {
    event.object.active = true;
    if(window.activeMesh) {
        scale(window.activeMesh, 1,1,1)
        window.activeMesh.active = false;
    }
    window.activeMesh = event.object;
}

const handlePointerEnter = event => scale(event.object, 2,2,2);
const handlePointerLeave = event => {
    if(event.object.active) return;
    scale(event.object, 1,1,1);
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
export default Box;