---
title: 行列式应用，逆与克莱姆法则
icon: pen-to-square
date: 2025-11-20 00:00:00
isOriginal: true
category:
  - 数学
  - 线性代数
---

<!-- more -->

## 矩阵的逆

二阶矩阵的逆，可用增广消元$[A|I] = [I|A^{-1}]$求得

$$
\begin{bmatrix}a&b\\c&d\end{bmatrix}^{-1} 
= \frac{1}{ad-bc}
\begin{bmatrix}d&-b\\-c&a\end{bmatrix}
$$

### 逆的公式

$$A^{-1} = \frac{1}{\det A}C^T$$

1. $A = \begin{bmatrix}a&b\\c&d\end{bmatrix}$

2. $C = \begin{bmatrix}d&-c\\-b&a\end{bmatrix}$，代数余子式矩阵（各个位置的值为$C_{ij}$）

3. $C^T = \begin{bmatrix}d&-b\\-c&a\end{bmatrix}$，一般称为伴随矩阵

### 证明

$$
A^{-1} = \frac{1}{\det A}C^T \Longleftrightarrow AC^T = (\det A)I = 
\begin{bmatrix}
    \det A & 0 & 0 \\ 
    0 & \det A & 0 \\
    0 & 0 & \det A
\end{bmatrix}(三阶简化排版)
$$

1. 对角线上的值不难看出：$\det A_{n} = \sum_{j=1}^n a_{ij} C_{ij}$

2. 非对角线的值

例如1-3的值：$a_{11}C_{31}+a_{12}C_{32}+a_{13}C_{33}$

$$
C31 = \begin{vmatrix}a_{12} & a_{13} \\ a_{22} & a_{23}\end{vmatrix}, 
C32 = \begin{vmatrix}a_{11} & a_{13} \\ a_{21} & a_{23}\end{vmatrix}, 
C33 = \begin{vmatrix}a_{11} & a_{12} \\ a_{21} & a_{22}\end{vmatrix}
$$

本质上求的是

$$
\begin{vmatrix}
    a_{11} & a_{12} & a_{13} \\
    a_{11} & a_{12} & a_{13} \\
    a_{21} & a_{22} & a_{23} 
\end{vmatrix} = 0
$$
错行必定会包含相同行

## 克莱姆法则

求$Ax = b$  
$x = A^{-1}b$  
$x = \frac{1}{\det A} C^Tb$

设又矩阵$B_j$，意为将$A$的$j$列替换为$b$  
有克莱姆法则:$x_j = \frac{\det B_j}{\det A}$

例：

$\begin{bmatrix}a_1&a_2\\a_3&a_4\end{bmatrix}\begin{bmatrix}x\\y\end{bmatrix} = \begin{bmatrix}b_1\\b_2\end{bmatrix}$

$x = \frac{\begin{vmatrix}b_1&a_3\\b_2&a_4\end{vmatrix}}{\det A}$

$y = \frac{\begin{vmatrix}a_1&b_1\\a_2&b_2\end{vmatrix}}{\det A}$

### 克莱姆法则的总结

克莱姆法则提供了一种解方程组的数值计算方法，但其要求计算$n+1$阶行列式  
低阶（个人认为仅2阶）可用，高阶时消元更快

## 行列式的几何意义

行列式 = 体积

二维上，$\begin{vmatrix}a&b\\c&d\end{vmatrix}$ = 平行四边形面积（$\frac{1}{2}$即为三角形面积）
