---
title: 初等函数
icon: pen-to-square
date: 2025-06-10
isOriginal: true
category:
  - 数学
  - 高等数学
---

<!-- more -->

## 幂函数

Power Function

$$f(x) = x^M, M  \in \Bbb{R}$$

::: tabs

@tab $f(x) = x$
<iframe src="https://www.desmos.com/calculator/5cdwxe1upp?embed" width="300" height="300" style="border: 1px solid #ccc" frameborder=0></iframe>

@tab $f(x) = x^2$
<iframe src="https://www.desmos.com/calculator/oby9bol78w?embed" width="300" height="300" style="border: 1px solid #ccc" frameborder=0></iframe>

@tab $f(x) = x^3$
<iframe src="https://www.desmos.com/calculator/ma5iuyxj7y?embed" width="300" height="300" style="border: 1px solid #ccc" frameborder=0></iframe>

@tab $f(x) = x^{-1} = \frac{1}{x}$ 
<iframe src="https://www.desmos.com/calculator/iv6jeymp21?embed" width="300" height="300" style="border: 1px solid #ccc" frameborder=0></iframe>

@tab $f(x) = x^{-2} = \frac{1}{x^2}$ 
<iframe src="https://www.desmos.com/calculator/5rdyn2mc5n?embed" width="300" height="300" style="border: 1px solid #ccc" frameborder=0></iframe>

@tab $f(x) = x^\frac{1}{2} = \sqrt{x}$ 
<iframe src="https://www.desmos.com/calculator/lmnvyhxtqv?embed" width="300" height="300" style="border: 1px solid #ccc" frameborder=0></iframe>

@tab $f(x) = x^\frac{1}{3} = \sqrt[3]{x}$ 
<iframe src="https://www.desmos.com/calculator/jgm04pde1i?embed" width="300" height="300" style="border: 1px solid #ccc" frameborder=0></iframe>

:::

## 指数函数

Exponential Function

$$f(x) = a^x, (a > 0, a \not= 1)$$


::: tabs

@tab $f(x) = a^x, 0<a<1$
a = 0.5  
<iframe src="https://www.desmos.com/calculator/sk7rc35j1t?embed" width="300" height="300" style="border: 1px solid #ccc" frameborder=0></iframe>

@tab $f(x) = a^x, a > 1$
a = 2  
<iframe src="https://www.desmos.com/calculator/5i5uftsakf?embed" width="300" height="300" style="border: 1px solid #ccc" frameborder=0></iframe>

@tab $f(x) = e^x$
<iframe src="https://www.desmos.com/calculator/viyh7qnvyi?embed" width="300" height="300" style="border: 1px solid #ccc" frameborder=0></iframe>

$e^1 = e$
:::

### 指数运算  
$a^n \times a^m = a^{n+m}$  

$a^n \div a^m = a^{n-m}$  

$(a^n)^m = a^{nm}$  

$(ab)^n  = a^n b^n$

## 对数函数

Logarithmic Function

$$f(x) = \log_a x, (x > 0, a > 0, a \not= 1)$$

::: tabs

@tab $f(x) = \log_a x, 0<a<1$
a = 0.5  
<iframe src="https://www.desmos.com/calculator/dgjmqmkzjr?embed" width="300" height="300" style="border: 1px solid #ccc" frameborder=0></iframe>

@tab $f(x) = \log_a x, a > 1$
a = 2  
<iframe src="https://www.desmos.com/calculator/l46swd9rie?embed" width="300" height="300" style="border: 1px solid #ccc" frameborder=0></iframe>

@tab $f(x) = \ln x = log_e x$
<iframe src="https://www.desmos.com/calculator/fhvbrjxkla?embed" width="300" height="300" style="border: 1px solid #ccc" frameborder=0></iframe> 

$\ln{e} = 1$  
$\ln{\frac{1}{e}} = \ln{e^{-1}} = -1$ 

:::


### 对数运算
$\log_a(MN) = \log_a M + \log_a N$  

$\log_a\frac{M}{N} = \log_a M - \log_a N$  

$log_aM^n = nlog_a M$  

$\log_{a^n} b^m = \frac{m}{n}log_a b$  

$\log_ab = \frac{\log_c b}{\log_c a}$ （换底公式）  

## 三角函数

Trigonometric Functions

::: tabs

