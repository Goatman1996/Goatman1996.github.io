---
title: 极限与连续
icon: pen-to-square
date: 2025-06-17 01:00:00
isOriginal: true
category:
  - 数学
  - 单变量微积分
---

<!-- more -->

## 极限

极限
$$\lim_{x \to x_0}f(x)$$
左极限
$$\lim_{x \to x_0^-}f(x)$$
右极限
$$\lim_{x \to x_0^+}f(x)$$

求函数极限$\lim_{x \to x_0}f(x)$ 并不要求$f(x_0)$ 存在

## 连续


若
$$\lim_{x \to x_0}f(x) = f(x_0)$$  
则$f(x)$ 于$x_0$ 处连续  

* 存在左极限和右极限，并且左右极限相等  
* 且$f(x_0)$存在

## 连续与求导的关系

* 可导一定连续  
  如果 $f(x)$于$x_0$处可导，则$f(x)$于$x_0$处一定连续  
  证明如下：  
  $\because f'(x_0) = \lim_{x \to x_0} \frac{f(x) - f(x_0)}{x - x_0}$  
  $\therefore \lim_{x \to x_0}[f(x) - f(x_0)] = \lim_{x \to x_0} \frac{f(x) - f(x_0)}{x - x_0} \cdot (x - x_0)$  
  $\therefore \lim_{x \to x_0}[f(x) - f(x_0)] = f'(x_0) \cdot 0$  
  $\therefore \lim_{x \to x_0}[f(x) - f(x_0)] = 0$  
  $\therefore \lim_{x \to x_0}f(x) = f(x_0)$   

* 连续不一定可导  
  证明如下：（反证法）    
  有$f(x) = |x|$  
  $\lim_{x \to 0}f(x) = 0$ (连续)  
  $\lim_{x \to 0^+}f'(x) = 1$ (右导数)  
  $\lim_{x \to 0^-}f'(x) = -1$ (左导数)  
  $左导数 \neq 右导数$  
  