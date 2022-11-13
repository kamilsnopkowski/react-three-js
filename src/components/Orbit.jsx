import {useThree} from "@react-three/fiber";
import { extend } from '@react-three/fiber'
import { OrbitControls } from "three/addons/controls/OrbitControls";
extend({ OrbitControls })

const Orbit = () => {
    const { camera, gl } = useThree();
    return (
        <orbitControls args={[camera, gl.domElement ]} attach="orbitControls" enabled={false}/>
    )
}
export default Orbit;