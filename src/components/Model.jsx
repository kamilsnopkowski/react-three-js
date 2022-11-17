import { useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";

const Model = ({path, ...props}) => {
    const model = useLoader(GLTFLoader, path);
    console.log(model);
    return(
        <primitive object={model.scene} {...props}/>
    )
}

export default Model