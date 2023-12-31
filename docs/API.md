## Classes

<dl>
<dt><a href="#List">List</a></dt>
<dd><p>{Object} List                               List object</p>
</dd>
<dt><a href="#Pattern">Pattern</a></dt>
<dd><p>{Object} Pattern                            Pattern object</p>
</dd>
<dt><a href="#Point">Point</a></dt>
<dd><p>{Object}  Point                             X &amp; Y coordinates for an object</p>
</dd>
<dt><a href="#Cursor">Cursor</a></dt>
<dd><p>{Object} Cursor                             Cursor object</p>
</dd>
<dt><a href="#Text">Text</a></dt>
<dd><p>{Object} Text                               Text object</p>
</dd>
<dt><a href="#MouseMove">MouseMove</a></dt>
<dd><p>{Object}       MouseMove                    MouseMove utilization class</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#pxToNumber">pxToNumber(value)</a> ⇒ <code>number</code></dt>
<dd><p>Converts CSS string value to number/integer</p>
</dd>
<dt><a href="#jsonToCss">jsonToCss(json)</a> ⇒ <code>string</code></dt>
<dd><p>Converts the &#39;css&#39; object into a CSS inline string</p>
</dd>
<dt><a href="#setCursorType">setCursorType(element)</a></dt>
<dd><p>Set&#39;s the cursor type based on passed element&#39;s tag name</p>
</dd>
<dt><a href="#getCenterPoint">getCenterPoint(element)</a> ⇒ <code><a href="#Point">Point</a></code></dt>
<dd><p>Gets the center point of an element</p>
</dd>
<dt><a href="#mouseover">mouseover(element)</a></dt>
<dd><p>Actions executed after a mouseover event</p>
</dd>
<dt><a href="#mouseout">mouseout(element)</a></dt>
<dd><p>Actions executed after a mouseout event</p>
</dd>
<dt><a href="#createCursor">createCursor(id, type)</a></dt>
<dd><p>Create and embeds cursor within DOM</p>
</dd>
<dt><a href="#isXPath">isXPath(id)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks whether the passed id is an XPath</p>
</dd>
<dt><a href="#isCssSelector">isCssSelector(id)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks whether the passed id is a CSS query selector</p>
</dd>
<dt><a href="#isId">isId(id)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks whether the passed id is an element identifier</p>
</dd>
<dt><a href="#isCamelCase">isCamelCase(string)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks whether a string is camel case</p>
</dd>
<dt><a href="#isXPathOrCssSelector">isXPathOrCssSelector(id)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks whether an id is an XPath or CSS Selector</p>
</dd>
<dt><a href="#setUserAgent">setUserAgent()</a></dt>
<dd><p>Identifies and sets the present user agent</p>
</dd>
<dt><a href="#getElementByXPath">getElementByXPath(xpath)</a> ⇒ <code>Object</code></dt>
<dd><p>Returns an element based on its XPath</p>
</dd>
<dt><a href="#getXPath">getXPath(element)</a> ⇒ <code>string</code></dt>
<dd><p>Returns an XPath for the passed element</p>
</dd>
<dt><a href="#getElement">getElement(id)</a> ⇒ <code>Object</code></dt>
<dd><p>Returns a DOM&#39;s element based on its identifier</p>
</dd>
<dt><a href="#getEasing">getEasing(type)</a> ⇒ <code>function</code></dt>
<dd><p>Returns an easing function based on the input type</p>
</dd>
<dt><a href="#getElementByXPathOrSelector">getElementByXPathOrSelector(id)</a> ⇒ <code>Object</code></dt>
<dd><p>Returns an element based on its XPath or CSS Selector</p>
</dd>
<dt><a href="#addGeneratedId">addGeneratedId(id)</a> ⇒ <code>Object</code></dt>
<dd><p>Adds a generated id to the passed element</p>
</dd>
<dt><a href="#cleanScriptCode">cleanScriptCode(script)</a> ⇒ <code>string</code></dt>
<dd><p>Cleans script of it&#39;s function wrapper</p>
</dd>
<dt><a href="#hotkeyListener">hotkeyListener()</a> ⇒ <code>function</code></dt>
<dd><p>Mousetrap hotkey listener for activating MouseMove.go ( )</p>
</dd>
<dt><a href="#embedMousetrap">embedMousetrap()</a></dt>
<dd><p>Embed mousetrap script into DOM</p>
</dd>
<dt><a href="#seedMouseEvents">seedMouseEvents()</a></dt>
<dd><p>Seeds mouse binding mouse events along with unique identifiers</p>
</dd>
</dl>

