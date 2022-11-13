import { useRef } from 'react';
import {useHelper} from "@react-three/drei/native";
import * as THREE from "three";

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

export default PointLight