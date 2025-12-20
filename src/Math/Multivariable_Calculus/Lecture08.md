---
title: 偏导数，近平面
icon: pen-to-square
date: 2025-12-20 00:00:00
isOriginal: true
category:
  - 数学
  - 多变量微积分
---

<!-- more -->

## 偏导数
Partial Derivative: 偏导数

::: details Partial翻译
部分的 偏袒的 钟爱的
:::

## 一元函数的导数回顾

$$f'(x) = \frac{df}{dx} = \lim_{\Delta x \to 0} \frac{f(x+\Delta x) - f(x)}{\Delta x}$$

## 偏导数的记号

$\partial$ = partial

$\frac{\partial f}{\partial x} = f_x$ 一次只求一个变量的导数，另外一个变量视为常数，所以称为“部分”导数

如：$f(x,y)$

$$\frac{\partial f}{\partial x} (x_0,y_0) = 
\lim_{\Delta x \to 0} \frac{f(x_0 + \Delta x, y_0) - f(x_0, y_0)}{\Delta x} = f_x$$

$$
\frac{\partial f}{\partial y} (x_0,y_0) =
\lim_{\Delta y \to 0} \frac{f(x_0, y_0 + \Delta y) - f(x_0, y_0)}{\Delta y} = f_y
$$

## Geometrically 几何上

当求$x$的偏导时，即为固定了$y = y_0$，偏导结果即为函数在$y = y_0$处的截面

## 例

$$f(x,y) = x^3y + y^2$$

$$\frac{\partial f}{\partial x} = 3x^2y + 0$$
$$\frac{\partial f}{\partial y} = x^3 + 2y$$