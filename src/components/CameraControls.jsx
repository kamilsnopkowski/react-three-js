import {useFrame} from "@react-three/fiber";
import state from "../state";
import * as THREE from 'three'

const CameraControls = props => {
    const vec3 = new THREE.Vector3()
    useFrame(({camera,scene})=>{
        if(state.activeMesh.name !== state.activeMeshName){
            state.activeMesh = scene.getObjectByName(state.activeMeshName)
        }
        if (!state.shouldUpdate) return;
        camera.position.lerp(state.camera.position,0.1)
        scene.orbitControls.target.lerp(state.camera.target, 0.1)
        scene.orbitControls.update()
        const diff = camera.position.clone().sub(state.camera.position).length()
        if(diff < 0.1) state.shouldUpdate = false
    })
}
export default CameraControls