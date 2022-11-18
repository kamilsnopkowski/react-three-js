import { useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";

const Model = ({path, ...props}) => {
    const model = useLoader(GLTFLoader, path);
    return(
        <primitive object={model.scene} scale={props.scale}/>
    )
}

export default Model