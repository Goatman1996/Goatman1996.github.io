---
title: 弧长
icon: pen-to-square
date: 2025-08-12 00:00:00
isOriginal: true
category:
  - 数学
  - 单变量微积分
---

<!-- more -->

## 弧长公式

弧长计算$s^2 = x^2 + y^2$

微分式  
$(ds)^2 = (dx)^2 + (dy)^2$  
$ds = \sqrt{dx^2 + dy^2}$  
$ds = \sqrt{1 + (dy/dx)^2}dx$

弧长积分  
$\int ds = \int \sqrt{1 + (dy/dx)^2}dx$  
$= \int \sqrt{1 + f'(x)^2}dx$  

## 例1，弧度制

计算单位圆弧长

$y = \sqrt{1-x^2}$  
$y' = -\frac{x}{\sqrt{1-x^2}}$

$ArcLength = \int_0^a  \sqrt{1 + (y')^2}dx$  
$\alpha = \int_0^a  \sqrt{1 + \frac{x^2}{1-x^2}}dx$  
$\alpha = \int_0^a \frac{1}{\sqrt{{1-x^2}}}dx$  
$\alpha = \sin^{-1}(a)$  

以上就是弧度制的计算定义，即

$\sin \alpha = a$，（a为'x'）

## 例2

计算抛物线长度

$y = x^2$  
$y' = 2x$  
$ds = \sqrt{1 + 4x^2}dx$  

$\int_0^a \sqrt{1 + 4x^2}dx$  

注意，这是一个很好的答案了，使用任何计算积分的方法，都可以很快的得到结果。

而如果解积分，过程则很是繁琐，且答案(如下)很难看

$\int_0^a ds = \frac{1}{4}2x\sqrt{1+4x^2} + \frac{1}{4}\ln(2x+\sqrt{1+4x^2})$

提示：先三角替换 $x = \frac{1}{2}\tan(u)$,再使用分部积分，最后逆三角替换就好

### 例2的延伸，表面积

求例2所取的弧长，绕x轴旋转一周所形成的面积

$dA = (2\pi y)ds$  

$\int_0^a dA = \int_0^a (2\pi x^2)\sqrt{1 + 4x^2}dx$

这亦是一个很好的答案了

## 例3，球表面积

$dA = 2\pi y ds$  

注意，例1有$ds = \frac{1}{\sqrt{{1-x^2}}}$  

追加半径r，$ds = \frac{r}{\sqrt{{r^2-x^2}}}$

$\int dA = \int 2\pi \sqrt{r^2 - x^2} \sqrt{\frac{r^2}{r^2 - x^2}}dx$  
$\int dA = \int 2\pi r dx = 2\pi rx + C$  

得到不定积分

带入范围计算(右)半球表面积

$\int_0^r dA= 2\pi r(r - 0) = 2\pi r^2$

计算球表面积

$\int_{-r}^r dA = 2\pi r(r - (-r)) = 4\pi r^2$

## 总结

最初想看微积分的教程，是因为Game101。第一次遇到需要微积分的内容是立体角，而后又有渲染方程亦需要微积分。

这个教程看到这，是有一些感慨的，带着问题（微分立体角）而来，现在终于学到了相关的知识。前后大概花了两个月的时间。

加油哦