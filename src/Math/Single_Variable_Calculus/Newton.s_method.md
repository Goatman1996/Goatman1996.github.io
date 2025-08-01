---
title: 牛顿迭代法
icon: pen-to-square
date: 2025-07-03 00:00:00
isOriginal: true
category:
  - 数学
  - 单变量微积分
---

<!-- more -->

## 推论

有函数$f(x)$，求$f(x) = 0$的解

1.取$x_0$，有$f(x_0)$处的切线与$x$轴的交点为$x_1$  
满足以下式子:  
$\frac{f(x_0)}{(x_0 - x_1)} = f'(x_0)$  
$x_1 = x_0 - \frac{f(x_0)}{f'(x_0)}$  
2.重复第一条，迭代若干次，值就会很快收敛到$f(x) = 0$的解
     
### 牛顿迭代法，公式

$x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$  

### 实例

求$\sqrt{2}$，设$f(x) = x^2 - 2$  
$x_{n+1} = x_n - \frac{x_n^2 - 2}{2x_n}$  
$x_{n+1} = \frac{1}{2}x_n + \frac{1}{x_n}$ 
取$x_0 = 2$进行迭代  
$x_1 = 1+\frac{1}{2} = \frac{3}{2} = 1.5$  
$x_2 = \frac{3}{4} + \frac{2}{3} = \frac{17}{12} = 1.4166666666666667$  
$x_3 = \frac{17}{24} + \frac{12}{17} = \frac{577}{408} = 1.41421568627$

很快就能算出$\sqrt{2}$了

## 中值定理

Mean Value Theorem - MVT

$$\frac{f(b) - f(a)}{b - a} = f'(c)$$
$$f(b) = f(a) + f'(c)(b-a)$$ 
$$c \in (a,b),f(x) \text{ is continuous on } [a,b],f'(x) \text{ is differentiable on } [a,b]$$