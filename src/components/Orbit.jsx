import {useThree} from "@react-three/fiber";
import { extend } from '@react-three/fiber'
import { OrbitControls } from "three/addons/controls/OrbitControls";
import {useEffect} from "react";
extend({ OrbitControls })

const Orbit = () => {
    const { camera, gl,scene } = useThree();
    useEffect(() => {
        scene.orbitControls.enabled = true;
    },[])
    return (
        <orbitControls args={[camera, gl.domElement ]} attach="orbitControls" enabled={false}/>
    )
}
export default Orbit;