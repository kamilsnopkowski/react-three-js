import './App.css';
import Box from './components/Box'
import PointLight from './components/PointLight'
import Orbit from './components/Orbit'
import Background from './components/Background'
import Floor from './components/Floor'
import Dragable from "./components/Dragable";
import { Canvas, } from '@react-three/fiber'
import { Suspense } from 'react'
import { Physics } from '@react-three/cannon'

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
                  <Physics>
                      <Dragable>
                          <Box position={[-3,1,3]} />
                          <Box position={[3,1,3]} />
                      </Dragable>
                      <Floor position={[0,-0.05,0]} />
                  </Physics>
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
