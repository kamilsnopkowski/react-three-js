import logo from './logo.svg';
import './App.css';
import * as THREE from 'three';

function App() {

    const scene = new THREE.Scene();
    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight,
    }
    const camera = new THREE.PerspectiveCamera(75, sizes.width/ sizes.height, 0.1, 1000);
    const canvas = document.querySelector('canvas.webgl')
    const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor('#201919');

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({color: 'red'});
    const cube = new THREE.Mesh(geometry, material);
    cube.position.z = -5
    scene.add(cube)

    window.addEventListener('resize', () =>
    {
        // Update sizes
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight

        // Update camera
        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()

        // Update renderer
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    })


    const tick = () => {
        requestAnimationFrame(tick);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene,camera);
    }

    tick()



  return (
      <canvas className="webgl"></canvas>
  );
}

export default App;
