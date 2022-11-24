import { useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from 'three'

const Model = ({path, ...props}) => {
    const model = useLoader(GLTFLoader, path);

    model.scene.traverse(child => {
        if(!child.isMesh) return;
            child.castShadow = true;
            child.receiveShadow = true;
            if(child.material) child.material.side = THREE.FrontSide
    })

    return(
        <primitive object={model.scene} scale={props.scale}/>
    )
}

export default Model