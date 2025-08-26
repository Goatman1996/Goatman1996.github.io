---
title: 矩阵乘法，逆矩阵
icon: pen-to-square
date: 2025-08-26 00:00:00
isOriginal: true
category:
  - 数学
  - 线性代数
---

<!-- more -->

## 矩阵乘法

矩阵乘法的行列数要求  
$M_{m\times n}M_{n\times k} = M_{m\times k}$

### 常规（代数）

$AB = C$  
某一格的结果为：$C_{mn} = \rm{A.row}_m \cdot \rm{B.column}_n$

m列 n行 的结果等于：矩阵A的m行（向量）点乘矩阵B的n列向量

### 列乘（左乘）

$\begin{bmatrix}
    a & b \\ c & d
\end{bmatrix}
\begin{bmatrix}
    x & y \\ z & w
\end{bmatrix}$  
拆分成  
$\rm{col_1}=\begin{bmatrix}
    a & b \\ c & d
\end{bmatrix}
\begin{bmatrix}
    x \\ z
\end{bmatrix}$
$\rm{col_2}=\begin{bmatrix}
    a & b \\ c & d
\end{bmatrix}
\begin{bmatrix}
    y \\ w
\end{bmatrix}$

$M_{\rm{result}} =\begin{bmatrix}
    \rm{col_1} & \rm{col_2} 
\end{bmatrix}$

一个矩阵则代表了一个空间，每一列代表了这个空间的一个轴（x轴，y轴等）  
所以将两个矩阵相乘，即将两个变换进行组合，就是分别对各轴进行进行变换后重新组成新的矩阵

### 行乘（右乘）

$\begin{bmatrix}
    a & b \\ c & d
\end{bmatrix}
\begin{bmatrix}
    x & y \\ z & w
\end{bmatrix}$  
拆分成
$\rm{row_1}=\begin{bmatrix}
    a & b 
\end{bmatrix}
\begin{bmatrix}
    x & y \\ z & w
\end{bmatrix}$
$\rm{row_2}=\begin{bmatrix}
    c & d
\end{bmatrix}
\begin{bmatrix}
    x & y \\ z & w
\end{bmatrix}$

理解与左乘类似

### 单行当列相乘

$\begin{bmatrix}
    a\\b\\c
\end{bmatrix}
\begin{bmatrix}
    x&y
\end{bmatrix} = 
\begin{bmatrix}
    ax & ay \\ 
    bx & by \\ 
    cx & cy
\end{bmatrix}$

可以按行或列观察，不管是按行还是按列看成向量，这个空间的轴都是共线的

## 逆矩阵

Inverse Matrix
不是所有的矩阵都有逆矩阵

### 方阵(Square Matrix)

如果矩阵$A$的逆矩阵$A^{-1}$存在，则
$AA^{-1} = A^{-1}A = I$

$I$ Identity Matrix 单位矩阵

非方矩阵，则$A^{-1}A$ 不可调换位置，起码是因为矩阵形状不想等导致不可乘

### 不可逆矩阵

Singular Matrix 奇异矩阵
Non-Invertible Matrix 不可逆矩阵

$A = \begin{bmatrix}
    1 & 3 \\ 2 & 6
\end{bmatrix}$

按行或列观察都可以发现，这个空间的轴共线了，无法张成一个完整的空间，所以这个矩阵不可逆

### 求逆矩阵(方阵)

$AA^{-1} = I$  

$\begin{bmatrix}
    1 & 3 \\
    2 & 7
\end{bmatrix}
\begin{bmatrix}
    a & c \\ 
    b & d
\end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$

即解方程组  
Gauss–Jordan elimination
高斯约旦消元法

Augmented matrix
增广矩阵

$$
\left[
    \begin{array}{cc|cc}
        1 & 3 & 1 & 0 \\
        2 & 7 & 0 & 1 \\
    \end{array}
\right] 
\begin{CD}
    @>\large{row_2 - 2row_1}>>  
\end{CD}
\left[
    \begin{array}{cc|cc}
        1 & 3 & 1 & 0 \\
        0 & 1 & -2 & 1 \\
    \end{array}
\right]
\begin{CD}
    @>\large{row_1 - 3row_2}>>  
\end{CD}
\left[
    \begin{array}{cc|cc}
        1 & 0 & 7 & -3 \\
        0 & 1 & -2 & 1 \\
    \end{array}
\right]
$$

而后，每一步的消元操作（矩阵）组合起来，我们称为E矩阵，即E矩阵为消元矩阵  
有$E\begin{bmatrix} A & I \end{bmatrix} = \begin{bmatrix} I & E \end{bmatrix} = \begin{bmatrix} I & A^{-1} \end{bmatrix}$

$A^{-1} = \begin{bmatrix}
    7 & -3 \\
    -2 & 1 
\end{bmatrix}$

