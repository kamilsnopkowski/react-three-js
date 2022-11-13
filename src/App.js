import './App.css';
import Box from './components/Box'
import PointLight from './components/PointLight'
import Orbit from './components/Orbit'
import Background from './components/Background'
import Floor from './components/Floor'
import Dragable from "./components/Dragable";
import { Canvas, } from '@react-three/fiber'
import { Suspense } from 'react'

function App() {
    return (
      <div className="webgl">
          {/*Suspense forces all children to wait with render for async actions to happen*/}
          <Suspense fallback={null}>
              <Canvas
                  style={{ backgroundColor: 'black'}}
                  camera={{ position: [3,3,5]}}
                  shadows={true}
              >
                  <Background/>
                  <Dragable>
                      <Box position={[-3,1,3]} />
                      <Box position={[3,1,3]} />
                  </Dragable>
                  <Floor position={[0,-0.05,0]} />
                  <ambientLight intensity={0.3} color={'white'}/>
                  <axesHelper args={[5]}/>
                  <PointLight/>
                  <Orbit/>
              </Canvas>
          </Suspense>
      </div>
    );
}

export default App;
