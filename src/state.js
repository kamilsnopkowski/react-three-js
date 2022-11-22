import * as THREE from 'three'

const state = {
    activeMesh: null,
    camera: {
        position: new THREE.Vector3(5, 3, 5),
        target: new THREE.Vector3(4, 0, 0),
    },
    shouldUpdate: true,
}

export default state