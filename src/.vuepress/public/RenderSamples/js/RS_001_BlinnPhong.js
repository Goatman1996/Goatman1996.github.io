import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { FBXLoader } from "three/addons/loaders/FBXLoader.js";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";

const width = window.innerWidth;
const height = window.innerHeight;
const status = document.querySelector("#status");

async function loadText(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`加载 ${url.pathname} 失败：HTTP ${response.status}`);
  }

  return response.text();
}

const vertexShaderUrl = new URL("../shaders/BlinnPhong.vert.glsl", import.meta.url);
const fragmentShaderUrl = new URL("../shaders/BlinnPhong.frag.glsl", import.meta.url);

let vertexShader;
let fragmentShader;

try {
  [vertexShader, fragmentShader] = await Promise.all([
    loadText(vertexShaderUrl),
    loadText(fragmentShaderUrl),
  ]);
} catch (error) {
  console.error("Blinn-Phong Shader 加载失败", error);
  status.textContent = "Shader 加载失败，请检查文件路径";
  throw error;
}

// 场景
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a1a2e);
scene.fog = new THREE.Fog(0x1a1a2e, 6, 14);

// 相机
const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
camera.position.set(0, 0.15, 3.6);

// 渲染器
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(width, height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
document.body.appendChild(renderer.domElement);

// OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.target.set(0, 0, 0);

const modelRoot = new THREE.Group();
scene.add(modelRoot);

const keyLightDirectionWorld = new THREE.Vector3(3, 4, 5).normalize();
const fillLightDirectionWorld = new THREE.Vector3(-4, 2, -3).normalize();

const shaderUniforms = {
  uBaseColor: { value: new THREE.Color(0xb66f4f) },
  uSpecularColor: { value: new THREE.Color(0xffd7bd) },
  uShininess: { value: 70 },
  uAmbientStrength: { value: 0.12 },
  uDiffuseStrength: { value: 1 },
  uSpecularStrength: { value: 0.8 },
  uKeyLightDirectionView: { value: new THREE.Vector3() },
  uKeyLightColor: { value: new THREE.Color(0xffe2cf) },
  uKeyLightIntensity: { value: 1.4 },
  uFillLightDirectionView: { value: new THREE.Vector3() },
  uFillLightColor: { value: new THREE.Color(0x6d8dff) },
  uFillLightIntensity: { value: 0.65 },
};

const headMaterial = new THREE.ShaderMaterial({
  uniforms: shaderUniforms,
  vertexShader,
  fragmentShader,
});

const modelUrl = new URL("../model/BlenderHead.fbx", import.meta.url).href;
const loader = new FBXLoader();

loader.load(
  modelUrl,
  (model) => {
    // 该 FBX 使用 Z-up，模型正面沿 -Y；转换为 Three.js 的 Y-up、正面 +Z。
    model.rotation.x = THREE.MathUtils.degToRad(-90);

    model.traverse((child) => {
      if (child.isMesh) {
        child.material = headMaterial;
      }
    });

    // 不依赖 FBX 的原始单位：居中并统一到适合当前视口的尺寸。
    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3());
    const maxDimension = Math.max(size.x, size.y, size.z);

    if (maxDimension > 0) {
      model.scale.setScalar(2.4 / maxDimension);
    }

    const scaledBox = new THREE.Box3().setFromObject(model);
    const center = scaledBox.getCenter(new THREE.Vector3());
    model.position.sub(center);

    modelRoot.add(model);
    status.remove();
  },
  (event) => {
    if (event.total > 0) {
      const progress = Math.round((event.loaded / event.total) * 100);
      status.textContent = `正在加载 BlenderHead.fbx… ${progress}%`;
    }
  },
  (error) => {
    console.error("BlenderHead.fbx 加载失败", error);
    status.textContent = "模型加载失败，请查看浏览器控制台";
  },
);

// 网格地面
const gridHelper = new THREE.GridHelper(5, 20, 0x77798b, 0x303247);
gridHelper.position.y = -1.35;
scene.add(gridHelper);