@tab $f(x) = \sin x$
<iframe src="https://www.desmos.com/calculator/yzg0phzp7e?embed" width="300" height="300" style="border: 1px solid #ccc" frameborder=0></iframe>

最小正周期：$2\pi, 0 \backsim 2\pi$

@tab $f(x) = \cos x$
<iframe src="https://www.desmos.com/calculator/crpq3gxxs4?embed" width="300" height="300" style="border: 1px solid #ccc" frameborder=0></iframe>

最小正周期：$2\pi, 0 \backsim 2\pi$

@tab $f(x) = \tan x$
<iframe src="https://www.desmos.com/calculator/ipwbuieoyc?embed" width="300" height="300" style="border: 1px solid #ccc" frameborder=0></iframe> 

最小正周期：$\pi, -\frac{\pi}{2} \backsim \frac{\pi}{2}$

$\tan x = \frac{\sin x}{\cos x}$

@tab $f(x) = \cot x$
<iframe src="https://www.desmos.com/calculator/vo3dulkbah?embed" width="300" height="300" style="border: 1px solid #ccc" frameborder=0></iframe> 

最小正周期：$\pi, 0 \backsim \pi$  
$\cot x = \frac{1}{\tan x} = \frac{\cos x}{\sin x}$

@tab $f(x) = \sec x$
<iframe src="https://www.desmos.com/calculator/yhjcyu6frv?embed" width="300" height="300" style="border: 1px solid #ccc" frameborder=0></iframe>

$\sec x = \frac{1}{\cos x}$

@tab $f(x) = \csc x$
<iframe src="https://www.desmos.com/calculator/utbmwnmvbx?embed" width="300" height="300" style="border: 1px solid #ccc" frameborder=0></iframe>

$\csc x = \frac{1}{\sin x}$

:::

### 特殊角度查询表

|     | $0\degree$ |$30\degree$ | $45\degree$ | $60\degree$ | $90\degree$ |
| --- | :---: | :---: | :---: | :---: | :---: |
|  |  | $\frac{\pi}{6}$ | $\frac{\pi}{4}$ | $\frac{\pi}{3}$ | $\frac{\pi}{2}$ |
| $\sin$ | $0$| $\frac{1}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{3}}{2}$ | $1$ |
| $\cos$ | $1$ | $\frac{\sqrt{3}}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{1}{2}$ | $0$ |
| $\tan$ | $0$ | $\frac{\sqrt{3}}{3}$ | $1$ | $\sqrt{3}$ |  |
| $\cot$ |   | $\sqrt{3}$ | $1$ | $\frac{\sqrt{3}}{3}$ | $1$ |

### 三角函数公式

用到再补充吧

## 反三角函数

Inverse Trigonometric Function

因为，函数必须是单射的，所以反三角函数函数需要限定区间

::: tabs
@tab $f(x) = \arcsin x$
<iframe src="https://www.desmos.com/calculator/aqlrqrhepb?embed" width="300" height="300" style="border: 1px solid #ccc" frameborder=0></iframe>

$f(x) = \sin x,x \in [-\frac{\pi}{2}, \frac{\pi}{2}]$ 的反函数为

$f(x) = \arcsin x,x \in [-1, 1]$  

@tab $f(x) = \arccos x$
<iframe src="https://www.desmos.com/calculator/dozoodejfc?embed" width="300" height="300" style="border: 1px solid #ccc" frameborder=0></iframe>

$f(x) = \cos x, x \in [0, \pi]$ 的反函数为  

$f(x) = \arccos x, x \in [-1, 1]$

@tab $f(x) = \arctan x$
<iframe src="https://www.desmos.com/calculator/vfzkgee6tc?embed" width="300" height="300" style="border: 1px solid #ccc" frameborder=0></iframe>

$f(x) = \tan x, x \in (-\frac{\pi}{2}, \frac{\pi}{2})$ 的反函数为  
$f(x) = \arctan x, x \in (-\infty, \infty), f(x) \in (-\frac{\pi}{2}, \frac{\pi}{2})$

@tab $f(x) = \rm{arccot} x$
<iframe src="https://www.desmos.com/calculator/vjvybhfpxb?embed" width="300" height="300" style="border: 1px solid #ccc" frameborder=0></iframe>

$f(x) = \cot x, x \in (0, \pi)$ 的反函数为  
$f(x) = \rm{arccot} x, x \in (-\infty, \infty), f(x) \in (0, \pi)$
:::