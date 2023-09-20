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
  - [Implicit](#implicit)
  - [Explicit](#explicit)
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

### Implicit

Implicit control only requires you indicate which DOM element(s) you wish ***MouseMove*** to transition to.

Each element can be expressed by either an element `identifier`, `CSS Selector`, or `XPath`:

```javascript
let _list =
[
    'node',                              // Elemental Identifier
    'body > ul > li:nth-child(1)',       // CSS Selector
    '//input[@id = "fakebox-input"]'     // XPath
]
```

<details>

<summary><b>Note:</b> attribute declarations for <code>id</code></summary>

>- `id` : `<string>` :eight_spoked_asterisk: `required`
>   - `<string>`
>     - Element.`Identifier`
>     - `CSS Selector`
>     - `XPath`

</details>

<br>

After creating an `<array>` of DOM identifiers, you can push it into `initMouseMove ( )` to implement your list.

```javascript
let _list =
[
    'ui-node-1',
    'ui-node-2',
    'ui-node-3',
    // etc ...
]

initMouseMove ( _list );                 // Instantiate the MouseMove class

mouseMove.go ( );                        // Initiates animation(s)
```

<b>Note:</b> ***MouseMove*** defaults to transitioning to each identifier supplied, then initiating a default `click` event.

### Explicit

Explicit control allows users to indicate a set of actions; for each DOM element supplied.

The `id` attribute behaves the same as the implicit list ( above ), however, subsequent `action` and `bind` attributes allow users to layer more actions and mouse events.

#### Action

The `action` attribute sets a ( final ) action for each DOM element; expressed within an `id` attribute.

Each one of these `<object>` events follows this primitive structure:

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
>     - `CSS Selector`
>     - `XPath`
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

This example will transition to each `id`, while initiating a single `action`; once that transition is complete.

```javascript
let _pattern =
[
    {  id: 'node-0',  action: 'click'      }, 	// Initiates a single 'onclick' event
    {  id: 'node-1',  action: 'mouseover'  }, 	// Initiates a single 'onmouseover' event
    {  id: 'node-2',  action: 'mouseout'   } 	// Initiates a single 'onmouseout' event
]

initMouseMove ( _pattern );    // Instantiate the MouseMove class

mouseMove.go ( );              // Initiates animation(s)
```

#### Bind

The `bind` attribute allows users to bind user-defined anonymous functions to each element expressed within an `id` attribute.

You can expand upon the previous `<object>` event structure, like so:

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
>     - `CSS Selector`
>     - `XPath`
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

This example will transition to each `id`, initiating code enclosed within each `bind` attribute ( if present ), then finalizing with the `action` attribute ( if present ).

```javascript
let _pattern =
[   // Each pattern is valid !
    {  id: 'node-0',  action: 'click'                                    },
    {  id: 'node-1',  bind: ( ) => {  /* code ... */  },                 },
    {  id: 'node-2',  bind: ( ) => {  /* code ... */  }, action: 'click' }
]

initMouseMove ( _pattern );         // Instantiate the MouseMove class

mouseMove.go ( );                   // Initiates animation(s)
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
