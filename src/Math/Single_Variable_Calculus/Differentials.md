---
title: 微分
icon: pen-to-square
date: 2025-07-04 00:00:00
isOriginal: true
category:
  - 数学
  - 单变量微积分
---

<!-- more -->

## 微分

Differentials - 微分  
新概念

### 记号

有函数$y=f(x)$  
导函数记作  
$$\frac{dy}{dx} = \frac{d}{dx} = f'(x)$$
$y的微分$或称$f$的微分记作  
$$dy = f'(x)dx$$

$dx$ 被看作是无穷小值

### 使用方法

与线性近似对比，求$(64.1)^\frac{2}{3}$  

* 线性近似（泰勒一阶展开）  
  $f(x) \approx f(x_0) + f'(x_0)(x-x_0)$  
  有：$x = 64.1,x_0 = 64,f(x) = x^\frac{2}{3},f'(x) = \frac{2}{3}x^{-\frac{1}{3}}$  
  $(64.1)^\frac{2}{3} \approx 4^2+\frac{1}{6}\times\frac{1}{10} = 16.016$

* 微分记号法  
  $y = x^\frac{2}{3}$  
  $dy = \frac{2}{3}x^{-\frac{1}{3}}dx$  
  有：$x = 64,dx = 0.1,y = 16, dy = \frac{1}{6}dx$  
  $(64.1)^\frac{2}{3} \approx y + dy = 16 + \frac{1}{6} * 0.1 = 16.016$ 