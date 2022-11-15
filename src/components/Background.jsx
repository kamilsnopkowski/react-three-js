import {useTexture} from "@react-three/drei";
import ShopTexture from "../assets/images/autoshop.jpg";
import {useThree} from "@react-three/fiber";
import * as THREE from "three";
import { useMemo } from 'react';

const Background = props => {
    const texture = useTexture(ShopTexture)
    const { gl } = useThree()
    //using useMemo here to fix lag of background being re-calculated on resize
    const formatted = useMemo(() => new THREE.WebGLCubeRenderTarget(texture.image.height).fromEquirectangularTexture(gl, texture),[])
    return (
        <primitive attach='background' object={formatted.texture}/>
    )
}
export default Background;