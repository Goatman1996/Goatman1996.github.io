---
title: 数列的极限
icon: pen-to-square
date: 2025-06-11
isOriginal: true
category:
  - 数学
  - 高等数学
---

<!-- more -->

## 数列

Sequence of number

数列就是一系列的数

### 写法/通项/一般项 举例

数列是n的一个函数，默认n从1开始

数列：$\{x_n\} = x_1,x_2,x_3,x_4,...,x_n,...$

数列：$\{n\} = 1,2,3,4,...,n,...$ *(通项/一般项：n)  


## 数列的极限

Limit of a sequence

### 定义

$$\{ x_n \},\exists a, \forall \epsilon > 0,\exists N$$
$$|x_n - a| < \epsilon,(n > N)$$

* 翻译  
对于数列$\{ x_n \}$，存在$a$(数列的极限)  
取任意$\epsilon > 0$(尽量取小),都存在一个正整数$N$，使得当$n > N$时，$|x_n - a| < \epsilon$

则称$\{ x_n \} 的极限是a$，记为
$$\lim_{n \to \infty} x_n = a$$

### 举例  
数列$\{\frac{1}{n}\}$，当$n \rightarrow \infty$时，$\frac{1}{n} \rightarrow  0$，$0$称为该数列的极限

记为

$$\lim_{n \to \infty} \frac{1}{n} = 0$$

证明：  
$$\forall \epsilon > 0, \exists N = [\frac{1}{\epsilon}]+1([]为向下取整), 使 n > N 时, 有|\frac{1}{n} - 0| < \epsilon$$
过程：  
$|\frac{1}{n} - 0| < \epsilon$  
$\frac{1}{n} < \epsilon$  
$n > \frac{1}{\epsilon}$  
$\therefore N = [\frac{1}{\epsilon}]+1$

* 基本逻辑是，去证明定义中的不等式，并找出合理的N  
  即，只要找到任意一个N，使得不等式成立，即可

## 数列的发散/收敛

一个数列有极限，则称为收敛数列  
反之，称为发散数列

### 性质

* 唯一性：$\{ x_n \}$ 收敛，则极限唯一
* 有界性：如果 $\exists M > 0, \forall x_n  \leq M$，则称数列有界
* 保号性：如果$\lim_{n \rightarrow \infty} x_n = a,a>0,\exists N,n>N时,x_n > 0$ (意思一下就好)