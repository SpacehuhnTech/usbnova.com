---
title: 'Hello World Script Example'
description: 'A simple example to get you started with BadUSB script.'
sidebar_position: 30
---

Here's a simple example to get you started. It opens notepad and types out "Hello World!".
It uses the US keyboard layout and is made for Windows.

```
# Hello World for Windows
LOCALE US
DEFAULT_DELAY 200
GUI r
STRING notepad
ENTER
STRING Hello World!
```