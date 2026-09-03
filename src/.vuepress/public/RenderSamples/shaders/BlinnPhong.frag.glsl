uniform vec3 uBaseColor;
uniform vec3 uSpecularColor;
uniform float uShininess;
uniform float uAmbientStrength;
uniform float uDiffuseStrength;
uniform float uSpecularStrength;

uniform vec3 uKeyLightDirectionView;
uniform vec3 uKeyLightColor;
uniform float uKeyLightIntensity;

uniform vec3 uFillLightDirectionView;
uniform vec3 uFillLightColor;
uniform float uFillLightIntensity;

varying vec3 vNormalView;
varying vec3 vViewDirection;

vec3 evaluateBlinnPhong(
  vec3 normal,
  vec3 viewDirection,
  vec3 lightDirection,
  vec3 lightColor,
  float lightIntensity
) {
  float nDotL = max(dot(normal, lightDirection), 0.0);
  vec3 diffuse = uBaseColor * nDotL * uDiffuseStrength;

  // Blinn-Phong 使用光线与视线的半程向量 H，而不是反射向量。
  vec3 halfDirection = normalize(lightDirection + viewDirection);
  float nDotH = max(dot(normal, halfDirection), 0.0);
  float specularFactor = nDotL > 0.0
    ? pow(nDotH, uShininess)
    : 0.0;
  vec3 specular = uSpecularColor * specularFactor * uSpecularStrength;

  return (diffuse + specular) * lightColor * lightIntensity;
}

void main() {
  vec3 normal = normalize(vNormalView);
  vec3 viewDirection = normalize(vViewDirection);

  vec3 ambient = uBaseColor * uAmbientStrength;
  vec3 keyLight = evaluateBlinnPhong(
    normal,
    viewDirection,
    normalize(uKeyLightDirectionView),
    uKeyLightColor,
    uKeyLightIntensity
  );
  vec3 fillLight = evaluateBlinnPhong(
    normal,
    viewDirection,
    normalize(uFillLightDirectionView),
    uFillLightColor,
    uFillLightIntensity
  );

  gl_FragColor = vec4(ambient + keyLight + fillLight, 1.0);

  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
