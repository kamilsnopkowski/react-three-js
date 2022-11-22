import './App.css';
import PointLight from './components/PointLight'
import Orbit from './components/Orbit'
import Background from './components/Background'
import Floor from './components/Floor'
import ColorPicker from "./components/ColorPicker";
import { Canvas, } from '@react-three/fiber'
import { Suspense } from 'react'
import { Physics } from '@react-three/cannon'
import Cars from "./components/Cars";
import CameraControls from "./components/CameraControls";
import CameraButtons from "./components/CameraButtons";


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
                  <CameraControls/>
                  <Background/>
                  <Physics>
                      <Cars/>
                      <Floor position={[0,-0.05,0]} />
                  </Physics>
                  <ambientLight intensity={0.3} color={'white'}/>
                  <axesHelper args={[5]}/>
                  <PointLight/>
                  <Orbit/>
              </Canvas>
          </Suspense>
          <ColorPicker/>
          <CameraButtons/>
      </div>
    );
}

export default App;
