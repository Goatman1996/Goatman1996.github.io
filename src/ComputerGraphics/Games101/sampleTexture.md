---
title: 贴图采样
icon: pen-to-square
date: 2025-05-23
isOriginal: true
category:
  - 图形学
  - Games101
---

<!-- more -->

## 纹理贴图

### Nearest
根据uv坐标，找到最接近的像素点，并返回该像素点的颜色 

### Bilinear

根据uv坐标，找到最接近的4个像素点，并返回加权平均颜色

### Trilinear

会产生mip-map

与Bilinear相似，只是额外采样了一张mip-map，并将两次采样的颜色进行加权平均

### Anistropic(各向异性)

同样会像mip-map一样，会产生额外的内存增加

各向异性，采样点表面对于屏幕的倾斜角度纳入参考条件，对纹理进行采样，

额外的纹理为，将原始贴图横向/纵向压缩后的纹理

## 法线相关

法线贴图

### 法线的空间转换

对法线进行空间转换

物体空间->世界空间
$$
N_{world} = (M_{object \rightarrow world}^{-1})^T_{(3\times3)} N_{object}
$$
注意细节，是逆转置矩阵，且法线不需要位移，所以使用3x3矩阵

*详细推导可以查阅资料

### TBN 法线贴图的空间转换

一般的，法线贴图是储存在切线空间的，需要将法线进行空间转换

TBN矩阵，就是将切线空间转换为世界空间
$$
TBN = 
\begin{bmatrix}
  t_{world} & b_{world} & n_{world}
\end{bmatrix}
$$

对法线贴图进行采样后，得到的是切线空间下的法线，需要使用TBN矩阵进行空间转换

$$
N_{world} = TBN · N_{tangent}
$$

*详细推导可以查阅资料
