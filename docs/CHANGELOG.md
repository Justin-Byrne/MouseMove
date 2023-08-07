# Changelog
All notable changes to this project will be documented in this file.

## [0.1.2] - 2023-08-07
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
| Version | Date       | Commit                                                                   | Comments 														  |
| :-----: | :--------: | :----------------------------------------------------------------------: | :---------------------------------------------------------------- |
| 0.1.2   | 2023-08-07 | CURRENT REVISION                                                         | Minor revisions to Cursor class
| 0.1.0   | 2023-08-04 | [6de06c4](https://github.com/Justin-Byrne/MouseMove/commit/6de06c4) 	  | Initial upload

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
