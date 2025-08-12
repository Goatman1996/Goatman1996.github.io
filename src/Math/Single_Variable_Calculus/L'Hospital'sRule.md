---
title: 洛必达法则
icon: pen-to-square
date: 2025-08-12 02:00:00
isOriginal: true
category:
  - 数学
  - 单变量微积分
---

<!-- more -->

L'Hôpital's Rule

L'Hospital's Rule

## 推导于定义

Indeterminate Form 不定式, 例如：$\frac{0}{0}$, $\frac{\pm \infty}{\pm \infty}$
 

求极限:  
$\lim_{x \to a} \frac{f(x)}{g(x)} , (f(a) = g(a) = 0)$  

$\lim_{x \to a} \frac{f(x)/(x - a)}{g(x)/(x - a)}$

$\lim_{x \to a} \frac{f(x) - f(a)}{x-a} / \lim_{x \to a} \frac{g(x) - g(a)}{x-a}$

$\lim_{x \to a} \frac{f'(x)}{g'(x)} , (g'(x) \not = 0)$    

结论:
$$\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}$$
* $f(a) = g(a) = 0 ,or, \pm \infty$
* 右边极限必须存在 或 等于$\pm \infty$


## 例 1

$\lim_{x \to 0} \frac{\cos x - 1}{x^2},(\frac{0}{0},可洛)$  
$= \lim_{x \to 0} \frac{-\sin x}{2x}, (\frac{0}{0}，可洛)$  
$= \lim_{x \to 0} \frac{-\cos x}{2} = -\frac{1}{2}$

## 例 2

$\lim_{x \to 0^+} x\ln x,(0*-\infty，不可洛)$  
$= \lim_{x \to 0^+} \frac{\ln x}{1/x},(\frac{-\infty}{\infty}，可洛)$  
$= \lim_{x \to 0^+} \frac{1/x}{-1/x^2}$  
$= \lim_{x \to 0^+} -x = 0$

这意味着 $x \to 0$ 比 $\ln x \to -\infty$ 快

## 例 3

$\lim_{x \to \infty} xe^{-px},(p > 0),(\infty*0，不可洛)$  

$= \lim_{x \to \infty} \frac{x}{e^{px}},(\frac{\infty}{\infty},可洛)$  

$= \lim_{x \to \infty} \frac{1}{pe^{px}} = 0$

这意味着 $x \to \infty$ 比 $e^{px} \to \infty$ 慢

## 例 4

$\lim_{x \to 0} x^x,(0^0，不可洛)$  
$= \lim_{x \to 0} e^{x\ln x}$  
$\because例2$  
$\therefore = \lim_{x \to 0} e^0 = 1$  
