---
title: 'Usage'
description: 'How to use USB Nova'
sidebar_position: 15
---

## Basics

1. Enable setup mode by using the switch on the side
<img src='/img/setup.png' width='200px' alt='USB Nova Setup Mode' />

2. Connect USB Nova to your Computer
<img src='/img/pluggedin.jpg' width='300px' alt='USB Nova plugged into Laptop' />

2. Edit `main.script` on the drive using a text editor
<img src='/img/drive.jpg' alt='USB Nova plugged into Laptop' />

3. Run your script by enabling attack mode
<img src='/img/attack.png' width='200px' alt='USB Nova Setup Mode' />

## Hello World Script Example
```
# Hello World for Windows
DEFAULTDELAY 500
GUI r
STRING notepad
ENTER
STRING Hello World!
```

## Modes and Colors

| Color | Explanation |
| ----- | ------------ |
| 🔴 Red | Running attack |
| 🟢 Green | Attack finished |
| 🔵 Blue | Setup mode |

The switch position **before plug-in** determines the mode:

<img src='/img/modes.png' width='400px' alt='USB Nova Modes' />

:::info
Change the switch position to attack **while it's plugged in** to run the main script (again).
:::