<a name="List"></a>

## List
{Object} List                               List object

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | Index of list |
| current | <code>string</code> | Current data value of list |
| length | <code>number</code> | Length of list |


* [List](#List)
    * [new List(array)](#new_List_new)
    * _instance_
        * [.index](#List+index)
        * [.index](#List+index) ⇒ <code>number</code>
        * [.current](#List+current)
        * [.current](#List+current) ⇒ <code>string</code>
        * [.currentId](#List+currentId) ⇒ <code>string</code>
        * [.next()](#List+next) ⇒ <code>string</code>
        * [.prev()](#List+prev) ⇒ <code>string</code>
    * _static_
        * [.isList(array)](#List.isList) ⇒ <code>boolean</code>

<a name="new_List_new"></a>

### new List(array)
Creates a list


| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | Array list |

<a name="List+index"></a>

### list.index
Set index property

**Kind**: instance property of [<code>List</code>](#List)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Index value |

<a name="List+index"></a>

### list.index ⇒ <code>number</code>
Get index property

**Kind**: instance property of [<code>List</code>](#List)  
**Returns**: <code>number</code> - Index value  
<a name="List+current"></a>

### list.current
Set current value

**Kind**: instance property of [<code>List</code>](#List)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Current data value |

<a name="List+current"></a>

### list.current ⇒ <code>string</code>
Get current value

**Kind**: instance property of [<code>List</code>](#List)  
**Returns**: <code>string</code> - Current data value  
<a name="List+currentId"></a>

### list.currentId ⇒ <code>string</code>
Get current DOM identifier

**Kind**: instance property of [<code>List</code>](#List)  
**Returns**: <code>string</code> - Current DOM identifier  
<a name="List+next"></a>

### list.next() ⇒ <code>string</code>
Go to next value in list

**Kind**: instance method of [<code>List</code>](#List)  
**Returns**: <code>string</code> - Identifier for DOM  
**Note**: increment after completion  
<a name="List+prev"></a>

### list.prev() ⇒ <code>string</code>
Go to previous value in list

**Kind**: instance method of [<code>List</code>](#List)  
**Returns**: <code>string</code> - Identifier of DOM  
**Note**: increment before completion  
<a name="List.isList"></a>

### List.isList(array) ⇒ <code>boolean</code>
Checks whether the passed value is an instance of List

**Kind**: static method of [<code>List</code>](#List)  
**Returns**: <code>boolean</code> - True | False  

| Param | Type | Description |
| --- | --- | --- |
| array | [<code>List</code>](#List) | List instance |

<a name="Pattern"></a>

## Pattern
{Object} Pattern                            Pattern object

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | Index of list |
| current | <code>string</code> | Current data value of list |
| length | <code>number</code> | Length of list |


* [Pattern](#Pattern)
    * [new Pattern(array)](#new_Pattern_new)
    * _instance_
        * [.index](#Pattern+index)
        * [.index](#Pattern+index) ⇒ <code>number</code>
        * [.current](#Pattern+current)
        * [.current](#Pattern+current) ⇒ <code>Object</code>
        * [.currentId](#Pattern+currentId) ⇒ <code>string</code>
        * [.currentAction](#Pattern+currentAction) ⇒ <code>string</code>
        * [.next()](#Pattern+next) ⇒ <code>string</code>
        * [.prev()](#Pattern+prev) ⇒ <code>string</code>
        * [.indexOfId(id)](#Pattern+indexOfId)
        * [.insert(index, object)](#Pattern+insert)
    * _static_
        * [.isPattern(arrayOfObjects)](#Pattern.isPattern) ⇒ <code>boolean</code>

<a name="new_Pattern_new"></a>

### new Pattern(array)
Creates a list


| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | Array list |

<a name="Pattern+index"></a>

### pattern.index
Set index property

**Kind**: instance property of [<code>Pattern</code>](#Pattern)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Index value |

<a name="Pattern+index"></a>

### pattern.index ⇒ <code>number</code>
Get index property

**Kind**: instance property of [<code>Pattern</code>](#Pattern)  
**Returns**: <code>number</code> - Index value  
<a name="Pattern+current"></a>

### pattern.current
Set current value

**Kind**: instance property of [<code>Pattern</code>](#Pattern)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Current data value |

<a name="Pattern+current"></a>

### pattern.current ⇒ <code>Object</code>
Get current value

**Kind**: instance property of [<code>Pattern</code>](#Pattern)  
**Returns**: <code>Object</code> - Current data value  
<a name="Pattern+currentId"></a>

### pattern.currentId ⇒ <code>string</code>
Get current DOM identifier

**Kind**: instance property of [<code>Pattern</code>](#Pattern)  
**Returns**: <code>string</code> - Current DOM Identifier  
<a name="Pattern+currentAction"></a>

### pattern.currentAction ⇒ <code>string</code>
Get current action

**Kind**: instance property of [<code>Pattern</code>](#Pattern)  
**Returns**: <code>string</code> - Current action  
<a name="Pattern+next"></a>

### pattern.next() ⇒ <code>string</code>
Go to next value in list

**Kind**: instance method of [<code>Pattern</code>](#Pattern)  
**Returns**: <code>string</code> - Identifier for DOM  
**Note**: increment after completion  
<a name="Pattern+prev"></a>

### pattern.prev() ⇒ <code>string</code>
Go to previous value in list

**Kind**: instance method of [<code>Pattern</code>](#Pattern)  
**Returns**: <code>string</code> - Identifier of DOM  
**Note**: increment before completion  
<a name="Pattern+indexOfId"></a>

### pattern.indexOfId(id)
Returns the index of the passed id; within the pattern array

**Kind**: instance method of [<code>Pattern</code>](#Pattern)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Identifier of DOM; XPath, CSS Selector |

<a name="Pattern+insert"></a>

### pattern.insert(index, object)
Inserts an object at the index provided

**Kind**: instance method of [<code>Pattern</code>](#Pattern)  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | Index number to insert into |
| object | <code>Object</code> | Implicitly of explicitly declared object; see README.md |

<a name="Pattern.isPattern"></a>

### Pattern.isPattern(arrayOfObjects) ⇒ <code>boolean</code>
Checks whether the passed value is an instance of Pattern

**Kind**: static method of [<code>Pattern</code>](#Pattern)  
**Returns**: <code>boolean</code> - True | False  

| Param | Type | Description |
| --- | --- | --- |
| arrayOfObjects | [<code>Pattern</code>](#Pattern) | Pattern instance |

<a name="Point"></a>

## Point
{Object}  Point                             X & Y coordinates for an object

**Kind**: global class  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [x] | <code>number</code> | <code>0</code> | X - x-axis coordinate |
| [y] | <code>number</code> | <code>0</code> | Y - y-axis coordinate |


* [Point](#Point)
    * [new Point(x, y)](#new_Point_new)
    * _instance_
        * [.x](#Point+x)
        * [.x](#Point+x) ⇒ <code>number</code>
        * [.y](#Point+y)
        * [.y](#Point+y) ⇒ <code>number</code>
    * _static_
        * [.isPoint(object)](#Point.isPoint) ⇒ <code>boolean</code>

<a name="new_Point_new"></a>

### new Point(x, y)
Create a point


| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | X coordinate value |
| y | <code>number</code> | Y coordinate value |

<a name="Point+x"></a>

### point.x
Set x-axis value

**Kind**: instance property of [<code>Point</code>](#Point)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="Point+x"></a>

### point.x ⇒ <code>number</code>
Get x-axis value

**Kind**: instance property of [<code>Point</code>](#Point)  
**Returns**: <code>number</code> - X coordinate value  
<a name="Point+y"></a>

### point.y
Set the y-axis value

**Kind**: instance property of [<code>Point</code>](#Point)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="Point+y"></a>

### point.y ⇒ <code>number</code>
Get y-axis value

**Kind**: instance property of [<code>Point</code>](#Point)  
**Returns**: <code>number</code> - Y coordinate value  
<a name="Point.isPoint"></a>

### Point.isPoint(object) ⇒ <code>boolean</code>
Checks whether the passed object is an instance of Point

**Kind**: static method of [<code>Point</code>](#Point)  
**Returns**: <code>boolean</code> - True | False  

| Param | Type | Description |
| --- | --- | --- |
| object | [<code>Point</code>](#Point) | Point instance |

<a name="Cursor"></a>

## Cursor
{Object} Cursor                             Cursor object

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| position | [<code>Point</code>](#Point) | X & Y axis coordinates |
| id | <code>string</code> | Cursor's DOM identifier |
| type | <code>string</code> | Type of cursor |
| config | <code>Object</code> | Internal private configuration |
| tools | <code>Object</code> | Internal private utility methods |


* [Cursor](#Cursor)
    * [new Cursor(position, id, type)](#new_Cursor_new)
    * _instance_
        * [.id](#Cursor+id)
        * [.id](#Cursor+id) ⇒ <code>string</code>
        * [.type](#Cursor+type)
        * [.type](#Cursor+type)
        * [.position](#Cursor+position)
        * [.position](#Cursor+position) ⇒ [<code>Point</code>](#Point)
        * [.distance](#Cursor+distance)
        * [.distance](#Cursor+distance) ⇒ <code>number</code>
        * [.angle](#Cursor+angle)
        * [.angle](#Cursor+angle) ⇒ <code>number</code>
        * [.nextElement(id)](#Cursor+nextElement)
        * [.toNextElement(id)](#Cursor+toNextElement)
        * [.mouseAction(element)](#Cursor+mouseAction)
        * [.switchType(type)](#Cursor+switchType)
        * [.createSelectOptions(id, id)](#Cursor+createSelectOptions)
        * [.setInteraction()](#Cursor+setInteraction)
    * _static_
        * [.isCursor(value)](#Cursor.isCursor) ⇒ <code>boolean</code>

<a name="new_Cursor_new"></a>

### new Cursor(position, id, type)
Create a single instance of a Cursor


| Param | Type | Description |
| --- | --- | --- |
| position | <code>string</code> | X & Y axis coordinates |
| id | <code>string</code> | Cursor's DOM identifier |
| type | <code>string</code> | Type of cursor, within #_cursors |

<a name="Cursor+id"></a>

### cursor.id
Set id property

**Kind**: instance property of [<code>Cursor</code>](#Cursor)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Identifier of Cursor |

<a name="Cursor+id"></a>

### cursor.id ⇒ <code>string</code>
Get id property

**Kind**: instance property of [<code>Cursor</code>](#Cursor)  
**Returns**: <code>string</code> - Identifier of Cursor  
<a name="Cursor+type"></a>

### cursor.type
Set type property

**Kind**: instance property of [<code>Cursor</code>](#Cursor)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Type property |

<a name="Cursor+type"></a>

### cursor.type
Get type property

**Kind**: instance property of [<code>Cursor</code>](#Cursor)  

| Param | Type | Description |
| --- | --- | --- |
| Type | <code>string</code> | property |

<a name="Cursor+position"></a>

### cursor.position
Set position property

**Kind**: instance property of [<code>Cursor</code>](#Cursor)  

| Param | Type | Description |
| --- | --- | --- |
| point | [<code>Point</code>](#Point) | X & Y coordinates |

<a name="Cursor+position"></a>

### cursor.position ⇒ [<code>Point</code>](#Point)
Get position property

**Kind**: instance property of [<code>Cursor</code>](#Cursor)  
**Returns**: [<code>Point</code>](#Point) - X & Y coordinates  
<a name="Cursor+distance"></a>

### cursor.distance
Set distance property

**Kind**: instance property of [<code>Cursor</code>](#Cursor)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Identifier of element |

<a name="Cursor+distance"></a>

### cursor.distance ⇒ <code>number</code>
Get distance property

**Kind**: instance property of [<code>Cursor</code>](#Cursor)  
**Returns**: <code>number</code> - Distance from last distance check  
<a name="Cursor+angle"></a>

### cursor.angle
Set angle property

**Kind**: instance property of [<code>Cursor</code>](#Cursor)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Identifier of element |

<a name="Cursor+angle"></a>

### cursor.angle ⇒ <code>number</code>
Get angle property

**Kind**: instance property of [<code>Cursor</code>](#Cursor)  
**Returns**: <code>number</code> - Angle property; in radians  
<a name="Cursor+nextElement"></a>

### cursor.nextElement(id)
Sets the next element

**Kind**: instance method of [<code>Cursor</code>](#Cursor)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Identifier of element within DOM |

<a name="Cursor+toNextElement"></a>

### cursor.toNextElement(id)
Sends cursor to the location of the next element

**Kind**: instance method of [<code>Cursor</code>](#Cursor)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Identifier of element within DOM |

<a name="Cursor+mouseAction"></a>

### cursor.mouseAction(element)
Initiates any mouse actions associated with the passed 'element'

**Kind**: instance method of [<code>Cursor</code>](#Cursor)  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>HTMLElement</code> | HTML DOM element |

<a name="Cursor+switchType"></a>

### cursor.switchType(type)
Switch cursor's visual type

**Kind**: instance method of [<code>Cursor</code>](#Cursor)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| type | <code>string</code> | <code>&quot;pointer&quot;</code> | Cursor type within #config.presentation [ os ].cursors [ type ] |

<a name="Cursor+createSelectOptions"></a>

### cursor.createSelectOptions(id, id)
Creates and mirrors a select input element; from the DOM

**Kind**: instance method of [<code>Cursor</code>](#Cursor)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Identifier of element within DOM |
| id | <code>string</code> | Identifier of element within DOM |

<a name="Cursor+setInteraction"></a>

### cursor.setInteraction()
Set's this cursor's mouse interaction type; with other DOM elements

**Kind**: instance method of [<code>Cursor</code>](#Cursor)  
<a name="Cursor.isCursor"></a>

### Cursor.isCursor(value) ⇒ <code>boolean</code>
Checks whether the passed value is an instance of Cursor

**Kind**: static method of [<code>Cursor</code>](#Cursor)  
**Returns**: <code>boolean</code> - True | False  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Cursor</code>](#Cursor) | Cursor instance |

<a name="Text"></a>

## Text
{Object} Text                               Text object

**Kind**: global class  
<a name="Text.write"></a>

### Text.write(text, id, [timing])
Writes text within an input element

**Kind**: static method of [<code>Text</code>](#Text)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| text | <code>string</code> |  | Text output |
| id | <code>string</code> |  | Input Identifier |
| [timing] | <code>number</code> | <code>120</code> | Timing interval for typing |

<a name="MouseMove"></a>

## MouseMove
{Object}       MouseMove                    MouseMove utilization class

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| sequence | [<code>Pattern</code>](#Pattern) \| [<code>List</code>](#List) | Pattern or List object |
| cursor | [<code>Cursor</code>](#Cursor) | Cursor object |
| animation | <code>string</code> | Cursor linear animation |
| config | <code>Object</code> | Internal private configuration |
| tools | <code>Object</code> | Internal private utility methods |


* [MouseMove](#MouseMove)
    * [new MouseMove(sequence, cursor)](#new_MouseMove_new)
    * [.sequence](#MouseMove+sequence)
    * [.sequence](#MouseMove+sequence) ⇒ <code>Array</code>
    * [.cursor](#MouseMove+cursor)
    * [.cursor](#MouseMove+cursor) ⇒ [<code>Cursor</code>](#Cursor)
    * [.animation](#MouseMove+animation)
    * [.animation](#MouseMove+animation) ⇒ <code>string</code>
    * [.go(duration)](#MouseMove+go)

<a name="new_MouseMove_new"></a>

### new MouseMove(sequence, cursor)
Create a single instance of MouseMove


| Param | Type | Description |
| --- | --- | --- |
| sequence | <code>Array</code> | Pattern or List of DOM identifiers |
| cursor | [<code>Cursor</code>](#Cursor) | Cursor object |

<a name="MouseMove+sequence"></a>

### mouseMove.sequence
Set sequence property

**Kind**: instance property of [<code>MouseMove</code>](#MouseMove)  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | Array object |

<a name="MouseMove+sequence"></a>

### mouseMove.sequence ⇒ <code>Array</code>
Get sequence property

**Kind**: instance property of [<code>MouseMove</code>](#MouseMove)  
**Returns**: <code>Array</code> - List or Pattern instance  
<a name="MouseMove+cursor"></a>

### mouseMove.cursor
Set cursor property

**Kind**: instance property of [<code>MouseMove</code>](#MouseMove)  

| Param | Type | Description |
| --- | --- | --- |
| cursor | [<code>Cursor</code>](#Cursor) | Cursor object |

<a name="MouseMove+cursor"></a>

### mouseMove.cursor ⇒ [<code>Cursor</code>](#Cursor)
Get cursor property

**Kind**: instance property of [<code>MouseMove</code>](#MouseMove)  
**Returns**: [<code>Cursor</code>](#Cursor) - Cursor object  
<a name="MouseMove+animation"></a>

### mouseMove.animation
Set animation property

**Kind**: instance property of [<code>MouseMove</code>](#MouseMove)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Animation type within #config.animations |

<a name="MouseMove+animation"></a>

### mouseMove.animation ⇒ <code>string</code>
Get animation property

**Kind**: instance property of [<code>MouseMove</code>](#MouseMove)  
**Returns**: <code>string</code> - Animation type  
<a name="MouseMove+go"></a>

### mouseMove.go(duration)
Animate cursor

**Kind**: instance method of [<code>MouseMove</code>](#MouseMove)  

| Param | Type | Description |
| --- | --- | --- |
| duration | <code>number</code> | Duration of the animation |

<a name="pxToNumber"></a>

## pxToNumber(value) ⇒ <code>number</code>
Converts CSS string value to number/integer

**Kind**: global function  
**Returns**: <code>number</code> - Number value of parsed value  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | CSS string value in pixels |

<a name="jsonToCss"></a>

## jsonToCss(json) ⇒ <code>string</code>
Converts the 'css' object into a CSS inline string

**Kind**: global function  
**Returns**: <code>string</code> - CSS inline string  

| Param | Type | Description |
| --- | --- | --- |
| json | <code>object</code> | CSS object from #config.presentation.settings.css [ type ] |

<a name="setCursorType"></a>

## setCursorType(element)
Set's the cursor type based on passed element's tag name

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Object</code> | HTML DOM element |

<a name="getCenterPoint"></a>

## getCenterPoint(element) ⇒ [<code>Point</code>](#Point)
Gets the center point of an element

**Kind**: global function  
**Returns**: [<code>Point</code>](#Point) - X & Y Coordinates  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Object</code> | HTML DOM element |

<a name="mouseover"></a>

## mouseover(element)
Actions executed after a mouseover event

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>HTMLElement</code> | HTML DOM element |

<a name="mouseout"></a>

## mouseout(element)
Actions executed after a mouseout event

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>HTMLElement</code> | HTML DOM element |

<a name="createCursor"></a>

## createCursor(id, type)
Create and embeds cursor within DOM

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Identifier of cursor |
| type | <code>string</code> | Cursor type within #config.presentation [ os ].cursors [ type ] |

<a name="isXPath"></a>

## isXPath(id) ⇒ <code>boolean</code>
Checks whether the passed id is an XPath

**Kind**: global function  
**Returns**: <code>boolean</code> - True | False  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | XPath |

<a name="isCssSelector"></a>

## isCssSelector(id) ⇒ <code>boolean</code>
Checks whether the passed id is a CSS query selector

**Kind**: global function  
**Returns**: <code>boolean</code> - True | False  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | CSS query selector |

<a name="isId"></a>

## isId(id) ⇒ <code>boolean</code>
Checks whether the passed id is an element identifier

**Kind**: global function  
**Returns**: <code>boolean</code> - True | False  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Element identifier |

<a name="isCamelCase"></a>

## isCamelCase(string) ⇒ <code>boolean</code>
Checks whether a string is camel case

**Kind**: global function  
**Returns**: <code>boolean</code> - True | False  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | Camel case string |

<a name="isXPathOrCssSelector"></a>

## isXPathOrCssSelector(id) ⇒ <code>boolean</code>
Checks whether an id is an XPath or CSS Selector

**Kind**: global function  
**Returns**: <code>boolean</code> - True | False  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | XPath or CSS Selector |

<a name="setUserAgent"></a>

## setUserAgent()
Identifies and sets the present user agent

**Kind**: global function  
<a name="getElementByXPath"></a>

## getElementByXPath(xpath) ⇒ <code>Object</code>
Returns an element based on its XPath

**Kind**: global function  
**Returns**: <code>Object</code> - HTML DOM element  

| Param | Type | Description |
| --- | --- | --- |
| xpath | <code>string</code> | XPath |

<a name="getXPath"></a>

## getXPath(element) ⇒ <code>string</code>
Returns an XPath for the passed element

**Kind**: global function  
**Returns**: <code>string</code> - XPath  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Object</code> | HTML DOM element |

<a name="getElement"></a>

## getElement(id) ⇒ <code>Object</code>
Returns a DOM's element based on its identifier

**Kind**: global function  
**Returns**: <code>Object</code> - HTML DOM element  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | CSS query, identifier, or XPath |

<a name="getEasing"></a>

## getEasing(type) ⇒ <code>function</code>
Returns an easing function based on the input type

**Kind**: global function  
**Returns**: <code>function</code> - Easing function from #config.animation.ease  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of easing animation, in camel case: i.e.: 'easeInSine' |

<a name="getEasing.._stringToBracketNotation"></a>

### getEasing~\_stringToBracketNotation(string) ⇒ <code>Array</code>
Converts camel case string into an <Array>.<String> for bracket notation

**Kind**: inner method of [<code>getEasing</code>](#getEasing)  
**Returns**: <code>Array</code> - Array of strings  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | Camel case string to split |

<a name="getElementByXPathOrSelector"></a>

## getElementByXPathOrSelector(id) ⇒ <code>Object</code>
Returns an element based on its XPath or CSS Selector

**Kind**: global function  
**Returns**: <code>Object</code> - HTML DOM element  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | XPath or CSS Selector |

<a name="addGeneratedId"></a>

## addGeneratedId(id) ⇒ <code>Object</code>
Adds a generated id to the passed element

**Kind**: global function  
**Returns**: <code>Object</code> - element                            HTML DOM element  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Element identifier |

<a name="cleanScriptCode"></a>

## cleanScriptCode(script) ⇒ <code>string</code>
Cleans script of it's function wrapper

**Kind**: global function  
**Returns**: <code>string</code> - Function as a string  

| Param | Type | Description |
| --- | --- | --- |
| script | <code>function</code> | JavaScript function |

<a name="hotkeyListener"></a>

## hotkeyListener() ⇒ <code>function</code>
Mousetrap hotkey listener for activating MouseMove.go ( )

**Kind**: global function  
**Returns**: <code>function</code> - Mousetrap hotkey listener  
<a name="embedMousetrap"></a>

## embedMousetrap()
Embed mousetrap script into DOM

**Kind**: global function  
<a name="seedMouseEvents"></a>

## seedMouseEvents()
Seeds mouse binding mouse events along with unique identifiers

**Kind**: global function  
