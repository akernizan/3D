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

// sixth shape combo
var geometry6 = new THREE.BoxGeometry( 2, 1, 2 );
var material6 = new THREE.MeshBasicMaterial( { color: columnColor } );
var cube11 = new THREE.Mesh( geometry, material );

var shape6 = new THREE.BoxGeometry( 1, 5, 1 );
var color6 = new THREE.MeshBasicMaterial( { color: cubeColor } );
var cube12 = new THREE.Mesh(shape, color);

// seventh shape combo
var geometry7 = new THREE.BoxGeometry( 2, 1, 2 );
var material7 = new THREE.MeshBasicMaterial( { color: columnColor } );
var cube13 = new THREE.Mesh( geometry, material );

var shape7 = new THREE.BoxGeometry( 1, 5, 1 );
var color7 = new THREE.MeshBasicMaterial( { color: cubeColor } );
var cube14 = new THREE.Mesh(shape, color);

// eigth shape combo
var geometry8 = new THREE.BoxGeometry( 2, 1, 2 );
var material8 = new THREE.MeshBasicMaterial( { color: columnColor } );
var cube15 = new THREE.Mesh( geometry, material );

var shape8 = new THREE.BoxGeometry( 1, 5, 1 );
var color8 = new THREE.MeshBasicMaterial( { color: cubeColor } );
var cube16 = new THREE.Mesh(shape, color);

// ninth shape combo
var geometry9 = new THREE.BoxGeometry( 2, 1, 2 );
var material9 = new THREE.MeshBasicMaterial( { color: columnColor } );
var cube17 = new THREE.Mesh( geometry, material );

var shape9 = new THREE.BoxGeometry( 1, 5, 1 );
var color9 = new THREE.MeshBasicMaterial( { color: cubeColor } );
var cube18 = new THREE.Mesh(shape, color);

// tenth shape combo
var geometry10 = new THREE.BoxGeometry( 2, 1, 2 );
var material10 = new THREE.MeshBasicMaterial( { color: columnColor } );
var cube19 = new THREE.Mesh( geometry, material );

var shape10 = new THREE.BoxGeometry( 1, 5, 1 );
var color10 = new THREE.MeshBasicMaterial( { color: cubeColor } );
var cube20 = new THREE.Mesh(shape, color);

// eleventh shape combo
var geometry11 = new THREE.BoxGeometry( 2, 1, 2 );
var material11 = new THREE.MeshBasicMaterial( { color: columnColor } );
var cube21 = new THREE.Mesh( geometry, material );

var shape11 = new THREE.BoxGeometry( 1, 5, 1 );
var color11 = new THREE.MeshBasicMaterial( { color: cubeColor } );
var cube22 = new THREE.Mesh(shape, color);

// twelth shape combo
var geometry12 = new THREE.BoxGeometry( 2, 1, 2 );
var material12 = new THREE.MeshBasicMaterial( { color: columnColor } );
var cube23 = new THREE.Mesh( geometry, material );

var shape12 = new THREE.BoxGeometry( 1, 5, 1 );
var color12 = new THREE.MeshBasicMaterial( { color: cubeColor } );
var cube24 = new THREE.Mesh(shape, color);


// moveing shapes from origin
cube3.translateX(5);
cube4.translateX(5);

cube5.translateX(-5);
cube6.translateX(-5);

cube7.translateX(10);
cube8.translateX(10);

cube9.translateX(-10);
cube10.translateX(-10);

cube11.translateY(6);
cube12.translateY(6);

cube13.translateY(-6);
cube14.translateY(-6);

cube15.translateY(-6);
cube16.translateY(-6);

cube15.translateX(-6);
cube16.translateX(-6);

cube17.translateY(-6);
cube18.translateY(-6);

cube17.translateX(-12);
cube18.translateX(-12);

cube19.translateY(-6);
cube20.translateY(-6);

cube19.translateX(12);
cube20.translateX(12);

cube21.translateY(-6);
cube22.translateY(-6);

cube21.translateX(6);
cube22.translateX(6);

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

scene.add(cube11);
scene.add(cube12);

scene.add(cube13);
scene.add(cube14);

scene.add(cube15);
scene.add(cube16);

scene.add(cube17);
scene.add(cube18);

scene.add(cube19);
scene.add(cube20);

scene.add(cube21);
scene.add(cube22);
// zoom
camera.position.z = 13;

var render = function () {
	requestAnimationFrame( render );

	// peach column
	cube2.rotation.y += 0.1;
	cube4.rotation.z -= 0.15;
	cube6.rotation.z += 0.15;
	cube8.rotation.z -= 0.15;
	cube10.rotation.z += 0.15;
	cube12.rotation.y += 0.11;
	cube14.rotation.y += 0.11;
	cube16.rotation.z += 0.15;
	cube18.rotation.z += 0.15;

	cube20.rotation.z -= 0.15;
	cube22.rotation.z -= 0.15;

	// blue cube
	cube.rotation.y += 0.1;
	cube3.rotation.z -= 0.15;
	cube5.rotation.z += 0.15;
	cube7.rotation.z -= 0.15;
	cube9.rotation.z += 0.15;
	cube11.rotation.y +=0.11;
	cube13.rotation.y +=0.11;
	cube15.rotation.z += 0.15;
	cube17.rotation.z += 0.15;
	cube19.rotation.z -= 0.15;
	cube21.rotation.z -= 0.15;




	renderer.render(scene, camera);
};

render();