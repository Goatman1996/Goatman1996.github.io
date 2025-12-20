---
title: 开头与参数方程
icon: pen-to-square
date: 2025-12-03 00:00:00
isOriginal: true
category:
  - 数学
  - 多变量微积分
---

<!-- more -->

## 向量与矩阵基础

提前看了一些线性代数的内容，这一部分跳过了。

## 平面方程

比较的简单，速过

三维空间中，一个平面的方程为：

$ax+by+cz=d$

1. 找到过原点，且法线为$<1,5,10>$的平面

$$1x + 5y + 10z = 0 \Longleftrightarrow \begin{bmatrix}1&5&10\end{bmatrix}\begin{bmatrix}x\\y\\z\end{bmatrix} = [0](法线点乘=0)$$



2. 过点$P=(2,1,-1)$，且法线为$\vec{n}=<1,5,10>$的平面

$$\begin{array}{l}
  1(x-2)+5(y-1)-10(z+1)=0 & (带入P点点乘为0)\\
  1x + 5y + 10z = -3 \\
\end{array}$$


## 直线的参数方程

有$Q_0=(-1,2,2),Q_1=(1,3,-1)$

$$
    Q(t) =
        \begin{cases}
            x(t) = -1+2t  \\
            y(t) = 2+t  \\
            z(t) = 2-3t  \\
        \end{cases} 
$$
其中常数项为$t=0$的值

问$Q(t)$与平面$x+2y+4z=7$的关系

代入$Q_0 \rightarrow -1+4+8 = 11 > 7 \ (11-7=4)$  
代入$Q_1 \rightarrow 1+6-4 = 3 < 7 \ (3-7=-4)$  
$\therefore Q_0 \ Q_1$ 不在平面上，且不同一侧，有交点  
$Q(t) = (x(t) , y(t) , z(t))  \text{代入平面}$

$$
\begin{align}
    x(t) + 2y(t) + 4z(t) &= 7 \\
    (-1+2t) + 2(2+t) + 4(2-3t) &= 7  \\
    (-8t) + 11 &= 7  \\
    t &= \frac{1}{2}  \\
\end{align}
$$
从代入$Q_0,Q_1$的结果$\pm 4$来看，交点确实是在$Q_0,Q_1$中间

交点：$Q(\frac{1}{2}) = (0,\frac{1}{2}+2,-\frac{3}{2}+2)$

# 曲线的参数方程

摆线：一个向前滚动的车轮上，固定一点的运动轨迹

<iframe src="https://www.desmos.com/calculator/6cxodd17vs?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>

如图所示，方程推算并不困难

$$\vec{r}(t) = <t - \sin t, 1 - \cos t>$$
$$\vec{v} = \frac{d\vec{r}}{dt} = <1 - \cos t, \sin t>$$
$$|\vec{v}| = \sqrt{2-2\cos t}\;(\text{速度大小})$$
$$\vec{a} = \frac{d\vec{v}}{dt} = <-\sin t, 1 - \cos t>$$

求弧长$s$:

$$\frac{ds}{dt} = |\vec{v}| = \sqrt{2-2\cos t}$$
$$s = \int_0^{2\pi} \sqrt{2-2\cos u} du\;\text{不会}$$

链式法则有：
$$
\begin{align}
  \vec{v} = \frac{d\vec{r}}{dt} = &\frac{d\vec{r}}{ds} & \frac{ds}{dt} \\
  & \text{Unit } \vec{v} & |\vec{v}|
\end{align}
$$