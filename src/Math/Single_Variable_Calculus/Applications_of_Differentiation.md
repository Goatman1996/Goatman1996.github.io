---
title: 微分的应用
icon: pen-to-square
date: 2025-06-25 01:00:00
isOriginal: true
category:
  - 数学
  - 单变量微积分
---

<!-- more -->

## 线形近似与二阶近似

线性（一阶）与二阶近似

$$f(x) \approx f(x_0)+f'(x_0)(x-x_0) + \frac{1}{2}f''(x_0)(x-x_0)^2$$

$x$越接近$x_0$，结果越近似  
后者的函数图像“可能”是于$x_0$处近似的  
通常的$x_0 = 0$  
所以$x$越小，越相近  
但是$x$不会取到0



### 一阶举例
尝试计算$\ln 1.1$

有$f(x) = \ln (1+x)$  
于$x_0 = 0$处近似  
$\ln (1+x) \approx \ln(1+x_0) +\frac{1}{1+x_0}(x-x_0) \approx x$  

所以通过一阶近似，$\ln 1.1 = \ln(1 + 0.1) \approx 0.1$

### 二阶举例

尝试计算$\ln 1.1$

有$f(x) = \ln (1+x)$  
于$x_0 = 0$处近似  
$\ln (1+x) \approx \ln(1+x_0) + \frac{1}{1+x_0}(x-x_0) + \frac{(-(1+x_0)^{-2})}{2}(x - x_0)^2 \approx x - \frac{1}{2}(x)^2$  

所以通过一阶近似，$\ln 1.1 = \ln(1 + 0.1) \approx 0.1 - \frac{1}{2}(0.1)^2 = 0.1- 0.005 = 0.095$

二阶近似$\ln 1.1 \approx 0.095$

事实上$\ln 1.1 \approx 0.0953101798043$，二阶近似已经足够接近实际值了

### 证明

设有函数$f(x) = a + bx + cx^2$  
令$x_0 = 0$有  
$f(0) = a + bx_0 + cx_0^2 = a$  
$f'(0) = b + 2cx_0 = b$  
$f''(0) = 2c \Longleftrightarrow c = \frac{f''(0)}{2}$  

所以  
$$f(x) = f(x_0)+f'(x_0)(x-x_0) + \frac{1}{2}f''(x_0)(x-x_0)^2$$

幂函数与其近似函数的图像，是完全相等的

### 几何意义

<iframe src="https://www.desmos.com/calculator/ucwqpb2e7a?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>

（红色）原函数$y = \cos x$

（蓝色）线性近似$y=1\ +\ \sin0x$

（绿色）二阶近似$y=1\ +\ \sin0x\ +\ \frac{\left(-\cos0\right)}{2}x^{2}$ (和三阶重叠了)

（紫色）三阶近似$y=1\ +\ \sin0x\ +\ \frac{\left(-\cos0\right)}{2}x^{2}\ +\ \frac{1}{6}\left(-\sin0\right)x^{3}$

（黑色）四阶近似$y=1\ +\ \sin0x\ +\ \frac{\left(-\cos0\right)}{2}x^{2}\ +\ \frac{1}{6}\left(-\sin0\right)x^{3}\ +\ \frac{1}{24}\left(\cos0\right)x^{4}$

可以看到阶数越高，越接近原函数。  
通常会取极小的x，来求原函数x处的值  
例如上面的计算$\ln 1.1$，就是取了$\ln(x+1),x = 0.1$，求近似值  


## 其实

其实这是泰勒公式

这是用来求近似值的，只要展开得足够多项，很快就能求出近似值

事实上，在求例如$\ln 2.1$的值时，计算机通常会使用泰勒公式，展开到足够多项，即可求得近似值