function createBall() {
	var object = new THREE.Object3D(), 
		geometry = new THREE.SphereGeometry(5,50,50),
		material = new THREE.MeshLambertMaterial( { color : 0xD43001 });
		mesh = new THREE.Mesh(geometry, material);
		object.add(mesh);
	return object;

}

function createRaquette1(){
	var object = new THREE.Object3D(),
	    geometry = new THREE.BoxGeometry(paddleWidth, paddleHeight, 10),
	    material = new THREE.MeshLambertMaterial({ color:0xff0000}),
	    mesh = new THREE.Mesh(geometry, material);
	object.add(mesh);
	return object;
};

function createRaquette2(){
	var object = new THREE.Object3D(),
	    geometry = new THREE.BoxGeometry(paddleWidth, paddleHeight, 10),
	    material = new THREE.MeshLambertMaterial({ color:0x0000ff}),
	    mesh = new THREE.Mesh(geometry, material);
	object.add(mesh);
	return object;
};

function createPointLight () {
	var pointLight =
	new THREE.PointLight(0xF8D898);
	
	// set its position
	pointLight.position.x = -1000;
	pointLight.position.y = 1000;
	pointLight.position.z = 1000;
	pointLight.intensity = 2.9;
	pointLight.distance = 10000;
	
	return pointLight;
}

function createSpotLight() {
	// add a spot light
	// this is important for casting shadows
	   var  spotLight = new THREE.SpotLight(0xF8D898);
	    spotLight.position.set(100, 100, 460);
	    spotLight.intensity = 1.5;
	    spotLight.castShadow = true;
	  	return spotLight;
}

function createTexture(){
	var texture = new THREE.Texture(video),
	    object = new THREE.Object3D(),
	    geometry = new THREE.PlaneGeometry(1.0, 1.0, 0.0),
	    material = new THREE.MeshBasicMaterial( {map: texture, depthTest: false, depthWrite: false} ),
	    mesh = new THREE.Mesh(geometry, material);
	object.position.z = -1;
	object.add(mesh);
	return object;
};

function createPlateau(){
	var object = new THREE.Object3D(),
	    geometry = new THREE.BoxGeometry(modelSize + offsetx, modelSize+offsety, 0),
	    material = new THREE.MeshBasicMaterial( {color:0xff00ff, transparent : true, opacity : 0.5} ),
	    mesh = new THREE.Mesh(geometry, material);
	object.add(mesh);
	return object;
};

