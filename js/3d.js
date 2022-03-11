// import * as THREE from '../build/three.module.js';
import * as THREE from 'https://cdn.skypack.dev/three@v0.132.2/';

import { OrbitControls } from 'https://cdn.skypack.dev/three@v0.132.2/examples/jsm/controls/OrbitControls.js';
import { Rhino3dmLoader } from 'https://cdn.skypack.dev/three@v0.132.2/examples/jsm/loaders/3DMLoader.js';

// import { GUI } from 'https://cdn.skypack.dev/three@v0.132.2/examples/jsm/libs/dat.gui.module.js';

let camera, scene, renderer, controls;

init_3d();

function init_3d() {

	THREE.Object3D.DefaultUp = new THREE.Vector3( 0, 0, 1 );

	renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( 512, 512 );
	renderer.setClearColor( 0x000000, 0 );
	renderer.outputEncoding = THREE.sRGBEncoding;
	renderer.shadowMap.enabled = true;
//	renderer.shadowMap.type = THREE.PCFSoftShadowMap;
	renderer.shadowMap.type = THREE.VSMShadowMap;
	document.getElementById("3d_stage").appendChild( renderer.domElement );

	camera = new THREE.PerspectiveCamera( 60, 512 / 512, 1, 1000 );
	camera.position.set( -30, -40, 50 );

	scene = new THREE.Scene();

	const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.02);
	scene.add(hemiLight);

	const light = new THREE.PointLight( 0xffffff, 2 );	// this makes shadows easy
	light.position.set( -25, 0, 50 );
	light.castShadow = true;

	scene.add( light );
	light.shadow.bias = -0.0001;
	light.shadow.mapSize.width = 1024;
	light.shadow.mapSize.height = 1024;
	light.shadow.radius = 8;
	light.shadow.blurSamples = 5;

	const loader = new Rhino3dmLoader();
	loader.setLibraryPath( 'https://cdn.jsdelivr.net/npm/rhino3dm@0.15.0-beta/' );
	loader.load( 'media/resourciboard.3dm', function ( object ) {

		scene.add( object );

		animate_3d();	// this appears to be required.

		// hide spinner
		// document.getElementById( 'loader' ).style.display = 'none';

	} );

	controls = new OrbitControls( camera, renderer.domElement );

//	window.addEventListener( 'resize', resize );

}

/*
	function resize() {

		const width = window.innerWidth;
		const height = window.innerHeight;

		camera.aspect = width / height;
		camera.updateProjectionMatrix();

		renderer.setSize( width, height );

	}
*/
	var rotate = 0.0;
	function animate_3d() {

		controls.update();
		scene.children[2].rotateZ(0.01);
		renderer.render( scene, camera );

		requestAnimationFrame( animate_3d );

	}

