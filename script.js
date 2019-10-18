"use strict";
//Linha da pista
var materialLinha = new THREE.LineBasicMaterial({ color: 0xFFFFFF });
var geometriaLinha = new THREE.Geometry();

//Cena
var cena = new THREE.Scene();

//Câmera
var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);

//Posição da câmera
camera.position.set(1, 0.09, 18);

//Renderizador
var renderer = new THREE.WebGLRenderer({
  antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x101010);
document.body.appendChild(renderer.domElement);

//Luz da câmera
var luz = new THREE.DirectionalLight(0xffffff, 1);
luz.position.setScalar(10);
cena.add(luz);

//Pista
var planoPista = new THREE.PlaneGeometry(20, 20, 1, 1);
var pistaMaterial = new THREE.MeshLambertMaterial({
  map: new THREE.TextureLoader().load('pista.png')
});
//Unindo o material da pista com o plano
var material = new THREE.Mesh(planoPista, pistaMaterial);
material.receiveShadow = true;
material.position.set(1, 0, 0);

// Adicionando o a pista a cena
cena.add(material);

//Spline 
//Pontos por onde a curva irá passar
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
  new THREE.Vector3(6.6, -4.5, 0.2),
  new THREE.Vector3(6, -7.9, 0.2),
  new THREE.Vector3(3.3, -8, 1),
  new THREE.Vector3(2.5, -5, 0.2),
  new THREE.Vector3(2.5, -2, 0.2),
  new THREE.Vector3(-1.2, -2, 0.2),
  new THREE.Vector3(-1.8, -6, 0.2),
  new THREE.Vector3(-4, -6, 0.2),
  new THREE.Vector3(-4.6, -3.8, 0.2),
  new THREE.Vector3(-6.7, -2.9, 0.2),
]);

var caminho = new THREE.Path(curva.getPoints(50));
var geometriaLinha = caminho.createPointsGeometry(50);

//Desenhar os pontos de referencia 
var materialPonto = new THREE.PointsMaterial({ size: 10, sizeAttenuation: false });

//For responsáve por adicionar os pontos na tela
for (let p of curva.points) {
  var geometriaPonto = new THREE.Geometry();
  geometriaPonto.vertices.push(new THREE.Vector3(p.x, p.y, p.z));
  var ponto = new THREE.Points(geometriaPonto, materialPonto);
  cena.add(ponto);
}

//Linha que será o caminho por onde o carro irá passar
var linha = new THREE.Line(geometriaLinha, materialLinha);
cena.add(linha);

//Cubo
var geometria = new THREE.BoxGeometry(1, 1.8, 1);
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cubo = new THREE.Mesh(geometria, material);
cubo.position.set(-7.2, 3, 0.2);
cena.add(cubo);

//Pontos por onde o carro irá passar
var p1 = new TWEEN.Tween(cubo.position).to(curva.points[0], 1000);
var p2 = new TWEEN.Tween(cubo.position).to(curva.points[1], 1000);
var p3 = new TWEEN.Tween(cubo.position).to(curva.points[2], 1000);
var p4 = new TWEEN.Tween(cubo.position).to(curva.points[3], 1000);
var p5 = new TWEEN.Tween(cubo.position).to(curva.points[4], 1000);
var p6 = new TWEEN.Tween(cubo.position).to(curva.points[5], 1000);
var p7 = new TWEEN.Tween(cubo.position).to(curva.points[6], 1000);
var p8 = new TWEEN.Tween(cubo.position).to(curva.points[7], 1000);
var p9 = new TWEEN.Tween(cubo.position).to(curva.points[8], 1000);
var p10 = new TWEEN.Tween(cubo.position).to(curva.points[9], 1000);
var p11 = new TWEEN.Tween(cubo.position).to(curva.points[10], 1000);
var p12 = new TWEEN.Tween(cubo.position).to(curva.points[11], 1000);
var p13 = new TWEEN.Tween(cubo.position).to(curva.points[12], 1000);
var p14 = new TWEEN.Tween(cubo.position).to(curva.points[13], 1000);
var p15 = new TWEEN.Tween(cubo.position).to(curva.points[14], 1000);
var p16 = new TWEEN.Tween(cubo.position).to(curva.points[15], 1000);
var p17 = new TWEEN.Tween(cubo.position).to(curva.points[16], 1000);
var p18 = new TWEEN.Tween(cubo.position).to(curva.points[17], 1000);
var p19 = new TWEEN.Tween(cubo.position).to(curva.points[18], 1000);
var p20 = new TWEEN.Tween(cubo.position).to(curva.points[19], 1000)

//Ordem dos pontos que o carro irá passar
p1.chain(p2);
p2.chain(p3);
p3.chain(p4);
p4.chain(p5);
p5.chain(p6);
p6.chain(p7);
p7.chain(p8);
p8.chain(p9);
p9.chain(p10);
p10.chain(p11);
p11.chain(p12);
p12.chain(p13);
p13.chain(p14);
p14.chain(p15);
p15.chain(p16);
p16.chain(p17);
p17.chain(p18);
p18.chain(p19);
p19.chain(p20);
p20.chain(p1);


//Ponto de inicio
p1.start();


function desenhar() {
  animacao();
  requestAnimationFrame(desenhar);
  renderer.render(cena, camera);
}

desenhar();

//Método responsável por fazer o movimento do carro de um vértice a outro
function animacao(tempo) {
  requestAnimationFrame(animacao);
  TWEEN.update(tempo);
  renderer.render(cena, camera);
}