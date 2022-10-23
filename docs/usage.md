---
title: 'Usage'
description: 'Everything you need to know to get started using your USB Nova.'
sidebar_position: 15
---

## Basics

Using the USB Nova couldn't be easier! Simply connect it and edit your script on the drive.
You don't need to compile it or anything like that.

1. Enable setup mode by using the switch on the side
<img src='/img/setup.png' width='200px' alt='USB Nova Setup Mode' />

2. Connect USB Nova to your Computer
<img src='/img/pluggedin.jpg' width='300px' alt='USB Nova plugged into Laptop' />

3. Edit `main.script` on the drive using a text editor
<img src='/img/drive.jpg' alt='USB Nova plugged into Laptop' />

4. To run your script enable attack mode
<img src='/img/attack.png' width='200px' alt='USB Nova Setup Mode' />

## Change Keyboard Layout

:::info
You can find a list of available layouts in [scripting/functions](scripting/functions.md#available-keyboard-layouts).
:::

There are two simple ways to set the correct keyboard layout.
* Use locale command at the beginning of your script. For example, `LOCALE DE` uses the German keyboard layout.
* Or change it in the preferences.json file by editing the line `"default_layout": "US",` to whatever layout you'd like.

![](/img/keyboard_layout.jpg)

## Hello World Script Example
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

## Prevent Keyboard Setup Assistant on macOS

![Screenshot of Keyboard Setup Assistant on macOS](/img/assistant.jpg)

The keyboard setup assistant can break your attack flow. To prevent that, you have to make the BadUSB appear as an Apple keyboard.

:::tip
You can change the IDs to anything you want. Websites like devicehuhnt.com have a database that you can search for registered USB devices.
:::

This is how you make the USB Nova appear as a *Apple Aluminium Keyboard with ISO layout*:

1. Connect your USB Nova in setup mode
2. Open `preferences.json` in a text editor
3. Change line `"hid_vid": "16D0",` to `"hid_vid": "05AC",`
4. Change line `"hid_pid": "11A4",` to `"hid_pid": "0250",`
5. Don't forget to save your changes

Next time you plugin your USB Nova, it will use these IDs, and the target computer will think its an Apple Keyboard.

## Modes and Colors
The switch position **before plug-in** determines the mode:

<img src='/img/modes.png' width='400px' alt='USB Nova Modes' />

:::note
Change the switch position to attack **while it's plugged in** to run the main script (again).
:::

| Color | Explanation |
| ----- | ------------ |
| 🔴 Red | Running attack |
| 🟢 Green | Attack finished |
| 🔵 Blue | Setup mode |
