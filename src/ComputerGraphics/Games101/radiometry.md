---
title: 辐射度量学
icon: pen-to-square
date: 2025-05-30
isOriginal: true
category:
  - 图形学
---

<!-- more -->

## 光的定义

光的属性
- Radiant flux 辐射通量
- Radiant Intensity 辐射强度
- Irradiance 辐照度
- Radiance 辐射亮度

### Radiant Energy and Flux (Power)

- Radiant Energy 辐射能量  
  符号$Q$ 表示能量、热量  
  单位 $J = Joule$  
  描述了能量的大小

- Radiant Flux 辐射通量  
  符号$\Phi$ 表示通量、流量、功率，$\Phi = \frac{dQ}{dt}$  
  单位 $W = Watt$，  
  *在光学中也被称为流明(光通量)$lm = lumen$  
  描述了单位时间消耗、释放的能量

### Radiant Intensity 

Power per unit **solid angle** emitted by a point light source  
*对于一个点光源而言，单位**立体角**内释放的能量  
*对于一个均匀辐射的点光源而言，单位"方向"上释放的能量

$$I = \frac{d\Phi}{d\Omega}$$
- $\Omega$ 立体角，单位：$sr = steradian$  
  二维的，圆拥有$2\pi$个 *弧度(radian)，$rad = 弧长/半径$  
  三维的，球拥有$4\pi$个 *球面度(stradian)，$sr = 面积/半径^2$  

- $I$ 单位：$W/sr = lm/steradian = cd = candela$(坎德拉)  

- **举例**，对于一个均匀辐射的点光源而言
$$I = \frac{\Phi}{4\pi} $$


### Irradiance 

Power per unit **area** emitted by a point light source  
单位面积的辐射通量  

$$E = \frac{d\Phi}{dA}$$

- 单位：$W/m^2 = lm/m^2 = lux$
- 面积的辐射通量，要求是与面垂直的辐射，所以是投影过的辐射通量  
  概念与 Lambert Diffuse 的计算一致都是计算投影后的辐射通量

### Radiance 

Power per unit **solid angle** and **area** emitted by a point light source  
单位立体角和面积的辐射通量
$$L = \frac{d\Phi}{d\Omega dA}$$

- 单位：$W/(sr·m^2) = lm/（sr·m^2） = nit$
- 同样的，单位面积的辐射通量，要求是与面垂直的辐射，所以是投影过的辐射通量

Radiance 同时可以等价于