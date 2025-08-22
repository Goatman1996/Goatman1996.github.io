---
title: 方程组的几何解释
icon: pen-to-square
date: 2025-08-22 00:00:00
isOriginal: true
category:
  - 数学
  - 线性代数
---

<!-- more -->

## 方程组的几何解释

设这么一个方程组  
$2x - y = 0$  
$-x + 2y = 3$  

矩阵形式为  
$
\begin{bmatrix}
2 & -1 \\
-1 & 2
\end{bmatrix} 
\begin{bmatrix}
x \\ y \\
\end{bmatrix} = 
\begin{bmatrix}
0 \\ 3
\end{bmatrix}
$

方程组的矩阵形式称为  
$Ax = b$

### 行图像

按照行图像来看，几何意为，两个方程所代表的直线的交点，即  

<iframe src="https://www.desmos.com/calculator/t9g89vfgmt?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>

红色：$2x - y = 0$  
蓝色：$-x + 2y = 3$  

### 列图像

按列观察，可得到矩阵的解为：

$$
\begin{bmatrix}
2 & -1 \\
-1 & 2
\end{bmatrix} 
\begin{bmatrix}
x \\ y \\
\end{bmatrix} = 
x \begin{bmatrix} 2 \\ -1 \end{bmatrix} + 
y \begin{bmatrix} -1 \\ 2 \end{bmatrix} =
\begin{bmatrix}
0 \\ 3
\end{bmatrix}
$$

即，x个 (2, -1) 向量加上y个 (-1, 2) 向量 的结果，如图

<iframe src="https://www.desmos.com/calculator/0i2vaf5mmm?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>

红色：(2, -1)  
蓝色：(-1, 2)  
绿色：(0, 3)

代入解即意为：$1·(2,-1) + 2·(-1,2) = (0,3)$


## 左乘与右乘

左乘：
$$\begin{bmatrix}a & b \\ c & d \end{bmatrix} \begin{bmatrix} x \\ y\end{bmatrix} = x\begin{bmatrix} a \\ c \end{bmatrix} + y\begin{bmatrix} b \\ d \end{bmatrix}$$  

右乘：
$$\begin{bmatrix}
  x & y
\end{bmatrix} 
\begin{bmatrix}
  a & b \\
  c & d
\end{bmatrix} = 
x\begin{bmatrix}
  a & b
\end{bmatrix} + 
y\begin{bmatrix}
  c & d
\end{bmatrix}
$$

## 总结

仅仅一节课，就解答了困扰多年的问题，即如何理解矩阵X向量。  
如Unity Shader中的矩阵是列主矩阵，所有在如TBN矩阵中，按照列将对应的XYZ轴排列即可得出的出TBN矩阵。  
又如在非统一缩放的normalOS -> normalWS计算中，所需要乘的转置矩阵，即使用右乘即可  
