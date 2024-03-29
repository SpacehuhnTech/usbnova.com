---
title: 'Basics'
description: 'How BadUSB a script looks like.'
sidebar_position: 10
---

:::note
USB Nova's script language is compatible with Ducky Script (1.0). However, some functions and keys were added or expanded.
You can find a great Ducky Script quick reference at [docs.hak5.org](https://docs.hak5.org/hak5-usb-rubber-ducky/ducky-script-quick-reference).
:::

## Basic rules:
* A single space separates the keys
* All keys as part of the same line get pressed and released simultaneously
* To write text, use the `STRING` function
* Upper and lower case matters!

| Example | Explanation |
| ------- | ------------ |
| `WINDOWS R` | Press the Windows key and the R key simultaneously |
| `STRING Hello World` | Write "Hello World" |

## Example Script:

```
REM Hello World Example Script
DEFAULTDELAY 200
DELAY 1000
GUI r
STRING notepad
ENTER
DELAY 1000
STRING Hello World!
```

| Line | Explanation |
| ---- | ------------ |
| `REM This is a comment` | Comment something. |
| `DEFAULTDELAY 200` | Set the default delay between each line to 200 milliseconds. |
| `DELAY 1000` | Wait 1 seconds. |
| `GUI r` | Press the Windows key and the R key simultaneously to open the run window. |
| `STRING notepad` | Type "notepad". |
| `ENTER` | Press enter key to launch the Windows Notepad application. |
| `DELAY 1000` | Wait 1 seconds. |
| `STRING Hello World!` | Type "Hello World!" into the newly opened notepad window. |