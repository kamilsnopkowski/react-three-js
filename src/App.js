import './App.css';
import PointLight from './components/PointLight'
import Orbit from './components/Orbit'
import Background from './components/Background'
import Floor from './components/Floor'
import Dragable from "./components/Dragable";
import ColorPicker from "./components/ColorPicker";
import { Canvas, } from '@react-three/fiber'
import { Suspense } from 'react'
import { Physics } from '@react-three/cannon'
import Model from "./components/Model";
import BoundingBox from "./components/BoundingBox";

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
                      <Dragable transformGroup >
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
                      <Dragable transformGroup >
                          <BoundingBox
                              //visible
                              position={[-3,3,0]}
                              scale={[3.3,2.2,7.2]}
                              offset={[0,-0.8,0.2]}>
                              <Model
                                  path="./models/tesla_model_s/scene.gltf"
                                  scale={[0.013, 0.013, 0.013]}
                              />
                          </BoundingBox>
                      </Dragable>
                      <Floor position={[0,-0.05,0]} />
                  </Physics>
                  <ambientLight intensity={0.3} color={'white'}/>
                  <axesHelper args={[5]}/>
                  <PointLight/>
                  <Orbit/>
              </Canvas>
          </Suspense>
          <ColorPicker/>
      </div>
    );
}

export default App;
