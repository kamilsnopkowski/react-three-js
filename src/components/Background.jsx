import {useTexture} from "@react-three/drei";
import ShopTexture from "../assets/images/autoshop.jpg";
import {useThree} from "@react-three/fiber";
import * as THREE from "three";

const Background = props => {
    const texture = useTexture(ShopTexture)
    const { gl } = useThree()
    const formatted = new THREE.WebGLCubeRenderTarget(texture.image.height).fromEquirectangularTexture(gl, texture)
    return (
        <primitive attach='background' object={formatted.texture}/>
    )
}
export default Background;