# Changelog
All notable changes to this project will be documented in this file.

## [0.1.10] - 2023-09-11
### Added
- `Cursor` class
  - private `getRangeValuesPoint ( )` to get the center point of the value of a range element
  - private `getValueFromStandardDeviation ( )` to get the standard deviation range value

### Changed
- `Cursor` class, refactored `distance ( )` and `angle ( )` setters, and `nextElement ( )` public function, to take into account range input devices

## [0.1.9] - 2023-09-07
### Changed
- `Cursor` class, refactored and finalized public `createSelectOptions ( )` to recreate a select input element and mirror its inputs

## [0.1.8] - 2023-09-06
### Added
- `Text` class; for text automation
- `Pattern` class
  - public `indexOfId ( )` to return the index of the passed id; within the pattern array
  - public `insert ( )` to insert an object at the index provided
- `Cursor` class, public `createSelectOptions ( )` to create and mirrors a select input element; from the DOM
- `MouseMove` class
  - private `isXPathOrCssSelector ( )` to check whether an id is an XPath or CSS Selector
  - private `getXPath ( )` to return an XPath for the passed element
  - private `getElementByXPathOrSelector ( )` to return an element based on its XPath or CSS Selector
  - nested  `_writeText ( )` to invoke `Text.write ( )` method

### Changed
- `Cursor` class, added `this.#config.cache.position` to `nextElement ( )` and `toNextElement ( )`, to cache the position of the next element; for a more precise position transition
- `MouseMove` class
  - modified `addGeneratedId` to incorporate special inputs; such as `<select>` elements
  - modified nested `_action ( )` method to include text objects

## [0.1.7] - 2023-08-25
### Changed
- minor refactoring and cleanup of `Cursor` and `MouseMove` classes

## [0.1.6] - 2023-08-24
### Added
- `Cursor` class
  - added `os` selector ( i.e: mac, win, linux ) to `#config.presentation.settings.os`
  - added 20 different mac cursors, under `#config.presentation.mac`

### Changed
- `Cursor` class
  - modified `#config.presentation` to include various different cursor types for different platforms
  - moved all CSS settings, for cursor's, to `#config.presentation.settings.css`
  - private `getCenterPoint ( )` and `createCursor ( )` method to include x & y offset; available in `#config.presentation.settings.css.offset`

## [0.1.5] - 2023-08-21
### Added
- public `switchType ( )` method, within the `Cursor` class, to switch the cursor's visual type
- `MouseMove` class
  - `ease` object, within `#config.animation` which contains all easing functions
  - private `getEasing` method which returns an easing function based on the input type

### Changed
- Refactored `_go ( )`, within the `MouseMove` class, to properly utilize easing functions, and mouse events

### Removed
- private `toggleType ( )` method within `#tools` inside of the `Cursor` class

## [0.1.4] - 2023-08-15
### Added
- `Cursor` class
  - `inversion` type, to `#config.presentation`
  - private `toggleType ( )` method to toggle the cursor's visual type
- `MouseMove` class, added `symbols` object, in `#config.identifiers`

### Changed
- `List` class, minor refactoring
- `Pattern` class, modified `Pattern` object to contain a third attribute: 'bind'
- `MouseMove` class, modified private `addGeneratedId ( )` method was refactored
- `Cursor` class
  - `#config.actions` to `#config.cache`
  - private `getCenterPoint ( )` method to use `getBoundingClientRect ( )` instead of primitive `client...` attributes
  - private `mouseAction ( )` method was refactored

## [0.1.3] - 2023-08-11
### Added
- `MouseMove` class
  - `identifiers` object within `#config` to hold various generative and cross-reference data for identification
  - private `seedMouseEvents ( )` to pre-seed mouse events and identifiers for elements without a proper id; i.e., CSS Selector or XPath
  - private `addGeneretedId ( )` to add a generated id for the element passed
  - private `isId ( )` to check whether the passed id is an element identifier
  - private `isCssSelector ( )` to check whether the passed id is a CSS query selector
  - private `isXpath ( )` to check whether the passed id is an XPath
  - private `getElementByXPath ( )` to return an element based on its XPath
  - private `getElement ( )` to return an HTML DOM element based off of its identifier or xpath
  - private `cleanScriptCode ( )` to clean a script of its function wrapper

### Changed
- All classes private variables prefix has been changed to `#` instead of `#_`
- Migrated all internal private helper functions into a `#tools` object, for `Cursor` and `MouseMove` classes
- Refactored private `embedMousetrap ( )` within the `MouseMove` class

