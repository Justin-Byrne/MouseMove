# MouseMove

![issues](https://img.shields.io/github/issues/Justin-Byrne/MouseMove)
![forks](https://img.shields.io/github/forks/Justin-Byrne/MouseMove)
![stars](https://img.shields.io/github/stars/Justin-Byrne/MouseMove)
![license](https://img.shields.io/github/license/Justin-Byrne/MouseMove)
<img src=https://img.shields.io/badge/Mousetrap-1.6.5-yellow />
<img src=https://img.shields.io/badge/Version-0.1.11-green />

JavaScript automated mouse cursor for web presentation

- [Example](#example)
- [Requirements](#requirements)
- [Installation](#installation)
  - [Mousetrap](#mousetrap)
  - [MouseMove](#mousemove)
- [Usage](#usage)
  - [Basic](#basic)
  - [Advanced](#advanced)
- [Api](#api)
- [Support](#support)
- [Structure](#structure)

## Example

![MouseMove](https://github.com/Justin-Byrne/MouseMove/blob/main/images/example.gif)

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
    <meta ... >
    <link ... >

    <script src="script/libs/mousetrap-<version>.js"></script>

</head>
```

### MouseMove

> Copy script `<mouse-move-path>/script/mousemove-<version>.js` to `<your-project-path>/script/mousemove-<version>.js`

:link: Link `mousemove-<version>.js` library to your project, to load after *mousetrap* library; see above !

```html
    <meta ... >
    <link ... >

    <script src="script/libs/mousetrap-<version>.js"></script>
    <script src="script/mousemove-<version>.js"></script>

</head>
```

## Usage

### Basic

Create an `<array>` of DOM identifiers to push into ***MouseMove***.

```javascript
let _list =
[
    'node',                              // Elemental Identifier
    'body > ul > li:nth-child(1)',       // CSS Selector
    '//input[@id = "fakebox-input"]'     // XPath
]

initMouseMove ( _list );                 // Initiate the MouseMove class
```

<details>

<summary><b>Note:</b> attribute declarations for <code>id</code></summary>

>- `id` : `<string>` :eight_spoked_asterisk: `required`
>   - `<string>`
>     - Element.`Identifier`
>     - CSS Selector
>     - XPath

</details>

<br>

...then and push into ***MouseMove***.

***MouseMove*** defaults to navigating towards each identifier ( i.e., in the sequence provided ) and initiates a default `click` event on each element id

### Advanced

#### Implicit

Create an `<array>` of `<objects>`, with the following structure:

```javascript
let _object =
{
    id:     'ui-node',    // <string>
    action: 'click'       // <string> ( ) => actions: [ 'mousedown', 'mouseup', 'mouseover', 'mouseout', 'mousemove', 'click', 'dblclick' ]
}
```

<details>

<summary><b>Note:</b> attribute declarations for <code>id</code> and <code>action</code></summary>

>- `id` : `<string>` :eight_spoked_asterisk: `required`
>   - `<string>`
>     - Element.`Identifier`
>     - CSS Selector
>     - XPath
>- `action` : `<string>` :eight_pointed_black_star: `optional`
>    - `<string>`
>      - `mousedown`
>      - `mouseup`
>      - `mouseover`
>      - `mouseout`
>      - `mousemove`
>      - `click`
>      - `dblclick`

</details>

<br>

...then and push into ***MouseMove***.

```javascript
let _pattern =
[
    {  id: 'node-0',  action: 'click'      }, 	// Initiates a single 'onclick' event
    {  id: 'node-1',  action: 'mouseover'  }, 	// Initiates a single 'onmouseover' event
    {  id: 'node-2',  action: 'mouseout'   } 	// Initiates a single 'onmouseout' event
]

initMouseMove ( _pattern );    // Initiate the MouseMove class
```

#### Explicit

Create an `<array>` of `<objects>`, with the following structure:

```javascript
let _object =
{
    id: 'ui-node',    // [REQUIRED] ... type: <string>
    bind:             // [OPTIONAL] ... type: Object.<string, function>
    {
        onmouseover: ( ) =>
        {
            this.style.color           = 'rgb(0, 1, 1)';
            this.style.backgroundColor = 'rgb(2, 3, 5)';

            this.parentElement.nextElementSibling.style.display = 'block';
        },
        onmouseout: ( ) =>
        {
            // code ...
        }
    },
    action: 'click'   // [OPTIONAL] ... type: <string>
}
```

<details>

<summary><b>Note:</b> attribute declarations for <code>id</code>, <code>bind</code> and <code>action</code></summary>

>- `id` : `<string>` :eight_spoked_asterisk: `required`
>   - `<string>`
>     - Element.`Identifier`
>     - CSS Selector
>     - XPath
> - `bind` : `Object.<string, function>` :eight_pointed_black_star: `optional`
>    - `<string>`
>      - `onmousedown`
>      - `onmouseup`
>      - `onmouseover`
>      - `onmouseout`
>      - `onmousemove`
>      - `onclick`
>      - `ondblclick`
>    - `<function>`
>      - User-defined anonymous function
>- `action` : `<string>`  :eight_pointed_black_star: `optional`
>    - `<string>`
>      - `mousedown`
>      - `mouseup`
>      - `mouseover`
>      - `mouseout`
>      - `mousemove`
>      - `click`
>      - `dblclick`

</details>

<br>

...then and push into ***MouseMove***.

```javascript
let _pattern =
[   // Each pattern is valid !
    {  id: 'node-0',  action: 'click'                                    },
    {  id: 'node-1',  bind: ( ) => {  /* code ... */  },                 },
    {  id: 'node-2',  bind: ( ) => {  /* code ... */  }, action: 'click' }
]

initMouseMove ( _pattern );         // Initiate the MouseMove class
```

> <b>Note:</b> for more information see the `Pattern` class

## Api

[:book: Single Page API Sheet](https://github.com/Justin-Byrne/MouseMove/blob/main/docs/API.md)


## Support

Please [open an issue](https://github.com/Justin-Byrne/MouseMove/issues/new) for support.

## Structure

```
.
├── build
│   ├── audio
│   │   ├── complete.mp3
│   │   ├── failure.mp3
│   │   └── success.mp3
│   ├── compile.sh
│   └── watch.sh
├── docs
│   ├── API.md
│   ├── CHANGELOG.md
│   └── FUNDING.yml
├── script
│   ├── libs
│   │   └── mousetrap-v1.6.5.js
│   ├── source
│   │   └── classes
│   │       ├── Object
│   │       │   ├── Cursor.js
│   │       │   └── Text.js
│   │       ├── Subject
│   │       │   ├── List.js
│   │       │   ├── Pattern.js
│   │       │   └── Point.js
│   │       └── MouseMove.js
│   └── mousemove-v0.1.11.js
├── LICENSE
└── README.md
```
 
## Copyright

![Byrne-Systems](https://github.com/Justin-Byrne/MouseMove/blob/main/images/cube_sm.png)

== Byrne-Systems © 2023 - All rights reserved. ==
