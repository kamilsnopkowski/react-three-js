import './App.css';
import PointLight from './components/PointLight'
import Orbit from './components/Orbit'
import Background from './components/Background'
import Floor from './components/Floor'
import Dragable from "./components/Dragable";
import { Canvas, } from '@react-three/fiber'
import { Suspense } from 'react'
import { Physics } from '@react-three/cannon'
import Model from "./components/Model";

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
                      <Model
                          path="./models/tesla_model_3/scene.gltf"
                          scale={[0.01, 0.01, 0.01]}
                          position={[3,0.6,0]}
                      />
                      <Model
                          path="./models/tesla_model_s/scene.gltf"
                          scale={[0.013, 0.013, 0.013]}
                          position={[-3,0.2,-0.8]}
                      />
                      <Dragable>

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
