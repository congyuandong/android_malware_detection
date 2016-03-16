# Android Malware Detection

---

## 说明
> Android恶意应用检测演示项目,检测思路是针对Android应用提取出来的各类特征数据(权限,第三发库,四大组件,API序列等)自动匹配最适合的数据挖掘算法,构建混合检测模型.在检测未知应用时根据各模型的检测结果得出最后的判定结果.

## 项目依赖

### 主要依赖

* [Androguard](https://github.com/androguard/androguard)
* [scikit-learn](http://scikit-learn.org)

### 其他依赖

* python 2.7.8
* django 1.8.7
* 包管理工具 bower,django-bower

## Install Guide

* install python and pip tool

* clone code

[Github](git@github.com:congyuandong/android_malware_detection.git)

* install libs and database

```
# in app android_malware_detection
pip install requirements.txt
python manage.py syncdb
```

* copy apps

copy malware and normal apps to path `media/[malware|normal]`

* init permission list

```
python manage.py genpermission
python manage.py scan
```

* 生成检测模型

```
python manage.py model
```

* run

```
python manage.py runserver
```

## 训练集说明

### 恶意应用库

#### android malware genome project

[下载地址](http://www.malgenomeproject.org)

该项目因为一些安全的原因,已经停止完全的开源状态,可以像作者发送邮件索取,具体见官网说明

#### Andruguard(科学上网)

官网可以下载恶意软件的签名数据,提供了部分应用的下载

* [dropbox](https://www.dropbox.com/sh/7ioa4isk86js5ds/AAC3ZRUrEl_ZkyrpDtFXNexRa?dl=0)
* [另一个下载链接](http://contagiominidump.blogspot.com)

我整理出来的恶意应用位于`/media/malware/*`(.gitignore,mail to me),使用了Andruguard的APK校验并根据报名去重

### 非恶意应用库

`media/normal/*`

使用的脚本从360市场cdn下载,每种分类随机抽取

### 检测模型

`media/models`

## 一些资源(科学上网)

[Androguard Docs](http://doc.androguard.re/html/index.html)

## API

> 同步至Django管理命令 python manage.py

### genpermission

> 根据权限说明xml文件生成本地的权限数据表,包含`name`,`level`,`group`三个字段

### scan

> 扫描本地的恶意应用和非恶意应用库,生成训练数据集合

#### 参数

`update`:更新

`replace`:重置

### model

> 生成模型
