---
title: Ax=b通解
icon: pen-to-square
date: 2025-10-29 00:00:00
isOriginal: true
category:
  - 数学
  - 线性代数
---

<!-- more -->

求$Ax = b$

$A = \begin{bmatrix} 1&2&2&2\\2&4&6&8\\3&6&8&10 \end{bmatrix}$

## 讨论b的可解性

使用增广矩阵进行消元
$$
\begin{bmatrix} A&b \end{bmatrix} = 
\left[
    \begin{array}{cccc|c}
        1&2&2&2&b_1\\2&4&6&8&b_2\\3&6&8&10&b_3
    \end{array}
\right] = 
\left[
    \begin{array}{cccc|c}
        1&2&2&2&b_1\\0&0&2&4&b_2 - b_1\\0&0&0&0&b_3 - b_2 - b_1
    \end{array}
\right]
$$

可以看出$b_3 - b_2 - b_1 = 0$  
所以对于b的可解性结论是：  
1. 仅当$b$属于$C(A)$时有解（这个很好理解）
2. 如何$A$的各行进行线形组合后有$[0]$行，则b进行相同的操作后也必然是0  
   本例中为：$b_3 - b_2 - b_1 = 0$ 

## 求零空间

求$Ax = 0$等价于  
求$Ux = 0$的解  
即

$$
\begin{bmatrix} 1&2&2&2\\0&0&2&4\\0&0&0&0 \end{bmatrix} 
\begin{bmatrix} x_1\\x_2\\x_3\\x_4 \end{bmatrix} = 
\begin{bmatrix} 0\\0\\0 \end{bmatrix}
$$
即：  
$x_1 + 2x_2 + 2x_3 + 2x_4 = 0$  
$2x_2 + 4x_3 = 0$

0. 可以看出秩为2，且1，3为主列，2，4为自由列，分别设两个自由列为0,1求特解
1. 设$x_2 = 0,x_4 = 1$，解得$x_3 = -2,x_1 = 2$
2. 设$x_2 = 1,x_4 = 0$，解得$x_3 = 0,x_1 = -2$

将两个特解组合起来即可得到$Ax = 0$的通解

$$x_{null} = C_1\begin{bmatrix}2\\0\\-2\\1 \end{bmatrix} + C_2\begin{bmatrix}-2\\1\\0\\0 \end{bmatrix} = N(A)$$

## 特解X Particular

根据上述讨论得知，满足$b_3 - b_2 - b_1 = 0$的$b$才有解。

* 所以任意设$b= \begin{bmatrix}1\\3\\4\end{bmatrix}$ 

求$Ax = b$

1. 先求出一个特解

$Ax = b$  
$\to EAx = Eb$  
$\to Ux = Eb$

$Eb = \begin{bmatrix}1\\1\\0\end{bmatrix}$

即求解

$$
\begin{bmatrix} 1&2&2&2\\0&0&2&4\\0&0&0&0 \end{bmatrix} 
\begin{bmatrix}x_1\\x_2\\x_3\\x_4 \end{bmatrix} = 
\begin{bmatrix}1\\1\\0 \end{bmatrix}
$$

$x_1 + 2x_2 + 2x_3 + 2x_4 = 0$  
$2x_2 + 4x_3 = 0$

0. 对于自由列而言，均取0进行计算，即$x_2 = x_4 = 0$

解得$x_3 = \frac{1}{2},x_1 = 0$

对于$Ax = b, b = \begin{bmatrix}1\\3\\4\end{bmatrix}$的一个特解为  

$x_p = \begin{bmatrix}0\\0\\\frac{1}{2}\\0\end{bmatrix}$

* 通解（重点）

$\because Ax_p = b; Ax_n = 0$  
$Ax_p + Ax_n = b + 0$  
$\therefore A(x_p + x_n) = b$

通解为：

$$
x_p + x_n = 
\begin{bmatrix}0\\0\\\frac{1}{2}\\0\end{bmatrix} + 
C_1\begin{bmatrix}2\\0\\-2\\1 \end{bmatrix} + 
C_2\begin{bmatrix}-2\\1\\0\\0 \end{bmatrix}
$$


