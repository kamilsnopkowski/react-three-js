import {DragControls} from "three/addons/controls/DragControls";
import {extend, useThree} from "@react-three/fiber";
import {useRef, useState, useEffect} from "react";
extend({ DragControls })

const Dragable = props => {
    const { camera, gl, scene} = useThree();
    const { orbitControls } = scene;
    const [children, setChildren] = useState([])
    const groupRef = useRef();
    const dragRef = useRef();
    useEffect(()=>{
        setChildren(groupRef.current.children);
    },[])

    useEffect(() => {
        dragRef.current.addEventListener('dragstart', e => {
            e.object.api?.mass.set(0)
        })
        dragRef.current.addEventListener('dragend', e => {
            e.object.api?.mass.set(1)
        })
        dragRef.current.addEventListener('drag', e => {
            e.object.api?.position.copy(e.object.position)
            e.object.api?.velocity.set(0,0,0)
        })
        dragRef.current.addEventListener('hoveron', e => orbitControls.enabled = false)
        dragRef.current.addEventListener('hoveroff', e => orbitControls.enabled = true)
    },[children])
    return (
        <group ref={groupRef}>
            <dragControls
                ref={dragRef}
                args={[children,camera,gl.domElement]}
                transformGroup={props.transformGroup}
                //setting transformGroup allows to drag car as a whole
                //for transformGroup to work every single object (in this case in App.js)
                //has to be wrapped in single dragable component
                //bcoz children array has to be array of one object
            />
            {props.children}
        </group>
    );
}
export default Dragable