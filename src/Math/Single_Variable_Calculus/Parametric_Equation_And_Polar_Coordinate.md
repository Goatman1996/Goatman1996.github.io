---
title: 参数方程与极坐标
icon: pen-to-square
date: 2025-08-12 01:00:00
isOriginal: true
category:
  - 数学
  - 单变量微积分
---

<!-- more -->

接下来介绍的是对于函数的一切其他形式，如参数方程以及极坐标。

## 参数方程

Parametric Equation

是指有这样一组方程  
$x = a \cos t$  
$y = a \sin t$  

这代表了  
$x ^ 2 + y ^ 2 = a^2\cos^2t + a^2\sin^2t = a ^ 2$  
这是一个圆的方程

其中隐含的信息有  
$t = 0,(x,y) = (a,0)$  
$t = \pi/2, (x,y) = (0,a)$
$t = \pi, (x,y) = (-a,0)$  
意味着t看作时间的话，(x,y)点随时间沿着圆做逆时针运动

微分式：  
$(ds)^2 = (dx)^2 + (dy)^2$  
$(\frac{ds}{dt})^2 = (\frac{dx}{dt})^2 + (\frac{dy}{dt})^2$  

$ds = \sqrt{(\frac{dx}{dt})^2 + (\frac{dy}{dt})^2}dt$  

$\because \frac{dx}{dt} = -a\sin t, \frac{dy}{dt} = a\cos t$  
$\therefore ds = \sqrt{(-a\sin t)^2 + (a\cos t)^2}dt$  
$ds = \sqrt{a^2}dt = adt$  

注意： $\frac{ds}{dt} = a$ 可看作点做圆周运动的速率

## 极坐标

Polar Coordinate

极坐标，示为$(r,\theta)$  
$r$ 是点到原点的距离，$\theta$ 是点到原点的角度  
笛卡尔坐标与极坐标的转换关系：  
$x = r\cos\theta, y = r\sin\theta$  

例举几个简单的例子
* $(x,y) = (1,-1)$
  * $r = \sqrt{2}, \theta = 7\frac{\pi}{4}$
  * $r = \sqrt{2}, \theta = -\frac{\pi}{4}$
  * $r = -\sqrt{2}, \theta = 3\frac{\pi}{4}$
* $r = C$ 是一个圆环
* $\theta = C$
  * $0 \le \theta \le \infty$ 是一条射线
  * $-\infty \le \theta \le \infty$ 是一条直线
* $y = 1$
  * $y = r\sin\theta = 1$
  * $r(\theta) = \frac{1}{\sin\theta} (\sin\theta \not = 0)$

### 例1-笛卡尔到极坐标的转换

笛卡尔到极坐标的转换

$(x-a)^2+\ y^2=\ a^2$ 

<iframe src="https://www.desmos.com/calculator/zznadq4yfu?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>  

图中$a = 1$

$x^2 - 2ax + a^2 + y^2 = a^2$  
$x^2 + y^2 - 2ax = 0$  
$r^2 = 2ar\cos \theta$  
$r = 2a\cos\theta$  

### 例2-表面积

Total area of a circle $A$

$A = \pi r^2$  
$\Delta A = \frac{\Delta \theta}{2\pi} \pi r^2 = \frac{1}{2} r^2\Delta \theta$  

微分式：
$dA = \frac{1}{2} r^2d\theta$  
$A = \int_{\theta_1}^{\theta_2} \frac{1}{2} r^2d\theta$  
注意：这个表面积分公式，因为$r^2$的缘故，范围$\pm\theta$均可，且A会累加

拿例1作为实例代入有： 

$r = 2a\cos\theta$  

$\begin{align}
    A   &= \int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} \frac{1}{2} r^2d\theta \\
        &= \int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} \frac{1}{2} {(2a\cos\theta)}^2d\theta \\
        &= \int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} 2a^2\cos^2\theta d\theta \\ 
        &\because \cos^2\theta = \frac{1}{2}(1+\cos2\theta) \\
        &= a^2 \int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} 1+\cos2\theta d\theta \\ 
        &= a^2(\theta + \frac{1}{2}\sin2\theta)|_{-\frac{\pi}{2}}^\frac{\pi}{2} \\
        &= a^2\frac{\pi}{2} - (-a^2\frac{\pi}{2}) \\
        &= a^2\pi 
\end{align}$

### 一些图像

<iframe src="https://www.desmos.com/calculator/p7gc6d0777?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>