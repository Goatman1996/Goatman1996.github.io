---
title: 不定积分
icon: pen-to-square
date: 2025-07-07 00:00:00
isOriginal: true
category:
  - 数学
  - 单变量微积分
---

<!-- more -->

Anti_Derivative反导数  

又称  

Indefinite Integral 不定积分

## 定义

有 $y=f(x),\frac{dy}{dx} = f'(x),dy = f'(x)dx$，则
$$y = \int f'(x)dx$$  

称 $y 是 f'(x) 的反导数$  
或 $y 是 f'(x) 的不定积分$  

即求导数的原函数 


* 积分符号 $\int$

又因为常数的导数是0，所以求反导数时，需要加上常数C，这也是被成为"不定"积分的原因


## 举例

### Example of sin

$$\int \sin x dx = -\cos x + C$$

### Example of Power

$$\int x^a dx = \frac{1}{a+1}x^{a+1} + C,(a \neq -1)$$

### Example of Power a = -1

$$\int \frac{1}{x} dx = \int x^{-1} dx = \ln x + C$$

### Example of Substitution

换元法


$$\int x^3(x^4 + 2)^5 dx$$
$$let \ u = x^4 + 2, du = 4x^3dx $$
$$\int u^5\frac{1}{4}du  = \frac{1}{24}u^6 + C$$
$$\int x^3(x^4 + 2)^5 dx = \frac{1}{24}(x^4 + 2)^6 + C$$

## 积分

求积分比求导要难上许多许多，以至于大多数时候其实是求不出来的  
上面的换元法，算是一种经过编排过后的题目，所以感觉如此的"巧合"  
事实上,如果题目变成$\int x^2(x^4 + 2)^5 dx$，结果就会变得非常难解（目前这个题目不是不能解）