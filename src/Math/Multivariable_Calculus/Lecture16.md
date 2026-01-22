---
title: 二重积分
icon: pen-to-square
date: 2026-01-22 00:00:00
isOriginal: true
category:
  - 数学
  - 多变量微积分
---

<!-- more -->

## 二重积分

Double Integral

<!-- ### 体积理解 -->

体积理解：

对于$z = f(x,y)$，在区域$R$（x-y平面）上的体积

$$\int \int_R f(x,y)\text{d}A$$

$$\lim_{\text{d}A_i \to 0}\sum_{i} f(x_i,y_i)\text{d}A_i$$

若想象成x或y方向上无数‘切片’面积的和。就可以转换成两个一元积分。

1. 先确定一个方向，如x方向，确定外积分

$$\int_{x_{min}}^{x_{max}} S(x)\text{d}x$$

2. 在确定内积分 $S(x)$，S也是一个积分，积分域（可能）与x相关

$$S(x) = \int_{y_{min(x)}}^{y_{max(x)}} f(x,y)\text{d}y$$

3. 完整的写出来就是

$$\int \int_R f(x,y)\text{d}A = \int_{x_{min}}^{x_{max}} [\int_{y_{min(x)}}^{y_{max(x)}} f(x,y)\text{d}y ]\text{d}x$$

这叫Iterated Integral，累次积分

### 例1

$z = 1 - x^2 - y^2$

![函数图像](./Res/抛物面.png =300x300)

积分域为$R$：$x=y= [0,1]$，这个积分域的x和y无关，计算起来会比较简单。

$$\int_0^1 \int_0^1 (1 - x^2 - y^2)\text{d}y\text{d}x$$

1. 计算内积分 inner integral

$$\int_0^1 (1 - x^2 - y^2)\text{d}y = y - x^2y -\frac{1}{3}y^3|_0^1$$

$$ = (1 - x^2 - \frac{1}{3}) - (0) = \frac{2}{3} - x^2$$

2. 计算外积分 outer integral

$$\int_0^1 \frac{2}{3} - x^2\text{d}x = \frac{2}{3}x - \frac{1}{3}x^3|_0^1$$

$$ = \frac{2}{3} - \frac{1}{3} = \frac{1}{3}$$

$\text{d}x\text{d}y$的计算顺序可以换，结果是一样的，但是可能会影响计算量  
且换顺序，需要处理积分域，处理方式需要观察$R$的形状确定

### 例2

还是这个函数：$z = 1 - x^2 - y^2$

$R$为(x-y平面)第一象限，半径为1的$\frac{1}{4}$圆

$x^2 + y^2 \le 1$  
$x \ge 0$且$y \ge 0$

0. 积分域x和y相互影响：给定的x有y的积分域为$0\le y \le \sqrt{1-x^2}$
$$\int_0^1 \int_0^{\sqrt{1-x^2}} (1 - x^2 - y^2)\text{d}y\text{d}x$$
1. 内积分

$$\int_0^{\sqrt{1-x^2}} (1 - x^2 - y^2)\text{d}y$$
$$= y - x^2y -\frac{1}{3}y^3|_0^{\sqrt{1-x^2}}$$
$$... = \frac{2}{3}(1 - x^2)^{\frac{3}{2}}$$
2. 外积分
$$\int_0^1 \frac{2}{3}(1 - x^2)^{\frac{3}{2}}\text{d}x$$

令$\theta = \sin^{-1}(x)$，$x = sin(\theta)$，$\text{d}x = \cos(\theta)\text{d}\theta$，积分域$\theta(1) = \frac{\pi}{2}$，$\theta(0) = 0$

$$= \frac{2}{3}\int_0^{\frac{\pi}{2}} (1 - \sin^2\theta)^\frac{3}{2}\cos\theta \text{d}\theta$$
$$... = \frac{2}{3}\int_0^{\frac{\pi}{2}} \cos^4\theta \text{d}\theta$$

半角公式:$\cos^2\theta = \frac{1 + \cos(2\theta)}{2}$

$$... = \frac{\pi}{8}$$