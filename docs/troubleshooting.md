---
title: 'Troubleshooting'
description: 'Troubleshooting guide for the USB Nova.'
sidebar_position: 75
---

If your USB Nova doesn't work as expected, you can try the following steps to fix it. 

## Delete Files

The Nova drive that appears when you plug in the USB Nova in setup mode hosts the main script and the preferences file. 
If these files are corrupted, the USB Nova might not work as expected.  
To fix this, you can delete them. (Back them up first if you want to keep them)  
When you plug in the USB Nova again, it will create a new main script and preferences file.

## Format Drive

If deleting the files doesn't help, you can completely format the drive.  
This will delete all files on the drive, so back them up if you want to keep them.  
Open the `preferences.json` with a text editor and add `"format": "Nova"` to the file: 
```
{
  "format": "Nova",
  ...
}
```
When you plug in the USB Nova again, it will format the drive and create a new main script and preferences file.

:::tip
You can also rename the drive to a custom name, for example: `"format": "MyCustomName",`.
:::

## Reflash Firmware

If nothing else helps, you can reflash the firmware.  
Firmware updates don't overwrite the main script or the preferences file, so you don't have to worry about losing your data.  
For instructions on how to update the firmware, check out the update guides:
* [Firmware Update](/docs/update)
* [Firmware Update MKII (USB-C)](/docs/update).