---
title: Shadow
icon: pen-to-square
date: 2025-08-28 00:00:00
isOriginal: true
category:
  - 图形学
  - Games202
---

<!-- more -->



pcss


## Shadow Mapping

阴影贴图

从光源出发，对场景进行一次渲染，只记录深度，生成阴影贴图  
在实际渲染中，根据framgment的世界坐标，经过light_vp转换得到shadow_coord
进而读取阴影贴图，得到阴影值

### 缺陷 Self Occlusion

自遮挡

* 原因

阴影贴图也是有分辨率限制的，而一个分辨率对应去区域，该区域的深度是同一个值，且该区域的深度值是该区域所有物体的深度值中的最小值，若该区域是一个平面，那么这个渲染这个平面时，只有最靠近光的一小部分，被认为是没有阴影的，而剩余部分则都会处于阴影中

* 解决

使用一个Shadow Bias 阴影容差。即在进行阴影的深度测试时，使用一个容差值，来避免自遮挡现象，误差小于bias的部分，不算在阴影中

* 进一步解决

可以发现，当光源完全垂直照射一个平面时，Self Occlusion现象是不存在的，所以对于Shadow Bias 的取值，可以根据光源与平面的夹角进行动态调整，即夹角越小，Bias越大

* 非工业可用的学术级解决方案（题外话）

Second-depth Shadow Mapping

使用最小和次小的深度的中间值来作为阴影判定深度。

在实时渲染中，开销过于大，不会再工业中采用

* 自遮挡问题总结

自遮挡问题，从来都没有一个完美的解决方案，通常的，是找到一个合适Bias和Slop，以做到合适的结果即可

## PCF

Percentage closer filtering 

阴影抗锯齿

就像素点对阴影贴图进行采样时，采7x7的阴影深度并进行平均，多重采样，模糊

## PCSS

Percentage closer soft shadow

基本原理依然是使用PCF对阴影进行多重采样，但是Filter的大小是动态的，根据点与(面)光源所形成的锥体的范围

![PCSS](./Shadow/PCSS.png)

* 此处有点不理解