function createBall() {
	var object = new THREE.Object3D(), 
		geometry = new THREE.SphereGeometry(5,50,50),
		material = new THREE.MeshLambertMaterial( { color : 0xD43001 });
		mesh = new THREE.Mesh(geometry, material);
		object.add(mesh);
	return object;

}

function createRaquette(){
	var object = new THREE.Object3D(),
	    geometry = new THREE.BoxGeometry(paddleWidth, paddleHeight, 0),
	    material = new THREE.MeshBasicMaterial({ color:0xfe0008}),
	    mesh = new THREE.Mesh(geometry, material);
	object.add(mesh);
	return object;
};

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
	    material = new THREE.MeshBasicMaterial( {color:0xff00ff, wireframe : true, wireframeLineWidth : 3} ),
	    mesh = new THREE.Mesh(geometry, material);
	object.add(mesh);
	return object;
};

