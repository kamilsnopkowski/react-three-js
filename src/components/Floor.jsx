import { useBox } from '@react-three/cannon'
import {useMemo} from "react";

const Floor = (props) => {
    //pass the props to set the floor in the physical world to the same position as in three world
    const dimensions = useMemo(() => [200,0.1,200],[])
    const [ref] = useBox(() => ({args: dimensions,mass: 0,...props}));
    return (
        <mesh ref={ref} {...props} receiveShadow >
            <boxGeometry args={dimensions} />
            <meshStandardMaterial  />
        </mesh>
    )
}
export default Floor;