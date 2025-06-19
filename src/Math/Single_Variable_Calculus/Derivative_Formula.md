---
title: 求导公式
icon: pen-to-square
date: 2025-06-19 00:00:00
isOriginal: true
category:
  - 数学
  - 单变量微积分
---

<!-- more -->

### 幂函数求导
$$\frac{d}{dy}x^n = nx^{n-1}$$

### 三角函数求导

* $\frac{d}{dx}\sin x= \cos x$
* $\frac{d}{dx}\cos x= -\sin x$

一些三角函数公式的补充  
$\sin(a+b) = \sin a \cos b + \cos a \sin b$  
$\cos(a+b) = \cos a \cos b - \sin a \sin b$



## 求导运算法则

* 加法
  $(u+v)' = u' + v'$
* 常数乘法  
  $(cu)' = cu'$,c 为常数  
* 乘法(可通过导数定义推出的)  
  $(uv)' = u'v + uv'$  
* 除法(可通过导数定义推出的)  
  $(\frac{u}{v})' = \frac{u'v - uv'}{v^2},v \neq 0$  
* 链式法则  
  $\frac{dy}{dt} = \frac{dy}{dx} \cdot \frac{dx}{dt}$  
  举例：
  $\frac{d}{dt}(\sin t)^{10} = 10x^9 \cdot \cos t = 10(\sin t)^9 \cos t,x = \sin t$  

## 高阶导数

* 一阶导数记号  
  $u' = \frac{du}{dx} = \frac{d}{dx}u = Du,(D = \frac{d}{dx})$   
* 二阶导数记号  
  $u'' = \frac{d}{dx}\frac{d}{dx}u = (\frac{d}{dx})^2u = \frac{d^2}{dx^2}u = \frac{d^2u}{dx^2} = D^2u$  
* 高阶同理

举例：  
$Dx^n = nx^{n-1}$  
$D^2x^n = n(n-1)x^{n-2}$  
$D^3x^n = n(n-1)(n-2)x^{n-3}$  
$......$  
$D^nx^n = [n(n-1)(n-2)...2 \times 1] \times 1 = n!$  
$D^{n+1}x^n = 0$  
