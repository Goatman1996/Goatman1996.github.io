---
title: 矩阵
icon: pen-to-square
date: 2024-03-27
isOriginal: true
---

<!-- more -->

## 定义
举例一个3x2(3行2列)的矩阵
$$
\begin{pmatrix}
1 & 3 \\
5 & 2 \\ 
0 & 4
\end{pmatrix}
$$
(m x n) = (m 行 n 列)

## 矩阵乘法
### 前提要求
(m x n)(n x p) = (m x p)<br>
即：<font color=#00ff00> m </font>行<font color=#ff0000> n </font>列矩阵 X <font color=#ff0000> n </font>行<font color=#00ff00> p </font>列矩阵 =<font color=#00ff00> m </font>行<font color=#00ff00> p </font>列矩阵

矩阵乘法要求前一个矩阵的列数与后一个矩阵的行数相等

### 计算

$$
\begin{pmatrix}
    a_{11} & a_{12} \\ 
    a_{21} & a_{22} \\ 
    a_{31} & a_{32} \\ 
\end{pmatrix}
\begin{pmatrix}
    b_{11} & b_{12} & b_{13} & b_{14} \\ 
    b_{21} & b_{22} & b_{23} & b_{24} \\ 
\end{pmatrix}
$$
(3x2)(2x4)=(3x4)，结果如下
$$
\begin{pmatrix}
    a_{行1} \cdot b_{列1} & a_{行1} \cdot b_{列2} & a_{行1} \cdot b_{列3} & a_{行1} \cdot b_{列4} \\ 
    a_{行2} \cdot b_{列1} & a_{行2} \cdot b_{列2} & a_{行2} \cdot b_{列3} & a_{行2} \cdot b_{列4} \\ 
    a_{行3} \cdot b_{列1} & a_{行3} \cdot b_{列2} & a_{行3} \cdot b_{列3} & a_{行3} \cdot b_{列4} \\
    a_{行4} \cdot b_{列1} & a_{行4} \cdot b_{列2} & a_{行4} \cdot b_{列3} & a_{行4} \cdot b_{列4} \\
\end{pmatrix}
$$
代入数值进行点乘得出结果
$$
\begin{pmatrix}
    a_{11}b_{11} + a_{12}b_{21} & a_{11}b_{12} + a_{12}b_{22} & a_{11}b_{13} + a_{12}b_{23} & a_{11}b_{14} + a_{12}b_{24} \\ 
    a_{21}b_{11} + a_{22}b_{21} & a_{21}b_{12} + a_{22}b_{22} & a_{21}b_{13} + a_{22}b_{23} & a_{21}b_{14} + a_{22}b_{24} \\ 
    a_{31}b_{11} + a_{32}b_{21} & a_{31}b_{12} + a_{32}b_{22} & a_{31}b_{13} + a_{32}b_{23} & a_{31}b_{14} + a_{32}b_{24} \\
\end{pmatrix}
$$

### 属性
- <font color="red">没有</font>矩阵乘法交换律<br>
    AB != BA
- 矩阵乘法结合律<br>
    (AB)C = A(BC)
- 矩阵乘法分配律<br>
    A(B+C) = AB + AC  
    (A+B)C = AC + BC

### 矩阵乘向量的情况  
只要满足[前提要求](#前提要求)即可

左乘例：
$$
\begin{pmatrix}
    1 & 2 \\
    3 & 4
\end{pmatrix}
\begin{pmatrix}
    5 \\
    6
\end{pmatrix}
$$
右乘例：
$$
\begin{pmatrix}
    1 & 2 \\
\end{pmatrix}
\begin{pmatrix}
    3 & 4 \\
    5 & 6
\end{pmatrix}
$$

## 转置(Transpose)矩阵
### 转置操作
矩阵
$A=\begin{pmatrix}
    1 & 2 \\
    3 & 4 \\
    5 & 6
\end{pmatrix}$
的转置矩阵为
$A^T=\begin{pmatrix}
    1 & 3 & 5 \\
    2 & 4 & 6
\end{pmatrix}$

即：矩阵的转置是指将矩阵的行变为列，列变为行的变换。
### 转置矩阵的属性
$$(AB)^T=B^TA^T$$

## 单位矩阵(Identity Matrix)
### 单位矩阵定义
从左上角到右下角的对角线（称为主对角线）上的元素均为1。除此以外全都为0的矩阵，称为单位矩阵

### 3阶单位矩阵
$$
I_3=I_{3\times 3}=\begin{pmatrix}
    1 & 0 & 0 \\
    0 & 1 & 0 \\
    0 & 0 & 1
\end{pmatrix}
$$

### n阶单位矩阵
$$
I_n=I_{n\times n}=\begin{pmatrix}
    1 & 0 & \cdots & 0 \\
    0 & 1 & \cdots & 0 \\
    \vdots & \vdots & \ddots & \vdots \\
    0 & 0 & \cdots & 1
\end{pmatrix}$$

### 单位矩阵的属性
$AI = IA = A$
任何矩阵乘以单位矩阵都是原矩阵本身。(没什么用)

## 逆矩阵(Inverses)
### 逆矩阵的定义
假设有矩阵 $A$ 和 $A^{-1}$ ，当 $AA^{-1}=A^{-1}A=I$ 时，称$A$和$A^{-1}$互为逆矩阵。
### 逆矩阵的属性
$(AB)^{-1}=B^{-1}A^{-1}$

## 向量乘法的矩阵表示
- 下列表示中，向量默认为列向量
### 点乘的矩阵表示
$$
\vec{a} \cdot \vec{b}=\vec{a}^T\vec{b}=
\begin{pmatrix}
    x_a & y_a & z_a
\end{pmatrix}
\begin{pmatrix}
    x_b \\ y_b \\ z_b
\end{pmatrix}=
x_a x_b+y_a y_b+z_a z_b
$$
### 叉乘的矩阵表示
$$
\vec{a} \times \vec{b}=A^*b=
\begin{pmatrix}
    0 & -z_a & y_a \\
    z_a & 0 & -x_a \\
    -y_a & x_a & 0
\end{pmatrix}
\begin{pmatrix}
    x_b \\ y_b \\ z_b
\end{pmatrix}=
\begin{pmatrix}
    y_a z_b - y_b z_a \\ 
    z_a x_b - x_a z_b \\ 
    x_a y_b - y_a x_b
\end{pmatrix}
$$