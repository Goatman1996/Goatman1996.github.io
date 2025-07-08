---
title: 微积分基本定理
icon: pen-to-square
date: 2025-07-08 01:00:00
isOriginal: true
category:
  - 数学
  - 单变量微积分
---

<!-- more -->

Fundamental Theorem of Calculus(简称FTC)  
微积分基本定理 

## FTC v1
如果 $F'(x) = f(x)$  
则有 
$$\int_a^b f(x)dx = F(b) - F(a)$$

### 新的记号法
$$F(b) - F(a) = F(x)|_a^b$$


## 性质

1. $\int_a^b (f(x) + g(x))dx = \int_a^b f(x)dx + \int_a^b g(x)dx$
   
2. $\int_a^b cf(x)dx = c\int_a^b f(x)dx$

3. $\int_a^b f(x)dx + \int_b^c f(x)dx = \int_a^c f(x)dx$

4. $\int_a^a f(x)dx = 0$

5. $\int_a^b f(x)dx = -\int_b^a f(x)dx$

6. Estimation 积分估计  
   如果 $f(x) \le g(x)$ ,则  
   $\int_a^b f(x)dx \le \int_a^b g(x)dx,(a<b)$

## FTC v2

如果 $G(x) = \int_a^x f(t)dt$，即函数G总是可以算出f的某固定起始点的定积分，则有  
1. $G'(x) = f(x)$  
2. $G(a) = 0$，如果x=a，则G(a) = 0    

### 举例0

$$\frac{d}{dx}\int_1^x \frac{dt}{t^2}$$  
设 $G(x) = \int_1^x \frac{dt}{t^2}$  

$\int_1^x \frac{dt}{t^2} = -t^-1|_1^x$, $^{[1]}$  

$= -x^{-1} + 1$  

$= 1- x^{-1}$, $^{[2]}$

注意：
* $[1]$ 是FTC v1版本的结果，其中$F(x) = -\frac{1}{t}$
* $[2]$ 是FTC v2版本结果，其中$G(x) = 1-\frac{1}{x}$  
  
继续未完成的式子

$\frac{d}{dx}\int_1^x \frac{dt}{t^2} = \frac{d}{dx} 1-\frac{1}{x} = \frac{1}{x^2}$

$\therefore G'(x) = \frac{1}{x^2}$  

$\therefore 原式子 = \frac{1}{x^2}$ 

这推导出了FTC v2的定理  
而根据这一定理，可以一眼看出结果的

### 举例 lnx

设$L'(x) = \frac{1}{x}; L(1) = 0$

根据FTVC v2，可以得到

$L(x) = \int_1^x \frac{1}{t}dt = \ln x$

$L(x) = \ln x$，函数L包含超越数$e$，所以函数L是个超越函数。  
对于求$\ln x$的值而言是困难的。  
所以当计算$\ln x$的值时，我们使用积分部分会更加的简单  
积分可以使用黎曼和求积分或是其他可以求积分近似值的方法  

### 举例e,一个无法写出来的函数

设 $f'(x)= e^{-x^2}; f(0) = 0$  

根据FTVC v2，可以得到

$f(x) = \int_0^x e^{-t^2}dt$  

注：
* $e^{-x^2}$ 是个正太分布函数
* $f(x)$ 是求该函数图像在[0,x]区间内的面积
* $f(x)$ 无法使用任意初等函数进行构造书写,即$e^{-x^2}$无法使用初等函数构造出其原函数

## 对微积分的一次全面总结

为何定积分*(求图像面积)*会是，被积函数的原函数的差呢？  
为了解释，将FTC v1反过来理解  

$$F(b) - F(a) = \int_a^b f(x)dx,^{[3]}$$  
1. $\Delta F = F(b) - F(a)$  
2. $\Delta x = b - a$  

$\therefore \Delta F = \int_a^b f(x)dx$  
$\therefore \frac{\Delta F}{\Delta x} = \frac{1}{b-a} \int_a^b f(x)dx$,$^{[1]}$  

对[1]进行解释
1. $f(x) 是 F(x) 的导数$（变化率）
2. $dx$ 是 x 的 微分，是极小的x
3. $f(x)dx = df$；$df$ 是f的微分  
   df（对f图像而言）是 极小面积  
   df (对原函数F而言) 是 极小变化量
4. $\int_a^b f(x)dx$ 是面积，是总变化量$^{Total Change}$
   
5. $\frac{Total Change}{b-a} = \rm{AverageOfChange}$ 平均变化量

$\therefore \Delta F = \rm{AverageOfChange}\Delta x$,$^{[2]}$

对[2]进行解释  
$\Delta F$ 是 平均变化量 乘以 $\Delta x$，得到的在经过$\Delta x$后的总变化量

所以总结[3]  
$\int_a^b f(x)dx$ 是面积，也是对于原函数而言，于[a,b]的总变化量