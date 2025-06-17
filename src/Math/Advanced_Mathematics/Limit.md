---
title: 极限
icon: pen-to-square
date: 2025-06-16
isOriginal: true
category:
  - 数学
  - 国内高等数学
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

### 数列的发散/收敛

一个数列有极限，则称为收敛数列  
反之，称为发散数列

* 唯一性：$\{ x_n \}$ 收敛，则极限唯一
* 有界性：如果 $\exists M > 0, \forall x_n  \leq M$，则称数列有界
* 保号性：如果$\lim_{n \rightarrow \infty} x_n = a,a>0,\exists N,n>N时,x_n > 0$ (意思一下就好)

## 函数的极限

Limit  of a function

### 定义

与数列类似的

设$f(x)$在$x_0$的 某去心邻域内有意义  
$\exists A(limit\ of \ f(x))$  
$\forall \epsilon > 0,\exists \delta > 0$  
$0<|x-x_0| < \delta,  |f(x) - A| < \epsilon$

$$f(x) = \frac{1}{x},\lim_{x \to 2} \frac{1}{x} = \frac{1}{2}$$ 

* 翻译  
  简单的说，与数列是相似的  
  对于函数而言，是一定存在$\mathring{U}(x_0,\delta)$,使得不等式成立  
  重点在于"去心"，即并不要求$x$取到$x_0$
  
$$规范地书写定义是恼人的$$

### 左/右极限

左极限，从左边逼近
$$\lim_{x \to x_0^-} f(x) = A$$
右极限，从右边逼近
$$\lim_{x \to x_0^+} f(x) = A$$

### 一些性质

有些性质与数列极限相似

* 唯一性：若函数的极限存在，那极限一定唯一
* 局部有界性
* 局部保号性


## 无穷大(量)/无穷小(量)

### 无穷小

设$\lim_{x \rightarrow x_0} f(x) = 0$，称为，当$x\rightarrow x_0$时，$f(x)$无穷小   
* 无穷小：无限趋于0
* 常数0是无穷小
* 无穷小是讲究$x$的变化过程的

定理:  
$$x \rightarrow x_0, \lim_{x \rightarrow x_0} f(x) = A \Longleftrightarrow f(x) + \alpha, \alpha \rightarrow 0$$

注意，无穷小时讲究$x$的变化过程的，所以上述定理的$\alpha$也是在$x \rightarrow x_0$时无穷小

### 无穷大

无穷大$\infty$ 分为两种：正无穷大$+\infty$和负无穷大$-\infty$，统称为无穷大



同样讲究$x$的变化过程

* 如果$f(x)$，当$x \rightarrow x_0$时，无穷大，如
$$\lim_{x \rightarrow 0} \frac{1}{x} = \infty$$

则极限不存在  
不管是正无穷大还是负无穷大都属于极限不存在，如  
$$\lim_{x \rightarrow 0^-} \frac{1}{x} = -\infty$$
$$\lim_{x \rightarrow 0^+} \frac{1}{x} = +\infty$$

上面两种情况，属于极限不存在

* 极限是一个常数的情况才称为极限存在

### 定理

* 无穷大的倒数 = 无穷小
$$\lim_{x \rightarrow x_0}f(x) = \infty \Longrightarrow \lim_{x \rightarrow x_0} \frac{1}{f(x)} = 0$$

* 无穷小的倒数 = 无穷大
$$\lim_{x \rightarrow x_0}f(x) = 0 \Longrightarrow \lim_{x \rightarrow x_0} \frac{1}{f(x)} = \infty,(f(x) \neq 0)$$
注：关于为什么要限制$f(x) \neq 0$，因为$f(x) = 0$在任意的$x$变化中，都是无穷小量，需要排除$\frac{1}{0}$的情况

* 一些无穷量的运算  
  $\infty + \infty = Unknown$  
  $\infty - \infty = Unknown$  
  $\infty \times \infty = \infty$  
  $\infty / \infty = Unknown$  

  $(+\infty) + (+\infty) = +\infty$  
  $(+\infty) - (+\infty) = Unknown$  
  $(+\infty) \times (+\infty) = +\infty$  
  $(+\infty) / (+\infty) = Unknown$

  $(-\infty) + (-\infty) = -\infty$  
  $(-\infty) - (-\infty) = Unknown$  
  $(-\infty) \times (-\infty) = +\infty$  
  $(-\infty) / (-\infty) = Unknown$

  先设定$x \rightarrow x_0$时,$\alpha, \beta$ 均为无穷小量  
  $\alpha + \beta = 0$(趋于零)    
  $\alpha - \beta = 0$  
  $\alpha \times \beta = 0$  
  $\alpha / \beta = (不一定)$

## 极限的运算

1. 有限个，无穷小的和是无穷小  
   无限个，不一定
   $$\lim_{n \to \infty}\underbrace{(\frac{1}{n}+\frac{1}{n} + \frac{1}{n} + ... + \frac{1}{n})}_{n} = 1$$  
2. 有界函数与无穷小的的乘积是无穷小
   $$\lim_{x \to 0}x\sin\frac{1}{x} = 0$$
3. $\alpha \to 0,k\alpha \to 0$
4. 有限个，无穷小相乘是无穷小  
   无限个，不一定

5. 设$\lim f(x) = A, \lim g(x) = B$
   $$\lim (f(x) \pm g(x)) = \lim f(x) \pm \lim g(x)$$
   $$\lim (f(x) \cdot g(x)) = \lim f(x) \cdot \lim g(x)$$
   $$\lim \frac{f(x)}{g(x)} = \frac{\lim f(x)}{\lim g(x)},B  \neq 0$$
   $$要求两个极限都存在的情况才可以，无穷大等于极限不存在$$
6. $\lim cf(x) = c \lim f(x)$ c为常数，与3.同理
7. 若$\lim f(x)$存在，则$\lim [f(x)]^n = [\lim f(x)]^n$
<!-- 8. 有数列$x_n$和$y_n$，$$ -->