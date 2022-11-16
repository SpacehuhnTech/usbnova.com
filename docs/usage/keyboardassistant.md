---
title: 'Prevent Keyboard Setup Assistant'
description: 'How to prevent the Keyboard Setup Assistant on macOS.'
sidebar_position: 40
---

![Screenshot of Keyboard Setup Assistant on macOS](/img/usage/assistant.jpg)

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