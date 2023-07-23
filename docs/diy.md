---
title: 'DIY Tutorial'
description: 'How to build your own USB Nova with a Raspberry Pi Pico or an Adafruit Trinkey.'
sidebar_position: 50
---

![Raspberry Pi Pico and Adafruit Trinkey, modified to run USB Nova](/img/diy/nova-diy.jpg)

Of course, I appreciate it if you purchase a USB Nova from the [Spacehuhn Store](https://spacehuhn.store). But I also understand that not everyone can afford it. So here's how to build your own using a Raspberry Pi Pico or an Adafruit Trinkey.

## Adafruit Trinkey QT2040

The [Adafruit Trinkey QT2040](https://www.adafruit.com/product/5056) is perfect for running the USB Nova firmware. With 8MB of flash memory (7MB via USB), RGB LED, USB-A plug, and a boot button that can be used to run scripts.
No soldering is required! 

### Steps

1. Hold the BOOT button while connecting the Trinkey to your computer.

![Adafruit Trinkey holding boot button](/img/diy/trinkey-1.jpg)

2. The RPI-RP2 drive should appear on your computer. (If it doesn't, try again)

3. Download the latest `USBNova_diy_trinkey_.uf2` file from the [release page](https://github.com/SpacehuhnTech/USBNova/releases)

![Download USBNova firmware for Trinkey](/img/diy/trinkey-2.jpg)

4. Copy the downloaded uf2 file onto RPI-RP2 drive. The Trinkey will update itself and reconnect.

![Copy USBNova firmware onto Trinkey](/img/diy/trinkey-3.jpg)

5. Done! To run a script, press the boot button for 1 second.

### Case (Optional)

![Adafruit Trinkey with Case and Screws](/img/diy/trinkey-case-1.jpg)

I designed a case for the Trinkey that you can 3D print. It's optional, but it looks much better and protects the Trinkey from damage.
* Download files: [Printables](https://www.printables.com/model/533853-adafruit-trinkey-qt2040-case)
* M2.5 4mm screws: [AliExpress Affiliate Link](https://s.click.aliexpress.com/e/_DCui4At)



## Raspberry Pi Pico

The Pico has 2MB of flash memory. 1MB is accessible via USB. There is no RGB LED. You also need a micro USB cable to connect it to your computer.

:::caution
Requires soldering!
:::

### Parts

| Part | Affiliate links |
| ---- | --------------- |
| Raspberry Pi Pico | [Amazon](https://amzn.to/3K5lI2s), [AliExpress](https://s.click.aliexpress.com/e/_DdexXaz) |
| Tactile Push Button | [Amazon](https://amzn.to/3KaEpBT), [AliExpress](https://s.click.aliexpress.com/e/_DdOEsQD) |

![Raspberry Pi Pico and a tactile push button](/img/diy/pico-1.jpg)

### Steps

1. Take the button and solder it between GP16 and GND. 

![Soldering button to Raspberry Pi Pico](/img/diy/pico-2.jpg)

2. You can cut off the legs on the other side. 

![Cutting the legs of the push button](/img/diy/pico-3.jpg)

![Cutted legs of the push button](/img/diy/pico-4.jpg)

![Raspberry Pi Pico with soldered button](/img/diy/pico-5.jpg)

3. Hold the BOOTSEL button while connecting the Raspberry Pi Pico to your computer using a USB cable.  

![Holding boot button on Raspberry Pi Pico](/img/diy/pico-6.jpg)

4. The RPI-RP2 drive should appear on your computer. (If it doesn't, try again)

5. Download the latest `USBNova_diy_pico_.uf2` file from the [release page](https://github.com/SpacehuhnTech/USBNova/releases)

![Download USBNova firmware for Pico](/img/diy/pico-7.jpg)

6. Copy the downloaded uf2 file onto RPI-RP2 drive. The Pico will update itself and reconnect.

![Copy USBNova firmware onto Pico](/img/diy/pico-8.jpg)

7. Done! To run a script, press the button for 1 second.

## Other Boards

The USB Nova firmware runs on any RP2040 board. You just need a button or switch, preferably a Neopixel RGB LED. If you want to use a different board, you have to change the pin number in the firmware. 
Download the [firmware](https://github.com/SpacehuhnTech/USBNova) and edit [`config.h`](https://github.com/SpacehuhnTech/USBNova/blob/main/config.h). 

Please understand that I can't provide support for every board out there. If you want to use a different board than mentioned above, you have to figure it out yourself.