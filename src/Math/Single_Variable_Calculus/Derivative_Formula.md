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
* $\frac{d}{dx}\tan x= \sec^2 x = \frac{1}{\cos^2 x}$  

一些三角函数公式的补充  
$\sin(a+b) = \sin a \cos b + \cos a \sin b$  
$\cos(a+b) = \cos a \cos b - \sin a \sin b$  
$\tan a = \frac{\sin a}{\cos a}$



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

## 隐函数微分法

Implicit Differentiation

虽然链式法则，很方便，但是

对于方程$y^4 + xy^2 -2 = 0$而言，函数长这样
$$y = \pm \sqrt{\frac{-x \pm \sqrt{x^2 + 2}}{2}}$$  
这很难受，所以引入隐函数微分法

隐函数微分法过程如下：  
$4y^3y' + y^2 + x2yy' = 0$  
$y'(4y^3+2xy) = -y^2$  
$y' = \frac{-y^2}{4y^3+2xy}$

所以，方程$y^4 + xy^2 -2 = 0$于$x = 1,y = 1$处的导数（斜率）为 $\frac{-1}{6}$  
*注意，对于任意函数进行求导容易，不代表原函数求值容易

## 反函数求导

函数$y = f(x)$的逆函数为$x = f^{-1}(y)$  

设$y = \arcsin(x) = \sin^{-1}x$  
要求其导数，依旧使用隐函数微分法最佳

$y = \arcsin (x)$  
$\sin(y) = x$  

两边求导

$\cos(y) \cdot y' = 1$  
$y' = \frac{1}{\cos(y)}$  

接下来，根据$\sin(y) = x$构建直角三角形，即可得出$\cos(y) = \sqrt{1-x^2}$，所以  

$y' = \frac{1}{\sqrt{1-x^2}}$  

## 求导相关的名词说明

Differentiate，叫微分，动词

Differentiation（微分法）是动作 → 指“求导”这个计算过程。

Derivative（导数）是结果 → 指函数求导后得到的新函数或数值。