// Loader
setTimeout(() => {
  document.getElementById("loader").style.display = "none";
}, 2500);

// Music
const music = document.getElementById("bg-music");
const toggle = document.getElementById("music-toggle");

toggle.onclick = () => {
  if (music.paused) {
    music.play();
    toggle.innerText = "🔊";
  } else {
    music.pause();
    toggle.innerText = "🔇";
  }
};

// Password
document.getElementById("secret-btn").onclick = () => {
  document.getElementById("secret-box").style.display = "block";
};

function unlock() {
  let pass = document.getElementById("pass").value;
  if (pass === "404human") {
    document.getElementById("hidden").style.display = "block";
  } else {
    alert("Wrong password");
  }
}

// Cursor
const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// THREE JS
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, innerWidth/innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('bg') });

renderer.setSize(innerWidth, innerHeight);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);
camera.position.z = 30;

function animate() {
  requestAnimationFrame(animate);
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  renderer.render(scene, camera);
}
animate();
