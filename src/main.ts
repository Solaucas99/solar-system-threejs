import * as THREE from 'three';
import './style.css';
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import bg1 from './bg1.png';

import sun_map from './sun.jpg';
import sun_alpha_map from './sun_map.jpg';

import mercury_map from './mercury.jpg';

import venus_map from './venus.jpg';

import earth_map from './earth.jpg';
import earth_alpha_map from './earth_alpha.jpg';

import moon_map from './moon.jpg';

import mars_map from './mars.jpg';

import jupiter_map from './jupiter.jpg';

import saturn_map from './saturn.jpg';

import uranus_map from './uranus.jpg';

import neptune_map from './neptune.jpg';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({
  antialias: true,
});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const bg = new THREE.TextureLoader().load(bg1);

// galaxy geometry
const starGeometry = new THREE.SphereGeometry(190, 94, 94);

// galaxy material
const starMaterial = new THREE.MeshBasicMaterial({
  map: bg,
  side: THREE.BackSide,
  transparent: true,
});

// galaxy mesh
const starMesh = new THREE.Mesh(starGeometry, starMaterial);
starMesh.layers.set(1);
scene.add(starMesh);

//bloom renderer
const renderScene = new RenderPass(scene, camera);
const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  1.2,
  0.4,
  0.85
);
bloomPass.threshold = 0;
bloomPass.strength = 0.1; //intensity of glow
bloomPass.radius = 0;
const bloomComposer = new EffectComposer(renderer);
bloomComposer.setSize(window.innerWidth, window.innerHeight);
bloomComposer.renderToScreen = true;
bloomComposer.addPass(renderScene);
bloomComposer.addPass(bloomPass);


//ambient light
const ambientlight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientlight);

// sun
const sun_alpha_img = new THREE.TextureLoader().load(sun_alpha_map);
const sun_img = new THREE.TextureLoader().load(sun_map);

const sun_geometry = new THREE.IcosahedronGeometry( 70, 15 );
const sun_material = new THREE.MeshBasicMaterial( {
  alphaMap: sun_alpha_img,
  map: sun_img,
} );
const sun = new THREE.Mesh( sun_geometry, sun_material );
sun.layers.set(1);
sun.position.setX(-130);
scene.add(sun);

//mercury
const mercury_img = new THREE.TextureLoader().load(mercury_map);

const mercury_geometry = new THREE.SphereGeometry( 1.6, 25, 25, 25 );
const mercury_material = new THREE.MeshBasicMaterial( {
  map: mercury_img,
} );
const mercury = new THREE.Mesh( mercury_geometry, mercury_material );
mercury.layers.set(1);
mercury.position.setX(-37);
mercury.position.setY(-3)
scene.add(mercury);

//venus
const venus_img = new THREE.TextureLoader().load(venus_map);

const venus_geometry = new THREE.SphereGeometry( 2, 25, 25, 25 );
const venus_material = new THREE.MeshBasicMaterial( {
  map: venus_img,
} );
const venus = new THREE.Mesh( venus_geometry, venus_material );
venus.layers.set(1);
venus.position.setX(-30);
venus.position.setY(5)
scene.add(venus);

//earth
const earth_img = new THREE.TextureLoader().load(earth_map);
const earth_alpha_img = new THREE.TextureLoader().load(earth_alpha_map);

const earth_geometry = new THREE.SphereGeometry( 2.2, 25, 25, 25 );
const earth_material = new THREE.MeshBasicMaterial( {
  alphaMap: earth_alpha_img,
  map: earth_img,
} );
const earth = new THREE.Mesh( earth_geometry, earth_material );
earth.layers.set(1);
earth.position.setX(-23);
earth.position.setY(0)
scene.add(earth);

//moon
const moon_img = new THREE.TextureLoader().load(moon_map);

const moon_geometry = new THREE.SphereGeometry( 0.7, 25, 25, 25 );
const moon_material = new THREE.MeshBasicMaterial( {
  map: moon_img,
} );
const moon = new THREE.Mesh( moon_geometry, moon_material );
moon.layers.set(1);
moon.position.setX(-21);
moon.position.setY(3)
scene.add(moon);

//mars
const mars_img = new THREE.TextureLoader().load(mars_map);

const mars_geometry = new THREE.SphereGeometry( 1.9, 25, 25, 25 );
const mars_material = new THREE.MeshBasicMaterial( {
  map: mars_img,
} );
const mars = new THREE.Mesh( mars_geometry, mars_material );
mars.layers.set(1);
mars.position.setX(-18);
mars.position.setY(-6)
scene.add(mars);

//jupiter
const jupiter_img = new THREE.TextureLoader().load(jupiter_map);

const jupiter_geometry = new THREE.SphereGeometry( 4.5, 25, 25, 25 );
const jupiter_material = new THREE.MeshBasicMaterial( {
  map: jupiter_img,
} );
const jupiter = new THREE.Mesh( jupiter_geometry, jupiter_material );
jupiter.layers.set(1);
jupiter.position.setX(-7);
jupiter.position.setY(3)
scene.add(jupiter);

//saturn
const saturn_img = new THREE.TextureLoader().load(saturn_map);