### Removed
- `Cursor` class
  - private `isXpath ( )`
  - private `isCssSelector ( )`
  - private `isId ( )`
  - private `getElement ( )`
  - private `getElementByXPath ( )`

## [0.1.2] - 2023-08-08
### Added
- `Cursor` class
  - types `<array>` within `#_config.actions` for mouse action types
  - private `#_isXpath ( )` method to detect whether the passed `<string>` is an XPath
  - private `#_isCssSelector ( )` method to detect whether the passed `<string>` is a CSS query selector
  - private `#_isId ( )` method to detect whether the passed `<string>` is a element identifier

### Changed
- `Cursor` class
  - `rollover ( )` to `mouseover ( )` and `rollout ( )` to `mouseout ( )` respectively
  - `#_mouseActions ( )` to `#_mouseAction ( )`
  - refactored `#_mouseAction ( )`
- Mouse actions can now accept a `function`, rather than a static mouse event

## [0.1.1] - 2023-08-07
### Added
- `Cursor` class
  - private `#_getElement ( )` returns an HTML DOM element based off of its identifier or xpath
  - private `#_getCenterPoint ( )` returns a `Point` containing the X & Y coordinates of the passed element

### Changed
- `Cursor` class
  - private `#_toNumber ( )` to `#_pxToNumber ( )`

## [0.1.0] - 2023-08-04
### Added
- `Point` class for x & y coordinate systems
- `List` class, a List container ( `Array` ) with special developer functions
- `Pattern` class, a Pattern container ( `Array.<object>` ) with special developer functions
- `Cursor` class to display & transverse the DOM
- `MouseMove` class, is a wrapper class that handles various pre and post operations
- `CHANGELOG.md`
- `README.md`

---
| Version | Date       | Commit                                                                   | Comments                                                          |
| :-----: | :--------: | :----------------------------------------------------------------------: | :---------------------------------------------------------------- |
| 0.1.10  | 2023-09-11 | CURRENT REVISION                                                         | Further refinements to the Cursor class, for range input elements
| 0.1.9   | 2023-09-07 | [63eee86](https://github.com/Justin-Byrne/MouseMove/commit/63eee86)      | Finalized public createSelectOptions ( ) to recreate a select element while mirroring its inputs; for the Cursor class
| 0.1.8   | 2023-09-06 | [826267b](https://github.com/Justin-Byrne/MouseMove/commit/826267b)      | Added Text class, with minor additions to Pattern, Cursor, and MouseMove classes
| 0.1.7   | 2023-08-25 | [5c625d7](https://github.com/Justin-Byrne/MouseMove/commit/5c625d7)      | Minor refactoring and cleanup of Cursor and MouseMove classes
| 0.1.6   | 2023-08-24 | [59aa038](https://github.com/Justin-Byrne/MouseMove/commit/59aa038)      | Refactored Cursor class's cursor type settings while including more cursor types
| 0.1.5   | 2023-08-21 | [cc6d871](https://github.com/Justin-Byrne/MouseMove/commit/cc6d871)      | Minor refactoring to MouseMove class for the inclusion of easing functions and mouse events
| 0.1.4   | 2023-08-15 | [7f31f7f](https://github.com/Justin-Byrne/MouseMove/commit/7f31f7f)      | Minor revisions to Cursor, Pattern, and MoveMouse class
| 0.1.3   | 2023-08-11 | [d29ab19](https://github.com/Justin-Byrne/MouseMove/commit/d29ab19)      | Major refactoring to MoveMouse class, and some general cleanup
| 0.1.2   | 2023-08-08 | [20a213f](https://github.com/Justin-Byrne/MouseMove/commit/20a213f)      | Minor revisions to Cursor class, and general refactoring
| 0.1.1   | 2023-08-07 | [529b2f1](https://github.com/Justin-Byrne/MouseMove/commit/529b2f1) 	    | Minor revisions to Cursor class
| 0.1.0   | 2023-08-04 | [6de06c4](https://github.com/Justin-Byrne/MouseMove/commit/6de06c4) 	    | Initial upload

---

## Types of changes
- `Added` for new features.
- `Changed` for changes in existing functionality.
- `Deprecated` for soon-to-be removed features.
- `Removed` for now removed features.
- `Fixed` for any bug fixes.
- `Security` in case of vulnerabilities.

## Copyright

![Byrne-Systems](http://byrne-systems.com/content/static/cube_sm.png)

==Byrne-Systems © 2023 - All rights reserved.==