const guiState = {
  materialColor: `#${shaderUniforms.uBaseColor.value.getHexString()}`,
  specularColor: `#${shaderUniforms.uSpecularColor.value.getHexString()}`,
  shininess: shaderUniforms.uShininess.value,
  diffuseStrength: shaderUniforms.uDiffuseStrength.value,
  specularStrength: shaderUniforms.uSpecularStrength.value,
  ambientStrength: shaderUniforms.uAmbientStrength.value,
  keyLightColor: `#${shaderUniforms.uKeyLightColor.value.getHexString()}`,
  keyLightIntensity: shaderUniforms.uKeyLightIntensity.value,
  fillLightColor: `#${shaderUniforms.uFillLightColor.value.getHexString()}`,
  fillLightIntensity: shaderUniforms.uFillLightIntensity.value,
  rotation: 0,
  autoRotate: false,
  showGrid: true,
  resetCamera() {
    camera.position.set(0, 0.15, 3.6);
    controls.target.set(0, 0, 0);
    controls.update();
  },
};

const gui = new GUI({ title: "Blinn-Phong 参数" });

const materialFolder = gui.addFolder("材质");
materialFolder
  .addColor(guiState, "materialColor")
  .name("漫反射颜色")
  .onChange((value) => shaderUniforms.uBaseColor.value.set(value));
materialFolder
  .addColor(guiState, "specularColor")
  .name("高光颜色")
  .onChange((value) => shaderUniforms.uSpecularColor.value.set(value));
materialFolder
  .add(guiState, "shininess", 1, 200, 1)
  .name("光泽度")
  .onChange((value) => {
    shaderUniforms.uShininess.value = value;
  });
materialFolder
  .add(guiState, "diffuseStrength", 0, 2, 0.01)
  .name("漫反射强度")
  .onChange((value) => {
    shaderUniforms.uDiffuseStrength.value = value;
  });
materialFolder
  .add(guiState, "specularStrength", 0, 2, 0.01)
  .name("高光强度")
  .onChange((value) => {
    shaderUniforms.uSpecularStrength.value = value;
  });

const lightFolder = gui.addFolder("光照");
lightFolder
  .add(guiState, "ambientStrength", 0, 1, 0.01)
  .name("环境光")
  .onChange((value) => {
    shaderUniforms.uAmbientStrength.value = value;
  });
lightFolder
  .addColor(guiState, "keyLightColor")
  .name("主光颜色")
  .onChange((value) => shaderUniforms.uKeyLightColor.value.set(value));
lightFolder
  .add(guiState, "keyLightIntensity", 0, 5, 0.01)
  .name("主光")
  .onChange((value) => {
    shaderUniforms.uKeyLightIntensity.value = value;
  });
lightFolder
  .addColor(guiState, "fillLightColor")
  .name("补光颜色")
  .onChange((value) => shaderUniforms.uFillLightColor.value.set(value));
lightFolder
  .add(guiState, "fillLightIntensity", 0, 5, 0.01)
  .name("补光")
  .onChange((value) => {
    shaderUniforms.uFillLightIntensity.value = value;
  });

const sceneFolder = gui.addFolder("场景");
sceneFolder
  .add(guiState, "rotation", -180, 180, 1)
  .name("模型旋转")
  .listen()
  .onChange((value) => {
    modelRoot.rotation.y = THREE.MathUtils.degToRad(value);
  });
sceneFolder.add(guiState, "autoRotate").name("自动旋转");
sceneFolder
  .add(guiState, "showGrid")
  .name("显示网格")
  .onChange((value) => {
    gridHelper.visible = value;
  });
sceneFolder.add(guiState, "resetCamera").name("重置相机");

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

function animate() {
  requestAnimationFrame(animate);

  if (guiState.autoRotate) {
    modelRoot.rotation.y = (modelRoot.rotation.y + 0.005) % (Math.PI * 2);
    guiState.rotation = THREE.MathUtils.radToDeg(modelRoot.rotation.y);

    if (guiState.rotation > 180) {
      guiState.rotation -= 360;
    }
  }

  controls.update();
  camera.updateMatrixWorld();

  // Shader 在观察空间计算光照，所以每帧把世界空间光线方向转换过去。
  shaderUniforms.uKeyLightDirectionView.value
    .copy(keyLightDirectionWorld)
    .transformDirection(camera.matrixWorldInverse);
  shaderUniforms.uFillLightDirectionView.value
    .copy(fillLightDirectionWorld)
    .transformDirection(camera.matrixWorldInverse);

  renderer.render(scene, camera);
}

animate();