const saturn_geometry = new THREE.SphereGeometry( 3.6, 25, 25, 25 );
const saturn_material = new THREE.MeshBasicMaterial( {
  map: saturn_img,
} );
const saturn = new THREE.Mesh( saturn_geometry, saturn_material );

const saturn_ring_geometry = new THREE.RingGeometry( 7, 5, 32 );
const saturn_ring_material = new THREE.MeshBasicMaterial( { color: 0xFAD2A2, side: THREE.DoubleSide } );
const saturn_ring = new THREE.Mesh( saturn_ring_geometry, saturn_ring_material );

saturn.layers.set(1);
saturn.position.setX(2);
saturn.position.setY(15);

saturn_ring.layers.set(1);
saturn_ring.position.setX(2);
saturn_ring.position.setY(15);
saturn_ring.rotation.y = -9.8;
saturn_ring.rotation.x = 30;
scene.add(saturn, saturn_ring);

//uranus
const uranus_img = new THREE.TextureLoader().load(uranus_map);

const uranus_geometry = new THREE.SphereGeometry( 1.6, 25, 25, 25 );
const uranus_material = new THREE.MeshBasicMaterial( {
  map: uranus_img,
} );
const uranus = new THREE.Mesh( uranus_geometry, uranus_material );
uranus.layers.set(1);
uranus.position.setX(10);
uranus.position.setY(-2)
scene.add(uranus);

//neptune
const neptune_img = new THREE.TextureLoader().load(neptune_map);

const neptune_geometry = new THREE.SphereGeometry( 1.6, 25, 25, 25 );
const neptune_material = new THREE.MeshBasicMaterial( {
  map: neptune_img,
} );
const neptune = new THREE.Mesh( neptune_geometry, neptune_material );
neptune.layers.set(1);
neptune.position.setX(16);
neptune.position.setY(12)
scene.add(neptune);


function addStar() {
  const geometry = new THREE.SphereGeometry( 0.10, 10, 10 );
  const material = new THREE.MeshBasicMaterial( {color: 0xFFFFFF} );
  const star = new THREE.Mesh( geometry, material );
  const [x, y, z] = Array(3).fill(1).map(() => THREE.MathUtils.randFloatSpread( 400 ));
  
  star.position.setX(x);
  star.position.setY(y);
  star.position.setZ(z);
  star.layers.set(1);
  scene.add( star );
}

Array(1000).fill(1).forEach(addStar);

camera.position.z = 35;

const controls = new OrbitControls(camera, renderer.domElement);

function render() {
  requestAnimationFrame( render );
  starMesh.rotation.x += 0.001;
  camera.layers.set(1);

  controls.update();

  bloomComposer.render();
}

render();

let t_mercury = 0;
let t_venus = 0;
let t_earth = 0;
let t_mars = 0;
let t_jupiter = 0;
let t_saturn = 0;
let t_uranus = 0;
let t_neptune = 0;

function animate() {
	requestAnimationFrame( animate );
  t_mercury += 0.01
  t_venus += 0.009
  t_earth += 0.008
  t_mars += 0.007
  t_jupiter += 0.006
  t_saturn += 0.005
  t_uranus += 0.003
  t_neptune += 0.001

  sun.rotation.y += 0.001;
  
  mercury.rotation.y += 0.01;
  mercury.position.x = 216*Math.cos(t_mercury) + 0;
  mercury.position.z = 216*Math.sin(t_mercury) + 0;

  venus.rotation.y += 0.01;
  venus.position.x = 223*Math.cos(t_venus) + 0;
  venus.position.z = 223*Math.sin(t_venus) + 0;

  earth.rotation.y += 0.01;
  earth.position.x = 230*Math.cos(t_earth) + 0;
  earth.position.z = 230*Math.sin(t_earth) + 0; // These to strings make it work

  moon.rotation.y += 0.01;
  moon.position.x = 235*Math.cos(t_earth) + 0;
  moon.position.z = 235*Math.sin(t_earth) + 0;

  mars.rotation.y += 0.01;
  mars.position.x = 238*Math.cos(t_mars) + 0;
  mars.position.z = 238*Math.sin(t_mars) + 0;

  jupiter.rotation.y += 0.01;
  jupiter.position.x = 249*Math.cos(t_jupiter) + 0;
  jupiter.position.z = 249*Math.sin(t_jupiter) + 0;

  saturn.rotation.y += 0.01;
  saturn_ring.rotation.z += 0.01;
  saturn.position.x = 258*Math.cos(t_saturn) + 0;
  saturn.position.z = 258*Math.sin(t_saturn) + 0;
  saturn_ring.position.x = 258*Math.cos(t_saturn) + 0;
  saturn_ring.position.z = 258*Math.sin(t_saturn) + 0;

  uranus.rotation.y += 0.01;
  uranus.position.x = 266*Math.cos(t_uranus) + 0;
  uranus.position.z = 266*Math.sin(t_uranus) + 0;

  neptune.rotation.y += 0.01;
  neptune.position.x = 272*Math.cos(t_neptune) + 0;
  neptune.position.z = 272*Math.sin(t_neptune) + 0;
}


const button = document.querySelector('#animate');

button?.addEventListener('click', animate);