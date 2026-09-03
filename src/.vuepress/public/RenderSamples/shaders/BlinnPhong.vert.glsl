varying vec3 vNormalView;
varying vec3 vViewDirection;

void main() {
  vec4 positionView = modelViewMatrix * vec4(position, 1.0);

  // normalMatrix 是 modelViewMatrix 左上角 3x3 的逆转置矩阵。
  vNormalView = normalMatrix * normal;
  // 观察空间中的相机位于原点，所以顶点到相机的方向是 -positionView。
  vViewDirection = -positionView.xyz;

  gl_Position = projectionMatrix * positionView;
}
