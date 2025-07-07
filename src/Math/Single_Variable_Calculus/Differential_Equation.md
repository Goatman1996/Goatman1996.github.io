---
title: 微分方程
icon: pen-to-square
date: 2025-07-07 01:00:00
isOriginal: true
category:
  - 数学
  - 单变量微积分
---

<!-- more -->

## 微分方程

Difference Equations (微分方程)  
解微分方程，是求y的过程  

### Example 1

第一个例子是上节课已经解过的例子

$$\frac{dy}{dx} = f(x)$$  
$$y = \int f(x)dx$$

### Example 2

有方程  
$(\frac{d}{dx} + x)y = 0$  
*我不认为上述方程写法是对的，许是物理？量子力学？会这么写？  

$\frac{dy}{dx} + xy = 0$  
$\frac{dy}{dx} = -xy$  
*Separation of variables 分离变量法  

$\frac{dy}{y} = -xdx$  
*两边求不定积分

$\int \frac{dy}{y} = -\int xdx$  
$\ln y = -\frac{1}{2}x^2 + c$  
*求不定积分后，两边都有常数c的，$c = c_x - c_y$  

$y = e^{-\frac{1}{2}x^2 + c}$  
$y = ae^{-\frac{1}{2}x^2} , a = e^c$

### Example 3

使用分离变量法再求Example 1

$\frac{dy}{dx} = f(x)$  
$dy = f(x)dx$  
$\int dy = \int f(x)dx$  
$y = \int f(x)dx$

### Example 4

这个例子说明解微分方程有什么用处

假设有这么一个函数，函数处处与原点连线的斜率x2=函数在该点的斜率  
根据描述，我们可以得到如下方程

$\frac{dy}{dx} = 2\frac{y}{x}$  
$\frac{dy}{y} = 2\frac{1}{x} dx$  
$\int \frac{dy}{y} = \int 2\frac{1}{x} dx$  
$\ln y = 2\ln x + C$  
$e^{\ln y} = e^{2\ln x + C}$  
$y = ax^2, a = e^C$  

我们就可以知道问题描述的函数是一个二次幂函数  





