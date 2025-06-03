---
title: 光栅化
icon: pen-to-square
date: 2025-05-08
isOriginal: true
category:
  - 图形学
  - Games101
---

<!-- more -->
**Rasterization**

## 视口变换(ViewPort)

这一步要将之前经过MVP变换后的顶点坐标映射到视口空间（View Port Space）

视口空间，定义了$width$和$height$，来表示视口的大小

$$
M_{ViewPort} = 
\begin{bmatrix}
    \frac{width}{2} & 0 & 0 & \frac{width}{2} \\
    0 & \frac{hight}{2} & 0 & \frac{hight}{2} \\
    0 & 0 & 1 & 0 \\
    0 & 0 & 0 & 1
\end{bmatrix}
$$

通过上述的视口变换，即可已将$[-1,1]^2$的定点映射到屏幕$[width, height]$中

## 像素是否在三角形内部判断
需要判断像素点p，在三角形三条边的左边还是右边（使用cross进行判断）

## 深度缓冲(Depth Buffer)和颜色缓冲(Frame Buffer)

在光栅化的过程中，每一帧都需要维护两个缓冲区，即深度缓冲区和颜色缓冲区

当一个像素确定需要被绘制时（逐三角形内部判断），需要先获取当前三角形的深度值，与缓冲区中对应的深度值进行比较（z-test），如果深度值更小（更接近相机）  
则将对应颜色写入颜色缓冲区中，并更新深度缓冲区的值（z-write）。

## 抗锯齿（Anti-Aliasing）
Games101课程中。又称反走样  

### SSAA（Super Sampling Anti-Aliasing）

对一个像素点进行三角形采样时，在该像素点内部进行一个$n*m$的划分（如2x2），分别使用划分后的小像素进行采样  
由此，就需要Depth Buffer和Frame Buffer额外多维护一个$n*m$的缓冲区，用来存储每个小像素点的深度值和颜色值  
最后，当光栅化完成，再将每个像素的所有小像素的颜色求平均，进而得到最终颜色  

简而言之，超分辨率采样

### MSAA（Multi Sampling Anti-Aliasing）

与SSAA类型，都是对每个像素进行一次$n*m$的采样，只是采样后，立刻将多重采样的深度值进行平均，进而进行深度测试  
通过测试则将多重采样的颜色值平均，分别写入深度缓冲和颜色缓冲区

区别在于，MSAA不需要为小像素维护额外的深度和颜色信息

简而言之，多重采样

## 小结

本文是Games101的笔记，课程到这已经讲完了光栅化了，只是尚且有些部分，并没有说清楚，如深度差值（z_interpolated），甚至是颜色差值（color_interpolated）  
在作业中亦有提到，应该会在接下来的课程中提到吧。

感觉没有什么好记的，就这样，加油～
