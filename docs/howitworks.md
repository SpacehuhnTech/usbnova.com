---
title: 'How it works'
description: "A BadUSB can hack a computer in a matter of seconds, but how is that even possible? Let's explore this fascinating topic."
sidebar_position: 15
---

## What is a BadUSB

![USB Nova plugged into a laptop](/img/pluggedin.jpg)

On the outside, a BadUSB is often indistinguishable from a regular flash drive or USB cable. But on the inside is a chip programmed to act as a USB keyboard, so it can open a terminal and run commands to hijack the computer in a matter of seconds. 

BadUSBs work because they abuse our expectations and trust towards USB cables and flash drives. But they are also using the computer's trust in USB keyboards. 

Keyboard input is trusted because it comes from humans, and humans have full access to the computer. The problem is that the computer doesn't know if the keystrokes it receives come from an actual human or just another computer.

## Keystroke Injection Attack

![Keystroke Injection Attack Visualized](/img/injection.jpg)

BadUSBs are programmed to perform keystroke injection attacks by sending a sequence of keystrokes to the computer. The computer, however, thinks a human typed those and will handle them as such, even though the BadUSB injects them at incredible speeds (over 9000 characters per second).

Depending on the keystroke sequence sent, a BadUSB can install malware or exfiltrate private data. It can do almost everything you can do on your computer right now.

## Limitations

![Fence](/img/limits.jpg)

While BadUSBs can be very scary, they are not all-powerful. 

They always require physical access to the target device (and their USB ports). For example, someone needs to have access to your computer to plug in a malicious USB device. Or the attacker has to make you plug it in for them. **This is why you should never just plug in an unknown USB device!**

In most cases, it is also required that the target computer is already running and unlocked. That's because most BadUSBs are 'dumb' and just blindly send keystrokes according to their programming. So they can not detect if they are stuck in a password prompt. **This is why you should always lock your computer!**

## How the USB Nova works

![USB Nova PCB](/img/pcb.jpg)

The USB Nova hardware is based on the Adafruit QT Py. Its SAMD21 microcontroller is programmed using Arduino to act as a keyboard and interpret your BadUSB scripts.
I added the mode selector switch, USB-A plug, RGB LED, and case to make it easier and more fun to use.
It may not disguise itself as a regular USB drive, but it looks much cooler!
I try to make cyber security more approachable. My goal with the USB Nova is to offer a middle ground between cheap DIY solutions and expensive professional tools.

## BadUSB Course

![BadUSB Course Cover](/img/course.png)

If this sparked your interest in BadUSBs and you want to know more, I got you covered! Visit [learnbadusb.com](https://learnbadusb.com) to get access to my online course about BadUSBs!

It teaches you everything you have to know about BadUSBs - including how to build one yourself! It's beginner-friendly and a great way to get started with ethical hacking.

:::note
This page is based on a Blog post I've written. You can check it out here: https://blog.spacehuhn.com/how-bad-usbs-work
:::