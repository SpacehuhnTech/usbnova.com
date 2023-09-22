---
title: 'Compile Firmware'
description: 'How to compile the USB Nova firmware with Arduino.'
sidebar_position: 77
---

:::info
I highly recommend using the precompiled firmware by following the "Firmware Update" guides. This page is only for advanced users who want to compile the firmware themselves, for example, to modify it. 
:::

1. Download and install the [Arduino IDE](https://www.arduino.cc/en/software)

2. Download the [USB Nova firmware](https://github.com/spacehuhnTech/usbnova) from GitHub. (If you [downloaded ZIP](https://github.com/SpacehuhnTech/USBNova/archive/refs/heads/main.zip), extract the entire folder and rename it from `USBNova-main` to `USBNova`)

3. Open `USBNova-main/usbnova.ino` with the Arduino IDE 

4. Go to `Tools > Manage Libraries` and install the following libraries:
    * [SimpleCLI](https://github.com/spacehuhnTech/simplecli)
    * [Adafruit Neopixel](https://github.com/adafruit/Adafruit_NeoPixel)
    * [Adafruit SPIFlash](https://github.com/adafruit/Adafruit_SPIFlash)
    * [ArduinoJson](https://arduinojson.org/)

5. Edit `config.h` to match your hardware

6. Under `Tools > Board` select your board. For RP2040 boards, like the Raspberry Pi Pico, you must first install [Arduino-Pico](https://arduino-pico.readthedocs.io/en/latest/install.html). For SAMD boards, you must first install the [Adafruit SAMD Boards](https://learn.adafruit.com/add-boards-arduino-v164/setup).

7. Under `Tools > USB Stack` select `TinyUSB`

8. Under `Tools > Port` select your board's port. If you don't see a port, make sure your board is connected to your computer

9. Click Compile or Upload 

To add USB Nova to the boards' list, you have to edit the `boards.txt` file of the Adafruit SAMD Boards. You can find it under this or a similar path `C:\Users\<username>\AppData\Local\Arduino15\packages\adafruit\hardware\samd\1.8.11\boards.txt`. 
You need to add [these lines to the file](https://github.com/SpacehuhnTech/USBNova/blob/main/boards.txt). 

The USB Nova mkII is compiled as generic rp2040 with 16MB flash. 

I made a simple compile script using [Arduino-CLI](https://arduino.github.io/arduino-cli/) to help me compile the firmware for all boards. You can find it [here](https://github.com/SpacehuhnTech/USBNova/blob/main/compile.sh). 