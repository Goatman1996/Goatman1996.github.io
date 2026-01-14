---
title: 梯度，切平面，方向导数
icon: pen-to-square
date: 2026-01-13 01:00:00
isOriginal: true
category:
  - 数学
  - 多变量微积分
---

<!-- more -->

## 梯度

函数$W(x,y,z)$  
$x = x(t)$  
$y = y(t)$  
$z = z(t)$

导数：
$$\frac{\text{d}W}{\text{d}t} = W_x \frac{\text{d}x}{\text{d}t} + W_y \frac{\text{d}y}{\text{d}t} + W_z \frac{\text{d}z}{\text{d}t}$$

可以简写成：

$$\frac{\text{d}W}{\text{d}t} =\nabla W \cdot \frac{\text{d}\vec{r}}{\text{d}t}$$
其中:$\nabla W$ 为梯度向量
$$\nabla W = <W_x,W_y,W_z>$$
后者为速度向量
$$\frac{\text{d}\vec{r}}{\text{d}t} = <\frac{\text{d}x}{\text{d}t},\frac{\text{d}y}{\text{d}t},\frac{\text{d}z}{\text{d}t}>$$

即：梯度向量包含了所有方向的变化率，对于给定的$\text{d}x,\text{d}y,\text{d}z$，可计算出总变化量。

### 性质

$\nabla W$为切平面的法线

### 例

找到函数$W(x,y,z) = x^2 + y^2 - z^2$，当$W = 4$时的图像，于点$(2,1,1)$处的切平面

1. 计算梯度向量$\nabla$：

$\nabla W= <2x,2y,-2z>$

2. 代入点计算法线

于点$(2,1,1)$处，$\nabla W = <4,2,-2>，此为切平面法线

3. 确定切平面方程
 
切平面： $4x + 2y - 2z$

代入点$(2,1,1)$  
$4(x - 2) + 2(y - 1) - 2(z - 1) = 0$

$\therefore 4x + 2y - 2z = 8$

[近平面参见](./Lecture08.md#近平面)

## 方向导数

对于函数$W(x,y)$的偏导$fx$，是在固定住$y$的情况下，对$x$进行求导，本质上是在$\hat{x}$（或者称$\hat{i}$）方向上的求导。

假定希望对任意方向$\hat{u}$进行求导，则操作如下：

$$\frac{\text{d}W}{\text{d}s}_{|\hat{u}} = \nabla W \cdot \hat{u}$$

// 按分量取投影。

### Geometrically 

$$\frac{\text{d}W}{\text{d}s}_{|\hat{u}} = \nabla W \cdot \hat{u} = |\nabla W|\cos \theta$$

$\theta$为$\hat{u}$和$\nabla W$的夹角

当投影为1时，$\theta = 0\degree$，意为在该点处该方向的变化速度最快  
当投影为0时，$\theta = 90\degree$，意为在该点处该方向的变化速度最慢(变化率为0)