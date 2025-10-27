---
title: 置换，转置，逆与向量空间
icon: pen-to-square
date: 2025-10-27 01:00:00
isOriginal: true
category:
  - 数学
  - 线性代数
---

<!-- more -->

## 置换，转置以及逆矩阵

Permutation Matrix 置换矩阵     
Transpose Matrix 转置矩阵       
Inverse Matrix 逆矩阵    
Symmetric Matrix 对称矩阵       


### 置换矩阵
置换矩阵是正交矩阵
所以：$P^{-1} = P^T$

### 转置矩阵
转置矩阵即行列互换
有$(AB)^T = B^TA^T$

### 逆矩阵
逆矩阵的定义：$A^{-1}A = I$

逆矩阵的属性：$(AB)^{-1} = B^{-1}A^{-1}$ 

### 对称矩阵

对称矩阵即$A_{ij} = A_{ji}$的矩阵  
且$AA^T$是一个对称矩阵

## 向量空间
Vector Space 向量空间

$R^2$向量空间指的是，二维平面内所有向量的集合

1. $R$ for real number  
2. $R^2$ for 2D

$R^2$二维向量空间中的向量举例:  

$\begin{bmatrix} 1 \\ 2 \end{bmatrix}$
$\begin{bmatrix} 3 \\ 4 \end{bmatrix}$
$\begin{bmatrix} \pi \\ e \end{bmatrix}$

### 向量空间要求

向量空间要求满足:
1. 加法运算：所有向量均可互相进行加法运算，且结果仍在空间内  
   $\begin{bmatrix} 3 \\ 4 \end{bmatrix} + \begin{bmatrix} \pi \\ e \end{bmatrix} = \begin{bmatrix} 3+\pi \\ 4+e \end{bmatrix}$
2. 乘法运算：所有向量均可进行标量乘法运算，且结果仍在空间内  
   $\begin{bmatrix} \pi \\ e \end{bmatrix} \times 7 = \begin{bmatrix} 7\pi \\ 7e \end{bmatrix}$

* 简而言之就是对集合内的所有元素，满足加法和乘法的封闭性

$R^2$二维向量空间的图为一个二维笛卡尔坐标系的平面

### 不是向量空间例子
$R^2$的第一象限

满足加法，但是不满足乘法（乘以负数）

###  子空间

Subspace 子空间

直接举例子:  
$R^3$的子空间有
1. $R^3$本身
2. 过原点的平面
3. 过原点的直线
4. 原点
