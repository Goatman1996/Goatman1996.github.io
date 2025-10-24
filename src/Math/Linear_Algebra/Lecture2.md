---
title: 矩阵消元
icon: pen-to-square
date: 2025-08-22 01:00:00
isOriginal: true
category:
  - 数学
  - 线性代数
---

<!-- more -->

## 高斯消元

Gaussian Elimination 高斯消元

矩阵的消元，即解方程组  

方程组  
$x + 2y + z = 2$  
$3x + 8y + z = 12$  
$0x + 4y +z = 2$  

矩阵形式为  
$\begin{bmatrix}
    1 & 2 & 1 \\
    3 & 8 & 1 \\
    0 & 4 & 1
\end{bmatrix}
\begin{bmatrix}
    x \\ y \\ z
\end{bmatrix} = 
\begin{bmatrix}
    2 \\ 12 \\ 2
\end{bmatrix}$

消元即通过凑同系数的元，然后相减以消元，再挨个元计算结果：
<!-- 1&2&1\\3&8&1\\0&4&1 -->
$$\begin{bmatrix}
    1&2&1\\3&8&1\\0&4&1
\end{bmatrix} 
\begin{CD}
    @>\large{row_2 - 3row_1}>>  
\end{CD}
\begin{bmatrix}
    1&2&1\\0&2&-2\\0&4&1
\end{bmatrix} 
\begin{CD}
    @>\large{row_3 - 2row_2}>>  
\end{CD}
\begin{bmatrix}
    1&2&1\\0&2&-2\\0&0&5
\end{bmatrix}
$$

### 解析
* 第一步，$row_2-3row_1$ 等价于
$$E_{21}=\begin{bmatrix}
    1&0&0\\-3&1&0\\0&0&1
\end{bmatrix}
\begin{bmatrix}
    1&2&1\\3&8&1\\0&4&1
\end{bmatrix} = 
\begin{bmatrix}
    1&2&1\\0&2&-2\\0&4&1
\end{bmatrix} $$

可联系上节提到的右乘进行理解

* 第二步：$row_3-2row_2$ 等价于
$$E_{32}=\begin{bmatrix}
    1&0&0\\0&1&0\\0&-2&1
\end{bmatrix}
\begin{bmatrix}
    1&2&1\\0&2&-2\\0&4&1
\end{bmatrix} = 
\begin{bmatrix}
    1&2&1\\0&2&-2\\0&0&5
\end{bmatrix}$$

### 整合结果

$$E_{32}E_{21}A = EA = u$$
$A$ 为原矩阵，$E$为消元矩阵，$u$ 为结果矩阵，即
$$E = E_{32}E_{21} = 
\begin{bmatrix}
    1&0&0\\0&1&0\\0&-2&1
\end{bmatrix}
\begin{bmatrix}
    1&0&0\\-3&1&0\\0&0&1
\end{bmatrix} = 
\begin{bmatrix}
    1&0&0\\-3&1&0\\6&-2&1
\end{bmatrix}
$$

### 计算方程解

$Ax=b$  
$EA = u$  
$EAx = Eb$  
$ux = Eb$

$$
E = \begin{bmatrix}
    1&0&0\\-3&1&0\\6&-2&1
    \end{bmatrix};
b = \begin{bmatrix}
    2\\12\\2
    \end{bmatrix};
Eb = \begin{bmatrix}
    2\\6\\-10
    \end{bmatrix}
$$

$$
u = \begin{bmatrix}
    1&2&1\\0&2&-2\\0&0&5
    \end{bmatrix}
$$

解$ux = Eb$
$$
\begin{bmatrix}
    1&2&1\\0&2&-2\\0&0&5
    \end{bmatrix}
\begin{bmatrix}
    x\\y\\z
    \end{bmatrix} = 
\begin{bmatrix}
    2\\6\\-10
    \end{bmatrix}
$$

$$x = 2;y = 1;z = -2$$

带回方程验证正确，以上就是高斯消元解方程组的全过程

## 增广消元

Augmented matrix 增广矩阵

构造一个增广矩阵

$$
\left[
    \begin{array}{c|c}
        A & b
    \end{array}
\right] = 
\left[
    \begin{array}{ccc|c}
        1 & 2 & 1 & 2 \\
        3 & 8 & 1 & 12 \\
        0 & 4 & 1 & 2
    \end{array}
\right] 
\begin{CD}
    @>\large{E}>>  
\end{CD}  
\left[
    \begin{array}{ccc|c}
        1 & 2 & 1 & 2 \\
        0 & 2 & -1 & 6 \\
        0 & 0 & 5 & -10
    \end{array}
\right] =
\left[
    \begin{array}{c|c}
        EAx & Eb
    \end{array}
\right]
$$

即可计算结果