import { useBox } from '@react-three/cannon'

const BoundingBox =
    ({   position = [0,0,0],
         offset= [0,0,0],
         scale = [1,1,1],
         visible = false,
         children
     }) => {

    const [ref,api] = useBox(() => ({ mass: 1, args: scale, position: position }))
    return (
        <group ref={ref} api={api}>
            <mesh scale={scale} visible={visible}>
                <boxGeometry />
                <meshPhysicalMaterial wireframe />
            </mesh>
            <group position={offset}>
                {children}
            </group>
        </group>
    )
}
export default BoundingBox