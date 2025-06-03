---
title: 函数
icon: pen-to-square
date: 2025-06-04
isOriginal: true
category:
  - 数学
  - 高等数学
---

<!-- more -->

## 定义

数集$D \subset R$  
函数$f:D \rightarrow R$ 是数集$D$到数集$R$的映射  
且要求是单射，即一个x 唯一对应 一个y  
$y = f(x) , x \in D$  
$x$ ：自变量，$y$ ：因变量  
$D_f$ ：定义域 D for domain，函数唯一时可简称$D$  
$R_f$ ：值域 R for range
$$R_f = \{y \mid y = f(x),x \in D \}$$

### 要素
- $D_f$ 定义域
- $f$   对应法则

### 特别的例子

常数函数
$$y = 2,D = (-\infty,+\infty),R_f = \{2\}$$

绝对值函数
$$y = |x|,D = (-\infty,+\infty),R_f = [0,+\infty)$$

符号函数
$$y = sgnx,D = (-\infty,+\infty),R_f = {-1,0,1}$$

取整函数(向下取整$x$)
$$y = [x],D = (-\infty,+\infty),R_f = \Bbb Z(全体整数)$$

## 有界性

讨论有界性需要限定区间

### 上界

假设  
$f(x)$定义域$D$，$X \in D$，$\exists K_1$，$\forall x \in X, f(x) \leq K_1$  
则称$K_1$为$f(x)$的上界$

若函数有上界，则上界不唯一  


### 下界

与上面一样  
若函数有下界，则下界不唯一  


### 有界

假设有  
$\exists M > 0$，$|f(x)| \leq M$  
则称$f(x)$有界  

例如
$f(x) = sinx,|sinx| \leq 1,-1 \leq f(x) \leq 1$，$f(x)$有界  

如果函数有界，则$M$不唯一

### 无界性

$\forall M > 0$，$\exists x_1 \in D, |f(x_1)| > M$

任意一个$M$，都有$x_1 \in D$存在，使得$|f(x_1)| > M$，则称$f(x)$无界  

### 界的总结
有上界，无下界，则函数无界
无上界，有下界，也函数无界

有上界，有下界，是有界的充要条件


## 单调性

讨论单调性需要限定区间  
函数单调性，即函数单调递增或单调递减

### 举例
$f(x) = x^2,f(x)$  
$x \in (-\infty,0]$时单调递增  
$x \in [0,+\infty)$单调递减  

## 奇偶性

假设$\forall x \in D,f(x) = f(-x)$，则称$f(x)$为偶函数  
偶函数的图像是关于y轴对称的

假设$\forall x \in D,f(-x) = -f(x)$，则称$f(x)$为奇函数  
奇函数的图像是关于原点对称的

## 周期性

假设  
$\exists l > 0$，$\forall x \in D,f(x + l) = f(x)$  
则称$f(x)$为周期函数，周期为$l$

### 举例
$f(x) = sinx,f(x + 2\pi) = f(x)$，则$f(x)$为周期函数，周期为$2\pi$  
$f(x) = cosx,f(x + 2\pi) = f(x)$，则$f(x)$为周期函数，周期为$2\pi$

$f(x) = tanx,f(x + \pi) = f(x)$，则$f(x)$为周期函数，周期为$pi$
$f(x) = cotx,f(x + \pi) = f(x)$，则$f(x)$为周期函数，周期为$pi$

### 特别的例

并非每个周期函数都有最小正周期

如狄利克雷函数
$$
    D(x) =
        \begin{cases}
            1,  & x \in \Bbb Q \\
            0,  & x \in \Bbb R \setminus \Bbb Q \\
        \end{cases}
$$

## 反函数

$f:D \rightarrow f(D)$ 单射*(一个x 唯一对应 一个y)  
$f^{-1}:f(D) \rightarrow D$  

反函数与直接函数是关于$y=x$对称的

## 复合函数

$y=f(g(x))$  
$y = f(u)$ 定义域$D_f$  
$u = g(x)$ 定义域$D_g$  

为了使复合函数有意义  
要求 $g$ 的值域 $R_g$ 是 $f$ 的定义域 $D_f$ 的子集  
即$R_g \subset D_f$

## 特别的性质

对于任意定义域在 对称区间$(-l,l)$上的函数$f(x)$  
存在偶函数$g(x)$和奇函数$h(x)$  
使得$f(x) = g(x) + h(x)$

