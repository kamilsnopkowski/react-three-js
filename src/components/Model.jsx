import {useFrame, useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from 'three'

const Model = ({path, ...props}) => {
    const model = useLoader(GLTFLoader, path);
    let mixer
    if(model.animations.length > 0){
        mixer = new THREE.AnimationMixer(model.scene)
        model.animations.forEach(clip => {
            const action = mixer.clipAction(clip)
            action.play()
        })
    }

    useFrame((scene,delta)=>{
        if(!mixer) return;
        mixer.update(delta)
    })

    model.scene.traverse(child => {
        if(!child.isMesh) return;
            child.castShadow = true;
            child.receiveShadow = true;
            if(child.material) child.material.side = THREE.FrontSide
    })

    return(
        <primitive object={model.scene} scale={props.scale} />
    )
}

export default Model