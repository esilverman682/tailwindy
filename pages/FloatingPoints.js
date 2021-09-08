import React from "react";
import * as THREE from "three";
const Detector = require("./detector");

if (!Detector.webgl) Detector.addGetWebGLMessage();

var mouseX = 0;
var mouseY = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

export default function FloatingPoints() {
  const containerRef = React.useRef();

  React.useEffect(() => {
    const { camera, scene, renderer } = init({
      container: containerRef.current
    });
    animate({ camera, scene, renderer });
  }, []);

  return (
    <div ref={containerRef} style={{ position: "fixed", zIndex: -1 }}></div>
  );
}

function createCanvasMaterial(color, size) {
  var matCanvas = document.createElement("canvas");
  matCanvas.width = matCanvas.height = size;
  var matContext = matCanvas.getContext("2d");
  // create texture object from canvas.
  var texture = new THREE.CanvasTexture(matCanvas);
  // Draw a circle
  var center = size / 2;
  matContext.strokeStyle = color;
  matContext.beginPath();
  matContext.arc(center, center, size / 2, 0, 2 * Math.PI, false);
  matContext.closePath();
  matContext.fillStyle = color;
  matContext.fill();
  // return a texture made from the canvas
  return texture;
}

function init({ container }) {
  // const container = document.createElement("div");
  // container.style.position = "fixed";
  // container.style.zIndex = -1;
  // document.body.appendChild(container);

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    2000
  );
  camera.position.z = 1000;
  camera.far = 10000;
  camera.updateProjectionMatrix();

  const scene = new THREE.Scene();
  const fogColor = new THREE.Color(0xffffff);

  scene.background = fogColor;
  scene.fog = new THREE.FogExp2(fogColor, 0.0004);

  const geometry = new THREE.Geometry();

  for (let i = 0; i < 10; i++) {
    var vertex = new THREE.Vector3();
    vertex.x = Math.random() * 2000 - 1000;
    vertex.y = Math.random() * 2000 - 1000;
    vertex.z = Math.random() * 2000 - 1000;

    geometry.vertices.push(vertex);
  }

  const parameters = [
    ["#1248F1", 5],
    ["#813788", 4],
    ["#B2333F", 3],
    ["#5ebe3c", 2]
  ];

  // parameters = [
  //   [[1, 1, 0.5], 5],
  //   [[0.95, 1, 0.5], 4],
  //   [[0.0, 0.0, 1.0], 3],
  //   [[0.0, 1.0, 0.0], 2],
  //   [[1.0, 0.0, 0.0], 1]
  // ];

  // klick: "#1248F1",
  //     consulting: "#813788",
  //     as: "#B2333F",
  //     ventures: "#5ebe3c"

  for (let i = 0; i < parameters.length; i++) {
    const color = parameters[i][0];
    // size = parameters[i][1];

    var hexColor = new THREE.Color(color).getHexString();
    // var hexColor = new THREE.Color('#1248F1').getHexString();

    const materials = [];
    materials[i] = new THREE.PointsMaterial({
      size: 80 || 20,
      map: createCanvasMaterial("#" + hexColor, 256),
      transparent: true,
      depthWrite: false
    });

    const particles = new THREE.Points(geometry, materials[i]);

    particles.rotation.x = Math.random() * 6;
    particles.rotation.y = Math.random() * 6;
    particles.rotation.z = Math.random() * 6;

    scene.add(particles);
  }

  const renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  // stats = new Stats();
  // stats.domElement.style.position = "absolute";
  // stats.domElement.style.top = "0px";
  // container.appendChild(stats.domElement);

  document.addEventListener("mousemove", onDocumentMouseMove, false);
  document.addEventListener("touchstart", onDocumentTouchStart, false);
  document.addEventListener("touchmove", onDocumentTouchMove, false);

  //

  window.addEventListener(
    "resize",
    () => onWindowResize({ camera, renderer }),
    false
  );

  return { camera, scene, renderer };
}

function onWindowResize({ camera, renderer }) {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

function onDocumentMouseMove(event) {
  mouseX = event.clientX - windowHalfX;
  mouseY = event.clientY - windowHalfY;
}

function onDocumentTouchStart(event) {
  if (event.touches.length === 1) {
    event.preventDefault();

    mouseX = event.touches[0].pageX - windowHalfX;
    mouseY = event.touches[0].pageY - windowHalfY;
  }
}

function onDocumentTouchMove(event) {
  if (event.touches.length === 1) {
    event.preventDefault();

    mouseX = event.touches[0].pageX - windowHalfX;
    mouseY = event.touches[0].pageY - windowHalfY;
  }
}

//

function animate({ scene, camera, renderer }) {
  requestAnimationFrame(() => animate({ scene, camera, renderer }));

  render({ scene, camera, renderer });
}

function render({ camera, scene, renderer }) {
  var time = Date.now() * 0.00001; // was 0.00005

  camera.position.x += (mouseX - camera.position.x) * 0.05;
  camera.position.y += (-mouseY - camera.position.y) * 0.05;

  camera.lookAt(scene.position);

  for (let i = 0; i < scene.children.length; i++) {
    var object = scene.children[i];

    if (object instanceof THREE.Points) {
      object.rotation.y = time * (i < 4 ? i + 1 : -(i + 1));
    }
  }

  renderer.render(scene, camera);
}
