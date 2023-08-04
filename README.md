# MouseMove

![issues](https://img.shields.io/github/issues/Justin-Byrne/MouseMove)
![forks](https://img.shields.io/github/forks/Justin-Byrne/MouseMove)
![stars](https://img.shields.io/github/stars/Justin-Byrne/MouseMove)
![license](https://img.shields.io/github/license/Justin-Byrne/MouseMove)
<img src=https://img.shields.io/badge/Mousetrap-1.6.0-yellow />
<img src=https://img.shields.io/badge/Version-0.1.0-green />

JavaScript automated mouse cursor for web presentation

- [Requirements](#requirements)
- [Installation](#installation)
  - [Mousetrap](#Mousetrap)
  - [MouseMove](#MouseMove)
- [Usage](#usage)
- [Support](#support)
- [Structure](#structure)

## Requirements

| Program | Function | Optional | Download |
| :---: | :--- | :---: | :---: |
| Mousetrap | Enable Hotkeys | :white_check_mark: | [:floppy_disk:](https://craig.is/killing/mice) |

## Installation

Migrate to your desired download location, and download this repository to your system using git clone:

```sh
git clone https://github.com/Justin-Byrne/MouseMove.git
```

### Mousetrap

> Copy the folder and contents of `<mouse-move-path>/script/libs` to `<your-project-path>/script/libs`

:link: Link `mousetrap-<version>.js` library to your project

```html
<script src="script/libs/mousetrap-<version>.js"></script>
```

### MouseMove

> Copy script `<mouse-move-path>/script/mousemove-<version>.js` to `<your-project-path>/script/mousemove-<version>.js`

:link: Link `mousemove-<version>.js` library to your project, to load after *mousetrap* library; see above !

```html
<script src="script/mousemove-<version>.js"></script>
```

## Usage

After `mousetrap-<version>.js` and `mousemove-<version>.js` are available in your project, create an `<array>` of DOM identifiers to push into ***MouseMove***.

```javascript
let pattern = [ 'node-0', 'node-1', 'node-2' ... ]
```

Then initiate ***MouseMove*** by passing your array into the `initMouseMove ( array )` function.

```javascript
let pattern = [ 'node-0', 'node-1', 'node-2' ... ]

initMouseMove ( pattern );
```


## Support

Please [open an issue](https://github.com/Justin-Byrne/MouseMove/issues/new) for support.

## Structure

```
.
├── LICENSE
├── README.md
├── build
│   ├── compile.sh
│   └── watch.sh
├── docs
│   ├── API.md
│   ├── CHANGELOG.md
│   └── FUNDING.yml
└── script
    ├── libs
    │   └── mousetrap-v1.6.5.js
    ├── mousemove-v0.1.0.js
    └── source
        └── classes
            ├── MouseMove.js
            ├── Object
            │   └── Cursor.js
            └── Subject
                ├── List.js
                ├── Pattern.js
                └── Point.js
```
 
## Copyright

![Byrne-Systems](https://github.com/Justin-Byrne/MouseMove/blob/main/images/cube_sm.png)

== Byrne-Systems © 2023 - All rights reserved. ==
