---
title: 三角函数积分
icon: pen-to-square
date: 2025-07-29 00:00:00
isOriginal: true
category:
  - 数学
  - 单变量微积分
---

<!-- more -->

## 前情回顾
* 三角函数
$$\sec \theta = \frac{1}{\cos \theta}$$
$$\csc \theta = \frac{1}{\sin \theta}$$
$$\tan \theta = \frac{\sin \theta}{\cos \theta}$$
$$\cot \theta = \frac{\cos \theta}{\sin \theta}$$

* 勾股定理（三角恒等式）
$$\sin^2\theta + \cos^2\theta = 1$$
$$\tan^2\theta + 1 = \sec^2\theta$$

* 倍角公式
$$\sin (2 \theta) = 2\sin\theta\cos\theta$$
$$\cos (2 \theta) = \cos^2\theta - \sin^2\theta$$

* 半角公式（可通过上面的推出来）
$$\sin \frac{\theta}{2} = \sqrt{\frac{1 - \cos\theta}{2}}$$
$$\cos \frac{\theta}{2} = \sqrt{\frac{1 + \cos\theta}{2}}$$

* 三角函数的微分
$$\sin' x = \cos x$$
$$\cos' x = -\sin x$$
$$\tan' x = \sec^2 x$$
$$\sec' x = \sec x \tan x$$

## 更复杂的三角形微积分
$\int \sin^mx \cos^nx dx(m,n为非负整数)$

* 使用倍角公式/半角公式，将积分式转换成唯一sin或cos形式

### 三角替换

当涉及到圆形$a^2 = x^2 + y^2$时，可以使用三角替换将积分转换成正弦或余弦进行积分

| 原式 | 替换 | 结果 |
| :---: | :---: | :---: |
| $\sqrt{a^2 - x^2}$ | $x = a\cos \theta$<br>$x = a\sin \theta$ | $a\sin \theta$<br>$a\cos \theta$ |
| $\sqrt{a^2 + x^2}$ | $x = a\tan \theta$ | $a\sec \theta$ |
| $\sqrt{x^2 - a^2}$ | $x = a\sec \theta$ | $a\tan \theta$ |

### 例子
例子书写起来太麻烦了，就写一个最简单的好了  
解$\int \sqrt{1 - x^2}dx$  

注释：三角替换

令$\theta = \arcsin x$  

$x = \sin \theta$  

$dx = \cos \theta d\theta$  

$\sqrt{1 - x^2} = \sqrt{1 - \sin^2 \theta} = \sqrt{\cos^2 \theta} = \cos \theta$ 

有$\int \sqrt{1 - x^2}dx = \int \cos^2 \theta d\theta$  

$= \int\frac{1+\cos (2\theta)}{2} d\theta = \frac{1}{2}\int 1 + \cos (2\theta) d\theta$  

$= \frac{1}{2}(\theta + \frac{1}{2}\sin (2\theta))$  

注释：逆三角替换

$= \frac{1}{2}(\arcsin x + \frac{1}{2}x\sqrt{1 - x^2})$  

