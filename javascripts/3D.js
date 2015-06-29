var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor( 0x7B79ED, 0.7);
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 2, 1, 2 );
var material = new THREE.MeshBasicMaterial( { color: "#C2F2F1" } );
var cube = new THREE.Mesh( geometry, material );

var shape = new THREE.BoxGeometry( 1, 5, 1 );
var color = new THREE.MeshBasicMaterial( { color: "#D3848E" } );
var cube2 = new THREE.Mesh(shape, color);

// second shape
var geometry2 = new THREE.BoxGeometry( 2, 1, 2 );
var material2 = new THREE.MeshBasicMaterial( { color: "#C2F2F1" } );
var cube3 = new THREE.Mesh( geometry, material );

var shape2 = new THREE.BoxGeometry( 1, 5, 1 );
var color2 = new THREE.MeshBasicMaterial( { color: "#D3848E" } );
var cube4 = new THREE.Mesh(shape, color);

// third shape
var geometry3 = new THREE.BoxGeometry( 2, 1, 2 );
var material3 = new THREE.MeshBasicMaterial( { color: "#C2F2F1" } );
var cube5 = new THREE.Mesh( geometry, material );

var shape3 = new THREE.BoxGeometry( 1, 5, 1 );
var color3 = new THREE.MeshBasicMaterial( { color: "#D3848E" } );
var cube6 = new THREE.Mesh(shape, color);

// fourth shape
var geometry4 = new THREE.BoxGeometry( 2, 1, 2 );
var material4 = new THREE.MeshBasicMaterial( { color: "#C2F2F1" } );
var cube7 = new THREE.Mesh( geometry, material );

var shape4 = new THREE.BoxGeometry( 1, 5, 1 );
var color4 = new THREE.MeshBasicMaterial( { color: "#D3848E" } );
var cube8 = new THREE.Mesh(shape, color);

cube3.translateX(3);
cube4.translateX(3);

cube5.translateX(-3);
cube6.translateX(-3);

cube7.translateX(3);
cube8.translateX(3);

scene.add( cube );
scene.add( cube2 );

scene.add(cube3);
scene.add(cube4);

scene.add(cube5);
scene.add(cube6);

// scene.add(cube7);
// scene.add(cube8);

camera.position.z = 10;

var render = function () {
	requestAnimationFrame( render );
	// peach column
	cube2.rotation.y -= 0.15;
	cube4.rotation.y -= 0.15;
	cube6.rotation.y -= 0.15;

	// blue cube
	cube.rotation.y += 0.1;
	cube3.rotation.y += 0.1;
	cube5.rotation.y += 0.1;


	renderer.render(scene, camera);
};

render();