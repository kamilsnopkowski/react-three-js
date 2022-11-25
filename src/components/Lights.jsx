import PointLight from "./PointLight";

const Lights = props => {
    return (
        <>
            <directionalLight
                position={[6,3,0]}
                intensity={1}
                color={'white'}
                castShadow
                shadow-mapSize-height={1024}
                shadow-mapSize-width={1024}
                shadow-radius={10}
            />
            <ambientLight intensity={0.3} color={'white'}/>
            <PointLight position={[3,7,1]}/>
            <PointLight position={[-3,7,-1]}/>
        </>
    )
}
export default Lights;