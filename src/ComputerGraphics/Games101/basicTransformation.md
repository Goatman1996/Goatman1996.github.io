---
title: 基础变换
icon: pen-to-square
date: 2024-03-29
isOriginal: true
category:
  - 图形学
  - Games101
---

<!-- more -->

## 缩放矩阵
Scale Matrix
$$\begin{bmatrix}
    S_x & 0 \\
    0 & S_y
\end{bmatrix}$$

例：将向量(4,3)缩放到原来的0.5倍
$$
\begin{bmatrix}
    0.5 & 0 \\ 0 & 0.5
\end{bmatrix}
\begin{bmatrix}
    4 \\ 3
\end{bmatrix}=
\begin{bmatrix}
    2 \\ 1.5
\end{bmatrix}
$$

## 切变矩阵
Shear Matrix
$$
\begin{bmatrix}
    1 & k \\
    0 & 1
\end{bmatrix}
\begin{bmatrix}
    x \\ y
\end{bmatrix}=
\begin{bmatrix}
    x + ky \\ y
\end{bmatrix}
$$

## 旋转矩阵
Rotate Matrix<br>
// 默认的，旋转表示绕原点逆时针旋转

$$
R_\theta=
\begin{bmatrix}
    \cos \theta & -\sin \theta \\
    \sin \theta & \cos \theta
\end{bmatrix}
$$

可简单的推导得出上述变换矩阵
### 旋转矩阵的特别点
当旋转$-\theta$角度时旋转矩阵为
$$
R_{-\theta}=
\begin{bmatrix}
    \cos \theta & \sin \theta \\
    -\sin \theta & \cos \theta
\end{bmatrix}
$$
由此可得：$R_{-\theta}={R_\theta}^T (R_{-\theta}是R_\theta的转置)$<br>
且：$R_{-\theta} = {R_\theta}^{-1} (R_{-\theta}和R_\theta互为逆矩阵)$<br>
所以有：旋转矩阵 $R_\theta的逆=R_\theta的转置$
### 正交矩阵
我们称符合上述条件的矩阵为正交矩阵

## 线性变换
Linear Transform

以上变换均属于线性变换

线性变换的形式
$$
\begin{bmatrix}
    x\prime \\ y\prime
\end{bmatrix}=
\begin{bmatrix}
    a & b \\
    c & d
\end{bmatrix}
\begin{bmatrix}
    x \\ y
\end{bmatrix}
$$

## 平移矩阵
Translate Matrix

要说明平移变换之前，先要引入齐次坐标概念
### 齐次坐标
将向量或坐标升维表示

以2维为例

point : (x,y)的齐次坐标为(x,y,1)<br>
（点代表位置，需要对平移生效,所以新维度用1表示）

vector : (x,y)的齐次坐标为(x,y,0)<br>
（向量代表方向，不需要对平移生效，所以新维度用0表示）

### 平移矩阵表示方法

并不好用不统一的计算方法
$$
\begin{bmatrix}
    x\prime \\ y\prime
\end{bmatrix}=
\begin{bmatrix}
    x \\ y
\end{bmatrix}+
\begin{bmatrix}
    t_x \\ t_y
\end{bmatrix}
$$

引入齐次坐标后的矩阵
$$
\begin{bmatrix}
    x\prime \\ y\prime \\ w\prime
\end{bmatrix}=
\begin{bmatrix}
    1 & 0 & t_x \\
    0 & 1 & t_y \\
    0 & 0 & 1
\end{bmatrix}
\begin{bmatrix}
    x \\ y \\ 1
\end{bmatrix}=
\begin{bmatrix}
    x+t_x \\ y+t_y \\ 1
\end{bmatrix}
$$

### 齐次坐标后的基本操作统一
齐次坐标升维后的新维度用$w$表示<br>
当$w=1$时，代表一个点<br>
当$w=0$时，代表一个向量<br>

由此可得
- vector + vector = vector (0+0=0)
- point - point = vector (1-1=0)
- point + vector = point (1+0=1)
- point + point = point (1-1=2)<br>
最后这一种的情况，$w=2$比较特殊，所以齐次坐标扩充了一项定义

$\begin{bmatrix}
    x \\ y \\ w
\end{bmatrix}$当$w\not ={0}$时，表示一个点
$\begin{bmatrix}
    x/w \\ y/w \\ 1
\end{bmatrix}$

通过上面的这个补充定义，在齐次坐标中<br>
pointA + pointB = 两个点的中点

## 仿射变换
Affine Transform

引入齐次坐标的目的，就是为了将线性变换和平移变换统一起来

- 线性变换+平移
$$
\begin{bmatrix}
    x\prime \\ y\prime
\end{bmatrix}=
\begin{bmatrix}
    a & b \\
    c & d
\end{bmatrix}
\begin{bmatrix}
    x \\ y
\end{bmatrix}+
\begin{bmatrix}
    t_x \\ t_y
\end{bmatrix}
$$
- 齐次坐标
$$
\begin{bmatrix}
    x\prime \\ y\prime \\ 1
\end{bmatrix}=
\begin{bmatrix}
    a & b & t_x \\
    c & d & t_y \\
    0 & 0 & 1
\end{bmatrix}
\begin{bmatrix}
    x \\ y \\ 1
\end{bmatrix}
$$

## 逆变换
$M^{-1}M\begin{bmatrix}
    x \\ y \\ 1
\end{bmatrix}=
\begin{bmatrix}
    x \\ y \\ 1
\end{bmatrix}$

## 变换的组合操作
举例这么一个操作，将点(3,4)先旋转45度，在想右平移1个单位<br>
计算上书写如下:
$$
T_{(1,0)}R_{45\degree}
\begin{bmatrix}
    3 \\ 4 \\ 1
\end{bmatrix}=
\begin{bmatrix}
    1 & 0 & 1 \\
    0 & 1 & 0 \\
    0 & 0 & 1
\end{bmatrix}
\begin{bmatrix}
    \cos 45\degree & -\sin 45\degree & 0\\
    \sin 45\degree & \cos 45\degree & 0 \\
    0 & 0 & 1
\end{bmatrix}
\begin{bmatrix}
    3 \\ 4 \\ 1
\end{bmatrix}
$$

将先后的两个变换矩阵合并后，会得到一个变换矩阵，一次性的完成这个操作
$$
\begin{bmatrix}
    \cos 45\degree & -\sin 45\degree & 1 \\ 
    \sin 45\degree & \cos 45\degree & 0 \\
    0 & 0 & 1
\end{bmatrix}
\begin{bmatrix}
    3 \\ 4 \\ 1
\end{bmatrix}
$$

注：两个变换操作的顺序是不能颠倒的，顺序的不同，导致的结果也会不同
$$
T_{(1,0)}R_{45\degree} \not = R_{45\degree}T_{(1,0)}
$$