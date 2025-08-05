---
title: 分部积分
icon: pen-to-square
date: 2025-08-05 00:00:00
isOriginal: true
category:
  - 数学
  - 单变量微积分
---

<!-- more -->

## 部分积分（跳过）
部分积分
Partial Fraction

这个部分积分，实际情况使用起来相当复杂，只举一个简单的例子
$$\int (\frac{1}{x-1} + \frac{3}{x+2})dx = \int \frac{4x-1}{x^2+x-1}dx = \ln(x-1) + 3\ln(x+2) + C$$

从上述例子可以看出，中间项是一个很复杂的积分，但其实可以转成第一项的形式，然后就好积分了.

## 分部积分
分部积分
Integration by part

从乘法出发

$(uv)' = u'v + uv'$  
$uv' = (uv)' - u'v$

积分：$\int uv'dx = \int (uv)'dx - \int (u'v)dx$  

得到分部积分公式
$$\int uv'dx = uv - \int u'vdx$$
定积分写法
$$\int_a^b uv'dx = uv|_a^b - \int_a^b u'vdx$$

### 例子1

$\int (\ln x)^ndx$  
$u = (\ln x)^n, u' = n(\ln x)^{n-1}\frac{1}{x}$  
$v = x, v' = 1$  

$\int (\ln x)^ndx = x(\ln x)^n - \int n(\ln x)^{n-1}\frac{1}{x}xdx$

总结

$$F_n(x) = \int (\ln x)^ndx$$
$$F_n(x) = x(\ln x)^n - nF_{n-1}(x)$$

### 例子2

$\int x^n e^x dx$  
$u = x^n, u' = nx^{n-1}$  
$v = e^x, v' = e^x$  

$\int x^n e^x dx = x^n e^x - \int nx^{n-1}e^xdx$

总结
$$G_n(x) = \int x^n e^x dx$$
$$G_n(x) = x^n e^x - nG_{n-1}(x)$$