---
title: 'Firmware Update MKII (USB-C)'
description: 'How to update your USB Nova firmware to the latest version. A tutorial.'
sidebar_position: 45
---

import Button from '@mui/material/Button';

<Button variant='contained' href='https://github.com/SpacehuhnTech/USBNova/releases'>Download Firmware</Button>

<br />
<br />

**How to update the firmware of your USB Nova:**

1. Put your USB Nova in setup mode using the switch on the side.

![Slide open top cover](/img/firmwaremkii/0.jpg)

2. Remove the Case.

![Slide open top cover](/img/firmwaremkii/1.jpg)

![Slide open top cover](/img/firmwaremkii/2.jpg)

![Remove bottom cover](/img/firmwaremkii/3.jpg)

3. Connect it to your computer.

![Plug in USB Nova to USB port](/img/firmwaremkii/4.jpg)

4. Hold the boot button while pressing the reset button.  
Tthe RPI-RP2 drive should appear on your computer. (If it doesn't, try again)

![](/img/firmwaremkii/5-1.jpg)
![](/img/firmwaremkii/5-2.jpg)
![](/img/firmwaremkii/5-3.jpg)

5. Download the latest .uf2 file from the [release page](https://github.com/SpacehuhnTech/USBNova/releases).

![Download firmware from GitHub](/img/firmwaremkii/6.jpg)

6. Copy the downloaded uf2 file onto RPI-RP2 drive. The Nova will update itself and reconnect.

![Pasting uf2 file onto USB RPI-RP2 drive](/img/firmwaremkii/7.jpg)

:::tip
If you get "operation can’t be completed unexpected error 100093" on macOS, open a terminal and use this command to copy the uf2 file onto the drive:
```
cp USBNova.uf2 /Volumes/RPI-RP2
```
(Make sure to use the correct path to the downloaded uf2 file)
:::

7. Put it back into its case

![Place Nova into bottom cover](/img/firmwaremkii/8.jpg)

![Press Nova into bottom cover](/img/firmwaremkii/8-1.jpg)

![Press top cover onto bottom cover](/img/firmwaremkii/9.jpg)

![Closed USB Nova](/img/firmwaremkii/11.jpg)