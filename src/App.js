import './App.css';
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
import Lights from "./components/Lights";
import { EffectComposer, DepthOfField, Bloom } from "@react-three/postprocessing";

function App() {
    return (
      <div className="webgl">
          {/*Suspense forces all children to wait with render for async actions to happen*/}
          <Suspense fallback={null}>
              <Canvas
                  style={{ backgroundColor: 'black'}}
                  camera={{ position: [8,2,5] }}
                  shadows={true}
              >
                  <CameraControls/>
                  <Background/>
                  <Physics>
                      <Cars/>
                      <Floor position={[0,-0.05,0]} />
                  </Physics>
                  {/*i added this shit but it kills optimization*/}
                  {/*<EffectComposer>*/}
                  {/*    <DepthOfField  focusDistance={0} focalLength={0.02} bokehScale={2} height={480}/>*/}
                  {/*    <Bloom*/}
                  {/*      luminanceThreshold={1}*/}
                  {/*      luminanceSmoothing={0.9}*/}
                  {/*      height={300}*/}
                  {/*    />*/}
                  {/*</EffectComposer>*/}
                  <Lights/>
                  {/*<axesHelper args={[5]}/>*/}
                  <Orbit/>
              </Canvas>
          </Suspense>
          <ColorPicker/>
          <CameraButtons/>
      </div>
    );
}

export default App;
