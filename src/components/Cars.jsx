import Dragable from "./Dragable";
import BoundingBox from "./BoundingBox";
import Model from "./Model";

const Cars = () => {
    return (
        <>
            <Dragable
                transformGroup
            >
                <BoundingBox
                    //visible
                    position={[3,3,0]}
                    scale={[3,2,6.4]}
                    offset={[0,-0.38,0.8]}>
                    <Model
                        path="./models/tesla_model_3/scene.gltf"
                        scale={[0.01, 0.01, 0.01]}
                    />
                </BoundingBox>

            </Dragable>
            <Dragable
                transformGroup
            >
                <BoundingBox
                    // visible
                    position={[-3,3,0]}
                    scale={[3.3,2.2,7.2]}
                    offset={[0,-0.8,0.2]}>
                    <Model
                        path="./models/tesla_model_s/scene.gltf"
                        scale={[0.013, 0.013, 0.013]}
                    />
                </BoundingBox>
            </Dragable>
            <group rotation={[0,-0.5*Math.PI,0]} position={[0.5,0.5,0]}>
                <Model
                    path="./models/mech_drone/scene.gltf"
                    scale={[10,10,10]}
                />
            </group>
        </>
    )
}
export default Cars;