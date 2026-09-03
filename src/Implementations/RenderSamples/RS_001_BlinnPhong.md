---
title: 渲染001_BlinnPhong
icon: pen-to-square
date: 2026-09-03 00:00:00
isOriginal: true
category:
  - 实践
---

<!-- more -->

## Blinn-Phong 光照模型

下面的示例只使用 Three.js 加载模型、传递矩阵并提交绘制，光照计算由自定义的 `ShaderMaterial` 完成，没有使用 `MeshPhongMaterial`。顶点和片元着色器分别存放在独立的 `.vert.glsl` 与 `.frag.glsl` 文件中，由 JavaScript 按路径加载。

<iframe src="/RenderSamples/RS_001_BlinnPhong.html" style="width: 100%; height: 480px; border: none; border-radius: 8px;" scrolling="no"></iframe>

🖱️ 拖拽旋转 · 滚轮缩放 · 右键平移

### 三个光照分量

Blinn-Phong 将最终颜色拆为环境光、漫反射和镜面反射：

$$
C = C_{ambient} + \sum_l (C_{diffuse,l} + C_{specular,l})
$$

环境光使用一个常量近似间接光：

$$
C_{ambient} = k_a C_{base}
$$

漫反射遵循 Lambert 余弦定律。法线 $N$ 与光线方向 $L$ 越接近，表面越亮：

$$
C_{diffuse} = k_d C_{base} \max(N \cdot L, 0)
$$

### Blinn-Phong 高光

首先计算光线方向 $L$ 与观察方向 $V$ 的半程向量：

$$
H = \frac{L + V}{\lVert L + V \rVert}
$$

然后用法线与半程向量的夹角计算高光：

$$
C_{specular} = k_s C_{specularColor}
\max(N \cdot H, 0)^p
$$

$p$ 是面板中的“光泽度”：数值越大，高光范围越小、越集中。Blinn-Phong 与传统 Phong 的关键区别，就是这里使用半程向量 $H$，而不是计算光线的反射向量。

### 坐标空间

顶点着色器使用 `modelViewMatrix` 将顶点变换到观察空间，并使用 `normalMatrix` 变换法线。片元着色器中的法线、观察方向和光线方向全部处于观察空间，只有处于同一坐标空间的向量才能进行点乘。

使用右上角面板可以分别关闭环境光、漫反射或镜面反射，观察每个分量对最终结果的影响。
