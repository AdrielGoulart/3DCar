"use strict";
var cena = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 1000);
var render = new THREE.WebGLRenderer();
render.setSize(window.innerWidth, window.innerHeight);
var canvas = render.domElement;
document.body.appendChild(canvas);
var materialLinha = new THREE.LineBasicMaterial({ color: 0xFFFFFF });
var geometriaLinha = new THREE.Geometry();

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

requestAnimationFrame(desenhar);