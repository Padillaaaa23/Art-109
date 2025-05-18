// Basic Three.JS scene from documentation, importing Three.JS through a CDN 
// https://threejs.org/docs/#manual/en/introduction/Creating-a-scene


// //~~~~~~~Import Three.js (also linked to as import map in HTML)~~~~~~
import * as THREE from 'three';


// // Import add-ons
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';



// // ~~~~~~~~~~~~~~~~Set up~~~~~~~~~~~~~~~~

let scene, camera, renderer, cube;



function init(){ 

scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);


const controls = new OrbitControls(camera, renderer.domElement);

const loader = new GLTFLoader();

loader.load('assets/chicken_little_rig_mixamo_v2/scene.gltf', function(gltf) {
	const chicken = gltf.scene;
	scene.add(chicken);
	chicken.scale.set(10, 10, 10);
})

//Lights
const light = new THREE.DirectionalLight(0xffffff, 3);
light.position.set(3, 4, 5);
scene.add(light);

// const light = new THREE.DirectionalLight(0xffffff);
// scene.add(light);


const texture = new THREE.TextureLoader().load('texture/grasslight-big.jpg');

const cubeGeometry = new THREE.BoxGeometry( 2, 2, 2);
const cubeMaterial = new THREE.MeshBasicMaterial({map: texture});
cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
cube.position.set(0, -1, -1);
scene.add( cube );



class CustomSinCurve extends THREE.Curve {

    
	constructor( scale = 1 ) {
		super();
		this.scale = scale;
	}

	getPoint( t, optionalTarget = new THREE.Vector3() ) {

		const tx = t * 3 - 1.5;
		const ty = Math.sin( 2 * Math.PI * t );
		const tz = 0;

		return optionalTarget.set( tx, ty, tz ).multiplyScalar( this.scale );
	}
}

const path = new CustomSinCurve( 3 );
const tubeGeometry = new THREE.TubeGeometry( path, 20, 0.2, 8, false );
const tubeMaterial = new THREE.MeshBasicMaterial( { map: texture } );
const tubeMesh = new THREE.Mesh( tubeGeometry, tubeMaterial );
tubeMesh.scale.set(0.5, 0.5, 0.5);
scene.add( tubeMesh );




camera.position.z = 5;

const container = document.getElementById('three-container');
container.appendChild(renderer.domElement);
}






function animate() {
    requestAnimationFrame(animate);
    
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
  }



init();
animate();




// New geo






// // const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );




 

// Rendering the Scene//



// function onWindowResize()
// {
//     camera.aspect = window.innerWidth /window.innerHeight;
//     camera.updateProjectionMatrix();
// }

// window.addEventListener('resize', onWindowResize, false);




//   renderer.setAnimationLoop( animate );


