---
title: 指数和对数
icon: pen-to-square
date: 2025-06-22 00:00:00
isOriginal: true
category:
  - 数学
  - 单变量微积分
---

<!-- more -->

本章节将通过推论，引出指数求导，对数求导，和自然常数e

## 指数函数求导_1

$f(x) = a^x, a > 0$  
从定义出发，那么$f'(x)$就等于  
$f'(x) = \lim_{\Delta x \to 0} \frac{a^{x+\Delta x} - a^x}{\Delta x}$  
$f'(x) = \lim_{\Delta x \to 0} a^x\frac{(a^{\Delta x} - 1)}{\Delta x}$  
$f'(x) = a^x \lim_{\Delta x \to 0} \frac{a^{\Delta x} - 1}{\Delta x}$  
设$E(a) = \lim_{\Delta x \to 0} \frac{a^{\Delta x} - 1}{\Delta x}$  
$f('x) = a^xE(a)$  
$\therefore \frac{d}{dx}a^x |_{x=0} = E(a)$

## 指数函数求导_2 

通过观察$a^x$的图像于$x=0$处的导数，不难看出，存在这么一个数$e$,使得$E(e) = 1$  
即 
$$\frac{d}{dx}e^x = e^x$$

## 先尝试对数求导

有$f(x) = \ln x$，求$f'(x)$  
设有方程 $w = \ln x$  
$e^w = x \Longleftrightarrow e^{lnx} = x$  
隐函数微分法  
$\frac{d}{dx} e^w = \frac{d}{dx} x$  
$(\frac{d}{dw}e^w) \cdot (\frac{d}{dx} \ln x) = 1$  
$\frac{d}{dx} \ln x = \frac{1}{\frac{d}{dw}e^w}$  
$\frac{d}{dx} \ln x = \frac{1}{e^{\ln x}}$  
$$\frac{d}{dx} \ln x = \frac{1}{x}$$

## 接着对指数函数求导


### 方法一

$\frac{d}{dx} a^x$  
$\because a^x = e^{x \ln a}$  
设$u = x \ln a$  
$\frac{d}{dx} e^{x \ln a} = (\frac{d}{dx} e^u) \cdot (\frac{d}{dx} x \ln a)$  
$\frac{d}{dx} e^{x \ln a} = \ln a e^{x \ln a}$  
$$\frac{d}{dx} a^x = \ln a \cdot a^x$$  

### 方法二

对数微分法  
有函数$u$，就有函数$\ln u$  
$(\ln u)' = \frac{1}{u} u'$

令$u = a^x$  
$\ln u = \ln a^x = x \ln a$

$(\ln u)' = \ln a$  
$\ln a = \frac{u'}{u}$  
$u' = \ln a \cdot u$  
$$(a^x)' = \ln a \cdot a^x$$


