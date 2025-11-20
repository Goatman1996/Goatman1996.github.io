---
title: 行列式性质及代数余子式
icon: pen-to-square
date: 2025-11-18 00:00:00
isOriginal: true
category:
  - 数学
  - 线性代数
---

<!-- more -->

##  行列式

Determinant

行列式是一个标量，讨论的是方阵，记做$\det A$或$|A|$  

## 基本性质

### 1
$\det I = 1$
### 2
换行后，det符号改变，$\begin{vmatrix}a&b\\c&d\end{vmatrix} = \begin{vmatrix}c&d\\a&b\end{vmatrix}$
### 3
$$\begin{vmatrix}ta&tb\\c&d\end{vmatrix} = t\begin{vmatrix}a&b\\c&d\end{vmatrix}$$
   
$$\begin{vmatrix}a+a'&b+b'\\c&d\end{vmatrix} = \begin{vmatrix}a&b\\c&d\end{vmatrix} + \begin{vmatrix}a'&b'\\c&d\end{vmatrix}$$

## 可推性质

### 4
两行相同，$\det = 0$

根据性质2可得

### 5
消元后，$\det$ 不变

$$
\begin{vmatrix}a&b\\c&d\end{vmatrix}
\begin{CD}@>\large{消元}>>\end{CD}
\begin{vmatrix}a&b\\c-na&d-nb\end{vmatrix}
\begin{CD}@>\large{性质3}>>\end{CD}
\begin{vmatrix}a&b\\c&d\end{vmatrix} + 
\begin{vmatrix}a&b\\-na&-nb\end{vmatrix}
\begin{CD}@>\large{性质3}>>\end{CD}
\begin{vmatrix}a&b\\c&d\end{vmatrix} - n
\begin{vmatrix}a&b\\a&b\end{vmatrix}
\begin{CD}@>\large{性质4}>>\end{CD}
\begin{vmatrix}a&b\\c&d\end{vmatrix}
$$

### 6
如行存在零向量，$\det = 0$

$$
\begin{vmatrix}a&b\\0&0\end{vmatrix}
\begin{CD}@>\large{性质5}>>\end{CD}
\begin{vmatrix}a&b\\0+a&0+b\end{vmatrix}
\begin{CD}@>\large{性质4}>>\end{CD}  0
$$

### 7
上三角矩阵$u$的行列式
$$
\begin{vmatrix}
    d_1 & \cdots & \cdots & \cdots & \cdots \\
    0 & d_2 & \cdots & \cdots & \cdots \\
    0 & 0 & d_3 & \cdots & \cdots \\
    0 & 0 & 0 & \ddots & \vdots \\
    0 & 0 & 0 & 0 & d_n \\
\end{vmatrix} = d_1d_2\cdots d_n
$$

1. （性质5）消元得到对角线矩阵
2. （性质3）$d_1 = 1\times d_1$，提出一个常数$d_1$
3. 累乘

### 8
根据性质7不难看出，若任意$d（主元）= 0$（不满秩），则$\det = 0$

所以：  
$\det A = 0$，A 是奇异矩阵  
$\det A \neq 0$，A 可逆（满秩）

至此得出$\det$的运算方式：
$$
\begin{vmatrix}a&b\\c&d\end{vmatrix} = 
\begin{vmatrix}a&b\\c - \frac{c}{a}a&d - \frac{c}{a}b\end{vmatrix} = 
a (d - \frac{c}{a}b) = ad - bc
$$

### 9
$\det (AB) = (\det A)(\det B)$，证明其实比较长，可以问AI

求：$\det A^{-1}$  
$\because A^{-1}A = I \to \det A^{-1}\det A = 1$   
$\det A^{-1} = \frac{1}{\det A}$

有：
1. $\det A^2 = (\det A)^2$
2. $\det 2A = 2^n\det A$

### 10
$\det A^T = \det A$

转置主元不变

* 同时说明了，和性质6相似的，列存在零向量，$\det = 0$

## n阶行列式

$$\det A = \sum_{i=1}^{n!} \pm a_{1x_1} a_{2x_2} \cdots a_{nx_n}$$

1. 一共有$n!$项
2. 取$x_1,x_2,...,x_n$的排列组合
3. $\pm$号，来自还原为正序的换行次数的奇偶得出结论

* 例 3x3矩阵行列式

1. $a_{11} \times a_{22}a_{33} - a_{11} \times a_{23}a_{32}$ （确定$a_{11}$进行排列组合）(1,2,3) - (1,3,2)
2. $a_{12} \times a_{23}a_{31} - a_{12} \times a_{21}a_{33}$ （确定$a_{12}$进行排列组合）(2,3,1) - (2,1,3)
3. $a_{13} \times a_{21}a_{32} - a_{13} \times a_{22}a_{31}$ （确定$a_{13}$进行排列组合）(3,1,2) - (3,2,1)

4. 将上面的1.2.3.加起来即可

## 代数余子式

Cofactor 合作-因子/系数【直译】

观察n阶行列式可知

1. $a_{11} \times (a_{22}a_{33} - a_{23}a_{32})$ 得到$a_{11} \times$ n-1阶行列式
2. $a_{12} \times (a_{23}a_{31} - a_{21}a_{33})$ 得到$a_{12} \times$ n-1阶行列式
3. $a_{13} \times (a_{21}a_{32} - a_{22}a_{31})$ 得到$a_{13} \times$ n-1阶行列式
4. 将上述1.2.3.相加即可

Cofactor  
1. 可将n阶行列式，分解成n-1阶行列式
2. 每一个步骤都可以看作是，低阶行列式（注意符号）的倍数

### 完整公式
$$\det A_{n} = \sum_{j=1}^n (-1)^{i+j} a_{ij} \det A_{n-1}'$$

另记$(-1)^{i+j} \det A_{n-1}' = C_{ij}$，即：

$$\det A_{n} = \sum_{j=1}^n a_{ij} C_{ij}$$

* $i$可以选取任意行，即按$i$行展开

* $A'$为不包含 $a_{ij}$所在的行列