import './App.css';
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'

const Box = () => {
    const ref = useRef(null);
    useFrame((state)=>{
        ref.current.rotation.x+= 0.01;
        ref.current.rotation.y+= 0.01;
    })
    return (
        <mesh ref={ref}>
            <boxGeometry/>
            <meshBasicMaterial color="red"/>
        </mesh>
    )
}

function App() {


  return (
      <div className="webgl">
          <Canvas style={{ backgroundColor: 'black'}}>
              <Box/>
          </Canvas>
      </div>
  );
}

export default App;
