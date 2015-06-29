var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
var columnColor = "#C2F2F1";
var cubeColor = "#D3848E";
var circleColor = "#167670";


var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor( 0x7B79ED, 0.7);
document.body.appendChild( renderer.domElement );

// shpere
// var circle = new THREE.SphereGeometry( 2, 32, 32 );
// var makeup = new THREE.MeshBasicMaterial( {color: circleColor} );
// var sphere = new THREE.Mesh( circle, makeup );
// scene.add( sphere );

// sphere.translateX(5);
// sphere.translateY(5);

// first shape combo
var geometry = new THREE.BoxGeometry( 2, 1, 2 );
var material = new THREE.MeshBasicMaterial( { color: columnColor } );
var cube = new THREE.Mesh( geometry, material );

var shape = new THREE.BoxGeometry( 1, 5, 1 );
var color = new THREE.MeshBasicMaterial( { color: cubeColor } );
var cube2 = new THREE.Mesh(shape, color);

// second shape combo
var geometry2 = new THREE.BoxGeometry( 2, 1, 2 );
var material2 = new THREE.MeshBasicMaterial( { color: columnColor} );
var cube3 = new THREE.Mesh( geometry, material );

var shape2 = new THREE.BoxGeometry( 1, 5, 1 );
var color2 = new THREE.MeshBasicMaterial( { color: cubeColor } );
var cube4 = new THREE.Mesh(shape, color);

// third shape combo
var geometry3 = new THREE.BoxGeometry( 2, 1, 2 );
var material3 = new THREE.MeshBasicMaterial( { color: columnColor } );
var cube5 = new THREE.Mesh( geometry, material );

var shape3 = new THREE.BoxGeometry( 1, 5, 1 );
var color3 = new THREE.MeshBasicMaterial( { color: cubeColor } );
var cube6 = new THREE.Mesh(shape, color);

// fourth shape combo
var geometry4 = new THREE.BoxGeometry( 2, 1, 2 );
var material4 = new THREE.MeshBasicMaterial( { color: columnColor } );
var cube7 = new THREE.Mesh( geometry, material );

var shape4 = new THREE.BoxGeometry( 1, 5, 1 );
var color4 = new THREE.MeshBasicMaterial( { color: cubeColor } );
var cube8 = new THREE.Mesh(shape, color);

// fifth shape combo
var geometry5 = new THREE.BoxGeometry( 2, 1, 2 );
var material5 = new THREE.MeshBasicMaterial( { color: columnColor } );
var cube9 = new THREE.Mesh( geometry, material );

var shape5 = new THREE.BoxGeometry( 1, 5, 1 );
var color5 = new THREE.MeshBasicMaterial( { color: cubeColor } );
var cube10 = new THREE.Mesh(shape, color);

// moveing shapes from origin
cube3.translateX(5);
cube4.translateX(5);

cube5.translateX(-5);
cube6.translateX(-5);

cube7.translateX(10);
cube8.translateX(10);

cube9.translateX(-10);
cube10.translateX(-10);

// adding shapes to canvas
scene.add( cube );
scene.add( cube2 );

scene.add(cube3);
scene.add(cube4);

scene.add(cube5);
scene.add(cube6);

scene.add(cube7);
scene.add(cube8);

scene.add(cube9);
scene.add(cube10);

// zoom
camera.position.z = 13;

var render = function () {
	requestAnimationFrame( render );

	// peach column
	cube2.rotation.z += 0.1;
	cube4.rotation.z -= 0.15;
	cube6.rotation.z += 0.15;
	cube8.rotation.z -= 0.15;
	cube10.rotation.z += 0.15;

	// blue cube
	cube.rotation.z += 0.1;
	cube3.rotation.z -= 0.15;
	cube5.rotation.z += 0.15;
	cube7.rotation.z -= 0.15;
	cube9.rotation.z += 0.15;



	renderer.render(scene, camera);
};

render();