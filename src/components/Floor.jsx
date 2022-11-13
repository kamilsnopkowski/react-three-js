const Floor = (props) => {
    return (
        <mesh {...props} receiveShadow >
            <boxGeometry args={[10,0.1,10]} />
            <meshStandardMaterial />
        </mesh>
    )
}
export default Floor;