---
title: 正交矩阵
icon: pen-to-square
date: 2025-11-17 00:00:00
isOriginal: true
category:
  - 数学
  - 线性代数
---

<!-- more -->

## 正交矩阵

有一组正交单位向量$q_1, q_2, q_3, ..., q_n$，它们按列所组成的矩阵，为正交矩阵$Q$

$$Q = \begin{bmatrix}q_1&q_2&q_3&...&q_n\end{bmatrix}$$

有：$Q^TQ = I$，$Q^T = Q^{-1}$

例：旋转矩阵
$$R = \begin{bmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{bmatrix}$$

$R$为正交矩阵

## 正交化法

Graham-Schmidt Orthogonalization
格拉姆-施密特正交化法

设有$a$,$b$向量，不正交，使其正交化的步骤如下：
1. 求$A \bot B$  
   $A=a$  
   $A$的投影矩阵$P_a = A(A^TA)^{-1}A^T$  
   $B = b - P_ab$  
2. 单位化  
   $q_a  = A/|A|$  
   $q_b = B/|B|$  

答：$Q = \begin{bmatrix}q_a&q_b\end{bmatrix}$

3. 进阶三维  
   求$C$  
   $C = c - P_ac - P_bc$  
   $q_c = C/|C|$

例：
$a = \begin{bmatrix}1\\1\\1\end{bmatrix}$，$b = \begin{bmatrix}1\\0\\2\end{bmatrix}$

1. $A = a$
2. $B = b - P_ab = b - A(A^TA)^{-1}A^Tb = \begin{bmatrix}1\\0\\2\end{bmatrix} - \begin{bmatrix}1\\1\\1\end{bmatrix}\frac{3}{3} = \begin{bmatrix}0\\-1\\1\end{bmatrix}$
3. $q_a = A/|A| = \begin{bmatrix}1\\1\\1\end{bmatrix}/\sqrt{3}$
4. $q_b = B/|B| = \begin{bmatrix}0\\-1\\1\end{bmatrix}/\sqrt{2}$

$$Q = \begin{bmatrix}q_a&q_b\end{bmatrix} = \begin{bmatrix}\frac{1}{\sqrt{3}} & 0 \\ \frac{1}{\sqrt{3}} & -\frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{3}} & \frac{1}{\sqrt{2}} \end{bmatrix}$$

对于原矩阵$A$，正交化矩阵为$Q$，有：$A = QR$  
* $R$是一个上三角矩阵，可以求出来，不过无所谓了