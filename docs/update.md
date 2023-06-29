---
title: 'Firmware Update'
description: 'How to update your USB Nova firmware to the latest version. A tutorial.'
sidebar_position: 40
---

import Button from '@mui/material/Button';

<Button variant='contained' href='https://github.com/SpacehuhnTech/USBNova/releases'>Download Firmware</Button>

<br />
<br />

**How to update the firmware of your USB Nova:**

1. Put your USB Nova in setup mode using the switch on the side.

<img src='/img/usage/setup.png' width='300px' alt='USB Nova Setup Mode' />

2. Remove the Case.

![Slide open top cover](/img/firmware/1.jpg)

![Slide open top cover](/img/firmware/2.jpg)

![Remove bottom cover](/img/firmware/3.jpg)

3. Connect it to your computer.

![Plug in USB Nova to USB port](/img/firmware/4.jpg)

4. Double press the small reset button. The LED should then turn green.

![Pressing reset button on USB Nova](/img/firmware/5.jpg)

For the mkII version (USB-C), you have to hold the boot button while pressing the reset button. Then the RPI-RP2 drive should  appear on your computer. (If it doesn't, try again)

![](/img/firmware/5-1.jpg)
![](/img/firmware/5-2.jpg)
![](/img/firmware/5-3.jpg)

5. Download the latest .uf2 file from the [release page](https://github.com/SpacehuhnTech/USBNova/releases).

![Download firmware from GitHub](/img/firmware/6.jpg)

6. Copy the downloaded uf2 file onto Nova drive. The Nova will update itself and reconnect.

![Pasting uf2 file onto USB Nova drive](/img/firmware/7.jpg)

:::tip
If you get "operation can’t be completed unexpected error 100093" on macOS, open a terminal and use this command to copy the uf2 file onto the drive:
```
cp USBNova.uf2 /Volumes/NOVA
```
(Make sure to use the correct path to the downloaded uf2 file)
:::

7. Put it back into its case

![Press Nova into bottom cover](/img/firmware/8.jpg)

![Press top cover onto bottom cover](/img/firmware/9.jpg)

![Closed USB Nova](/img/firmware/11.jpg)