---
title: 'Preferences'
description: 'USB Nova Preferences/Settings explained in detail'
sidebar_position: 30
---

## Preferences.json

Plug in your USB Nova in setup mode to edit the `preferences.json` file on the drive.

:::tip
When you edit the JSON file, make sure it stays correctly formatted. Otherwise the USB Nova won't be able to apply your settings. 
You can easily test if your file is valid with online tools like [jsonformatter](https://jsonformatter.org/).
:::

:::info
If you run into problems, delete preferences.json and edit the new file that gets created after plugging the USB Nova back in.
:::

```json
{
  "$schema": "https://raw.githubusercontent.com/SpacehuhnTech/USBNova/main/schema.json",
  "enable_msc": false,
  "enable_led": true,
  "enable_hid": true,
  "hid_vid": "16D0",
  "hid_pid": "11A4",
  "hid_rev": "0100",
  "msc_vid": "SpHuhn",
  "msc_pid": "USB Nova",
  "msc_rev": "1.0",
  "default_layout": "US",
  "default_delay": 5,
  "main_script": "main_script.txt",
  "attack_color": [
    128,
    0,
    0,
    0
  ],
  "setup_color": [
    0,
    0,
    20,
    0
  ],
  "idle_color": [
    0,
    30,
    0,
    0
  ],
  "disable_capslock": true,
  "run_on_indicator": false,
  "initial_delay": 1000
}
```

## Settings Explained

:::info
Restart is required to apply changes!
Some features only work on Windows (*). 
:::

| Setting | Default Value | Explanation |
| ------- | ------------- | ----------- |
| enable_msc | false | Enable USB mass storage (USB drive) in attack mode |
| enable_led | true | Enable RGB LED |
| enable_hid | true | Enable HID in setup mode |
| hid_vid | 16D0 | USB Keyboard Vendor ID |
| hid_pid | 11A4 | USB Keyboard Product ID |
| hid_rev | 0100 | USB Keyboard Product Revision |
| msc_vid | SpHuhn | USB Mass Storage Vendor ID |
| msc_pid | USB Nova | USB Mass Storage Product ID |
| msc_rev | 1.0 | USB Mass Storage Product Revision |
| default_layout | US | Default Keyboard Layout ([see all available layouts](scripting/functions.md#available-keyboard-layouts)) |
| default_delay | 5 | Default delay between each line |
| main_script | main_script.txt | Name of your BadUSB script |
| attack_color | [128,0,0,0] | LED color for attack mode |
| setup_color | [0,0,20,0] | LED color for setup mode |
| idle_color | [0,30,0,0] | LED color for finished attack |
| disable_capslock | true | (*) Turn off capslock before starting attack |
| run_on_indicator | false | (*) Start script when the user presses capslock, numlock, or another indicator key |
| initial_delay | 1000 | Startup delay |

:::note
Colors are defined like this: `[Red, Green, Blue, Blink-Interval]`. The color values go from 0 to 255. The blink interval is in milliseconds, and 0 means it's not blinking.
:::
