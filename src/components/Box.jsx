import { useLoader} from "@react-three/fiber";
import * as THREE from "three";
import WoodTexture from "../assets/images/wood.jpg";
import { useBox } from '@react-three/cannon'

const Box = (props) => {
    const [ref, api] = useBox(()=>({mass: 1, ...props}));
    const texture = useLoader(THREE.TextureLoader, WoodTexture)

    return (
        <mesh ref={ref}
              api={api}
              castShadow
              {...props}
        >
            <boxGeometry args={[1,1,1]}/>
            <meshPhysicalMaterial map={texture}/>
        </mesh>
    )
}
export default Box;