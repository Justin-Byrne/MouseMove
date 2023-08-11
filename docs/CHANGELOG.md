# Changelog
All notable changes to this project will be documented in this file.

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
  	private `#_isId ( )` method to detect whether the passed `<string>` is a element identifier

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
| 0.1.3   | 2023-08-11 | CURRENT REVISION                                                         | Major refactoring to MoveMouse class, and some general cleanup
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
