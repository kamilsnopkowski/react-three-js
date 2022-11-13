import {DragControls} from "three/addons/controls/DragControls";
import {extend, useThree} from "@react-three/fiber";
import {useRef, useState, useEffect} from "react";
extend({ DragControls })

const Dragable = props => {
    const { camera, gl, scene} = useThree();
    const [children, setChildren] = useState([])
    const groupRef = useRef();
    const dragRef = useRef();
    useEffect(()=>{
        setChildren(groupRef.current.children);
    },[])

    useEffect(() => {
        dragRef.current.addEventListener('hoveron', e => scene.orbitControls.enabled = false)
        dragRef.current.addEventListener('hoveroff', e => scene.orbitControls.enabled = true)
    },[children])
    return (
        <group ref={groupRef}>
            <dragControls ref={dragRef} args={[children,camera,gl.domElement]}/>
            {props.children}
        </group>
    );
}
export default Dragable