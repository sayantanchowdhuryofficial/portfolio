// LOADER
setTimeout(()=>{
 document.getElementById("loader").style.display="none";
},2000);

// MUSIC
const music = document.getElementById("music");
const btn = document.getElementById("musicBtn");

btn.onclick=()=>{
 if(music.paused){
  music.play();
 }else{
  music.pause();
 }
};

// PASSWORD
document.getElementById("secretBtn").onclick=()=>{
 document.getElementById("secretBox").style.display="block";
};

function unlock(){
 if(document.getElementById("pass").value==="404human"){
  document.getElementById("hidden").style.display="block";
 } else alert("Wrong password");
}

// THOUGHTS (no backend needed)
function generateThought(){
 const thoughts=[
  "Humans hide pain behind normal behavior.",
  "Technology sees data, not emotion.",
  "Silence is the loudest breakdown."
 ];
 document.getElementById("thought").innerText =
  thoughts[Math.floor(Math.random()*thoughts.length)];
}

// CHART
new Chart(document.getElementById("chart"),{
 type:"radar",
 data:{
  labels:["Focus","Stress","Clarity"],
  datasets:[{
   label:"Mental State",
   data:[
    Math.random()*100,
    Math.random()*100,
    Math.random()*100
   ]
  }]
 }
});

// 3D (NO DOWNLOAD)
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(75,innerWidth/innerHeight,0.1,1000);
const renderer=new THREE.WebGLRenderer({canvas:document.getElementById("bg")});
renderer.setSize(innerWidth,innerHeight);

const geometry=new THREE.IcosahedronGeometry(5,1);
const material=new THREE.MeshBasicMaterial({wireframe:true});
const mesh=new THREE.Mesh(geometry,material);

scene.add(mesh);
camera.position.z=15;

function animate(){
 requestAnimationFrame(animate);
 mesh.rotation.x+=0.01;
 mesh.rotation.y+=0.01;
 renderer.render(scene,camera);
}
animate();
