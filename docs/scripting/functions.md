---
title: 'Functions'
description: 'All available script functions.'
sidebar_position: 20
---

:::caution
Some USB Nova specific features are not documented yet.
:::

| Command | Example | Description |
| ------- | ------- | ----------- |
| `REM` | `REM Hello World!` |Comment |
| `DEFAULTDELAY` or `DEFAULT_DELAY` | `DEFAULTDELAY 200` | Time in ms between every command |
| `DELAY` | `DELAY 1000` | Delay in ms |
| `STRING` | `STRING Hello World!` | Types the following string |
| `REPEAT` or `REPLAY` | `REPEAT 3` | Repeats the last command n times |
| `LOCALE` | `LOCALE DE` | Sets the keyboard layout |
| `KEYCODE` | `KEYCODE 0x02 0x04` | Types a specific key code (modifier, key1[, ..., key6]) in decimal or hexadecimal |
| `LED` | `LED 40 20 10` |Changes the color of the LED in decimal RGB values (0-255) |

## Available Keyboard Layouts

Currently supported keyboard layouts:  
* BE
* BG
* CA-CM
* CA-FR
* CH-DE
* CH-FR
* CZ
* DE
* DK
* EE
* ES-LA
* ES
* FI
* FR
* GB
* GR
* HU
* IE
* IN
* IS
* IT
* LT
* LV
* NL
* NO
* PL
* PT-BR
* PT
* RO
* RU
* SE
* SI
* SK
* TR
* UA
* US
* BE_MAC
* BG_MAC
* CA_FR_MAC
* CH_DE_MAC
* CH_FR_MAC
* CZ_MAC
* DE_MAC
* DK_MAC
* EE_MAC
* ES_MAC
* ES_LA_MAC
* FI_MAC
* FR_MAC
* GB_MAC
* GR_MAC
* HU_MAC
* IN_MAC
* IS_MAC
* IT_MAC
* LT_MAC
* LV_MAC
* NL_MAC
* NO_MAC
* PL_MAC
* PT_MAC
* PT_BR_MAC
* RO_MAC
* RU_MAC
* SE_MAC
* SI_MAC
* SK_MAC
* TR_MAC
* UA_MAC
* US_MAC