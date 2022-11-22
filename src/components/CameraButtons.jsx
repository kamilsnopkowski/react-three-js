import state from "../state";

const CameraButtons = props => {
    const sets = {
     1: {
         position: [8,2,5],
         target: [3,3,0],
     },
      2: {
          position: [1,2.5,6],
          target: [-3,3,0],
      }
    }
    const handleClick  = num => {
        state.camera.position.set(...sets[num].position)
        state.camera.target.set(...sets[num].target)
        state.shouldUpdate = true
    };
    const style = {
        zIndex: 1,
        position: 'absolute',
        bottom: '10vh',
        backgroundColor: 'rgba(231,234,243,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        width: 70,
        height: 70,
        cursor: 'pointer',
        border: '1px solid black',
        fontSize: 22,
    }
    return (
        <>
            <button onClick={() => handleClick(1)} style={{...style,right: '20vw'}}>
                1
            </button>
            <button onClick={() => handleClick(2)} style={{ ...style,left: '20vw'}}>
                2
            </button>
        </>
    )
}

export default CameraButtons;