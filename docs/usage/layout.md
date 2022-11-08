---
title: 'Change Keyboard Layout'
description: 'How to change the keyboard layout on the USB Nova.'
sidebar_position: 20
---

## Change Keyboard Layout

:::info
You can find a list of available layouts in [scripting/functions](scripting/functions.md#available-keyboard-layouts).
:::

There are two simple ways to set the correct keyboard layout.
* Use locale command at the beginning of your script. For example, `LOCALE DE` uses the German keyboard layout.
* Or change it in the preferences.json file by editing the line `"default_layout": "US",` to whatever layout you'd like.

![](/img/keyboard_layout.jpg)
