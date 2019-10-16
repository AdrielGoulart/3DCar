"use strict";
/*var cena = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 1000);
var render = new THREE.WebGLRenderer();
render.setSize(window.innerWidth, window.innerHeight);
var canvas = render.domElement;
document.body.appendChild(canvas);
var materialLinha = new THREE.LineBasicMaterial({ color: 0xFFFFFF });
var geometriaLinha = new THREE.Geometry();


var material = new THREE.MeshBasicMaterial({
   // map : THREE.ImageUtils.loadTexture('pista.png'),  // if I put only this, I see no mesh
   color : 0x0000ff    // this draws blue mesh
});

// plane
var plane = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), material);

cena.add( plane );

//Spline 
var curva = new THREE.SplineCurve([
    new THREE.Vector3(-1, 0, 0),
    new THREE.Vector3(-0.5, 0.5, 0),
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0.5, -0.5, 0),
    new THREE.Vector3(1, 0, 0),
    new THREE.Vector3(1.5, 0.5, 0),
    new THREE.Vector3(2, 0, 0)
]);

var caminho = new THREE.Path(curva.getPoints(50));
var geometriaLinha = caminho.createPointsGeometry(50);

//Desenhar os pontos de referencia 
var materialPonto = new THREE.PointsMaterial({ size: 10, sizeAttenuation: false });
//Outra forma de ver os pontos
//for (let p of geometriaLinha.vertices) {
for (let p of curva.points) {
    var geometriaPonto = new THREE.Geometry();
    geometriaPonto.vertices.push(new THREE.Vector3(p.x, p.y, p.z));
    var ponto = new THREE.Points(geometriaPonto, materialPonto);
    cena.add(ponto);
}


var linha = new THREE.Line(geometriaLinha, materialLinha);
cena.add(linha);
camera.position.z = 5;

function desenhar() {
    curva.points[0].y -= 0.01;
    //curva.points[1].x -= 0.05;
    var caminho = new THREE.Path(curva.getPoints(50));
    linha.geometry = caminho.createPointsGeometry(50);
    render.render(cena, camera);
   
    requestAnimationFrame(desenhar);
}

requestAnimationFrame(desenhar);*/
var materialLinha = new THREE.LineBasicMaterial({ color: 0xFFFFFF });
var geometriaLinha = new THREE.Geometry();
var cena = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(1, 0.09, 18);
var renderer = new THREE.WebGLRenderer({
  antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
var canvas = renderer.domElement;
document.body.appendChild(canvas);
renderer.setClearColor(0x101010);
document.body.appendChild(renderer.domElement);

var controls = new THREE.OrbitControls(camera, renderer.domElement);

var light = new THREE.DirectionalLight(0xffffff, 1);
light.position.setScalar(10);
cena.add(light);

var planeGeometry = new THREE.PlaneGeometry(20, 20, 1, 1);
var texture = new THREE.TextureLoader().load('pista.png');
var planeMaterial = new THREE.MeshLambertMaterial({
  map: texture
});

var plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.receiveShadow = true;
plane.position.set(1, 0, 0);

// Adicionando o plano a cena
cena.add(plane);
//Spline 
var curva = new THREE.SplineCurve([
  new THREE.Vector3(-7.2, 3, 0.2),
  new THREE.Vector3(-7.2, 7.5, 0.2),
  new THREE.Vector3(-4, 7.5, 0.2),
  new THREE.Vector3(-3.5, 3, 0.2),
  new THREE.Vector3(2, 3, 0.2),
  new THREE.Vector3(3, 7.5, 0.2),
  new THREE.Vector3(5.5, 7.5, 0.2),
  new THREE.Vector3(6.5, 1.5, 0.2),
  new THREE.Vector3(8.7, 0, 0.2),
  new THREE.Vector3(9, -3, 0.2),
  new THREE.Vector3(7, -4.5, 0.2)
]);

var caminho = new THREE.Path(curva.getPoints(50));
var geometriaLinha = caminho.createPointsGeometry(50);

//Desenhar os pontos de referencia 
var materialPonto = new THREE.PointsMaterial({ size: 10, sizeAttenuation: false });
//Outra forma de ver os pontos
//for (let p of geometriaLinha.vertices) {
for (let p of curva.points) {
  var geometriaPonto = new THREE.Geometry();
  geometriaPonto.vertices.push(new THREE.Vector3(p.x, p.y, p.z));
  var ponto = new THREE.Points(geometriaPonto, materialPonto);
  cena.add(ponto);
}


var linha = new THREE.Line(geometriaLinha, materialLinha);
cena.add(linha);

render();

function render() {
  requestAnimationFrame(render);
  renderer.render(cena, camera);
}

canvas.addEventListener("mousemove", function (e) 
{
    if(e.buttons > 0)
    {
      //FIXME
      //plane.positiion.x = -0.5 * Math.PI;
      camera.positiion.x = -0.5 * Math.PI;
    }
}, false);