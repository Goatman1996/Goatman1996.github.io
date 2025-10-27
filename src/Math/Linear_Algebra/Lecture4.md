---
title: 矩阵的LU分解
icon: pen-to-square
date: 2025-10-27 00:00:00
isOriginal: true
category:
  - 数学
  - 线性代数
---

<!-- more -->

## 矩阵的转置

Transpose Matrix 转置矩阵

$A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$  

$A^T = \begin{bmatrix} a & c \\ b & d \end{bmatrix}$


## A=LU分解的用处

在求$Ax=b$时，先求出$A = LU$，后有$LUx=b$  
设$Ux=y$，$Ly=b$求出$y$后，$Ux = y$即可求$x$

这个计算过程，步骤简单，且只需要求一次$LU$，即可对任意的$b$求解$x$

### LU分解示例

$$
A = \begin{bmatrix}
    2&1&1\\4&3&3\\8&7&9
\end{bmatrix}
\begin{CD}
    @>\large{E_{21}(2)\to E_{31}(4)\to E_{32}(3)}>>  
\end{CD}
U = \begin{bmatrix}
    2&1&1\\0&1&1\\0&0&2
\end{bmatrix}
\begin{CD}
    @>\large{Build-L}>>  
\end{CD}
L = \begin{bmatrix}
    1&0&0\\2_{E21}&1&0\\4_{E31}&3_{E32}&1
\end{bmatrix}
$$

完成$LU$分解后，举例求$x = \begin{bmatrix}1\\1\\2\end{bmatrix}$  
$$
Ly = b 
\to
\begin{bmatrix}
    1&0&0\\2&1&0\\4&3&1
\end{bmatrix}
\begin{bmatrix}y_1\\y_2\\y_3\end{bmatrix} = 
\begin{bmatrix}1\\1\\2\end{bmatrix}
$$

$$y_1 = 1,y2 = -1,y3 = 1$$

$$
Ux = y \to
\begin{bmatrix}
    2&1&1\\0&1&1\\0&0&2
\end{bmatrix}
\begin{bmatrix}x_1\\x_2\\x_3\end{bmatrix} = 
\begin{bmatrix}1\\-1\\1\end{bmatrix}
$$

$$x_1 = 1,x_2 = -\frac{3}{2},x_3 = \frac{1}{2}$$

### 置换

Permutation matrix 置换矩阵

置换矩阵，即行或列的顺序被改变的矩阵

3x3的置换矩阵举例：
$$
P_{12} = \begin{bmatrix}
    0 & 1 & 0 \\
    1 & 0 & 0 \\
    0 & 0 & 1
\end{bmatrix}
$$

注：置换矩阵是正交矩阵

即：$P^{-1} = P^T$

### 完整的LU的解法
$$PA = LU$$