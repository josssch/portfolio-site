import React from 'react';

import { WEBGL } from '../utils/webgl';
import * as THREE from 'three';

import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


export default class Animation extends React.Component {
  componentDidMount() {
    // make sure WebGL is enabled
    if (!WEBGL.isWebGLAvailable()) {
      console.log('WebGL is unavailable');
      return; // do nothing
    }

    this.setupScene();
    this.loadObjs();
    this.animateLoop();
  }

  setupScene() {
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    this.mount.appendChild(this.renderer.domElement);

    // the width and height stored for consistency
    this.width  = this.mount.offsetWidth;
    this.height = this.mount.offsetHeight;

    this.renderer.setSize(this.width, this.height);

    this.camera = new THREE.PerspectiveCamera(50, this.width / this.height);
    this.camera.position.set(0, 50, 100); // back up
    this.camera.lookAt(0, 5, 0);

    // this.orbit = new OrbitControls(this.camera, this.renderer.domElement);
    // this.orbit.target.set(0, 5, 0);
    // this.orbit.update();

    // add the basic lighting
    this.scene.add(new THREE.AmbientLight(0xffffff, .75));

    let light = new THREE.PointLight(0xffffff, 1.5);
    light.position.set(0, 25, 50);
    this.scene.add(light);
  }

  async loadObjs() {
    this.objLoader = new OBJLoader();
    this.mtlLoader = new MTLLoader();

    let mtl = await this.mtlLoader.loadAsync('/assets/python.mtl');
    mtl.preload();
    this.objLoader.setMaterials(mtl);

    this.windmill = await this.objLoader.loadAsync('/assets/python.obj');

    this.windmill.scale.set(25, 25, 25);

    this.scene.add(this.windmill);
  }

  animateLoop() {
    requestAnimationFrame(() => this.animateLoop());

    // this.orbit.update();

    if (!this.windmill) {
      return;
    }

    this.windmill.rotation.y -= 0.01;
    this.renderer.render(this.scene, this.camera);
  }

  render() {
    return (
      <div ref={mount => this.mount = mount} />
    );
  }
}
