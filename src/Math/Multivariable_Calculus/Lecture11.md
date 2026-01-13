---
title: 微分与链式法则
icon: pen-to-square
date: 2026-01-13 00:00:00
isOriginal: true
category:
  - 数学
  - 多变量微积分
---

<!-- more -->

## 微分

函数$f(x,y,z)$，有 
$$\text{d}f =f_x\text{d}x + f_y\text{d}y + f_z\text{d}z$$
$$\text{d}f = \frac{\partial f}{\partial x}\text{d}x + \frac{\partial f}{\partial y}\text{d}y + \frac{\partial f}{\partial z}\text{d}z$$

### 链式法则

当函数$f(x,y,z)$转换成看做是关于$t$的函数$f(t)$时

$x = x(t)$  
$y = y(t)$  
$z = z(t)$

有链式法则：

$$
\frac{\text{d}f}{\text{d}t} = 
f_x \frac{\text{d}x}{\text{d}t} + 
f_y \frac{\text{d}y}{\text{d}t} + 
f_z \frac{\text{d}z}{\text{d}t}
$$

注：
1. 在一元的课程中的链式法则，就是函数$f(x)$转换成关于$t$的函数$f(x(t))$
2. 一元导数是全导数，多元是偏导数

### 一切皆为链式法则

::: details 一元加法法则

$f = (u + v)$；$u = u(t)$；$v = v(t)$

$$
\begin{align*}
    \frac{\text{d}(u+v)}{\text{d}t} &= f_u \frac{\text{d}u}{\text{d}t} + f_v \frac{\text{d}v}{\text{d}t} \\
    &= 1 \cdot u' + 1 \cdot v' \\
    &= u' + v'


\end{align*}
$$

:::

::: details 一元乘法法则

$f = uv$；$u = u(t)$；$v = v(t)$
$$
\begin{align*}
    \frac{\text{d}(uv)}{\text{d}t} &= f_u \frac{\text{d}u}{\text{d}t} + f_v \frac{\text{d}v}{\text{d}t} \\
    &= v \frac{\text{d}u}{\text{d}t} + u \frac{\text{d}v}{\text{d}t} \\ 
    &= u'v + uv'
\end{align*}
$$

:::

::: details 一元除法法则

$f = \frac{u}{v}$；$u = u(t)$；$v = v(t)$
$$
\begin{align*}
    \frac{\text{d}(\frac{u}{v})}{\text{d}t} &= f_u \frac{\text{d}u}{\text{d}t} + f_v \frac{\text{d}v}{\text{d}t} \\
    &= \frac{1}{v} \frac{\text{d}u}{\text{d}t} + \frac{-u}{v^2} \frac{\text{d}v}{\text{d}t} \\
    &= \frac{u'}{v} - \frac{uv'}{v^2} \\
    &= \frac{u'v - uv'}{v^2}
\end{align*}    
$$

:::