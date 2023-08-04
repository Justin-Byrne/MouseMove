## Classes

<dl>
<dt><a href="#List">List</a></dt>
<dd><p>{Object} List 								List object</p>
</dd>
<dt><a href="#Pattern">Pattern</a></dt>
<dd><p>{Object} Pattern 							Pattern object</p>
</dd>
<dt><a href="#Point">Point</a></dt>
<dd><p>{Object}  Point                             X &amp; Y coordinates for an object</p>
</dd>
<dt><a href="#Cursor">Cursor</a></dt>
<dd><p>{Object} Cursor 							Cursor object</p>
</dd>
<dt><a href="#MouseMove">MouseMove</a></dt>
<dd><p>{Object}       MouseMove 					MouseMove utilization class</p>
</dd>
</dl>

<a name="List"></a>

## List
{Object} List 								List object

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
{Object} Pattern 							Pattern object

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
        * [.current](#Pattern+current) ⇒ <code>object</code>
        * [.currentId](#Pattern+currentId) ⇒ <code>string</code>
        * [.currentAction](#Pattern+currentAction) ⇒ <code>string</code>
        * [.next()](#Pattern+next) ⇒ <code>string</code>
        * [.prev()](#Pattern+prev) ⇒ <code>string</code>
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

### pattern.current ⇒ <code>object</code>
Get current value

**Kind**: instance property of [<code>Pattern</code>](#Pattern)  
**Returns**: <code>object</code> - Current data value  
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
{Object} Cursor 							Cursor object

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| position | [<code>Point</code>](#Point) | X & Y axis coordinates |
| id | <code>string</code> | Cursor's DOM identifier |
| type | <code>string</code> | Type of cursor, within #_cursors |
| config | <code>Object</code> | Cursor configuration |


* [Cursor](#Cursor)
    * [new Cursor(position, id, type)](#new_Cursor_new)
    * _instance_
        * [.id](#Cursor+id)
        * [.id](#Cursor+id) ⇒ <code>string</code>
        * [.type](#Cursor+type)
        * [.type](#Cursor+type)
        * [.position](#Cursor+position)
        * [.position](#Cursor+position) ⇒ [<code>Point</code>](#Point)
        * [.angle](#Cursor+angle)
        * [.angle](#Cursor+angle) ⇒ <code>number</code>
        * [.distance](#Cursor+distance)
        * [.distance](#Cursor+distance) ⇒ <code>number</code>
        * [.nextElement(id)](#Cursor+nextElement)
        * [.toNextElement(id)](#Cursor+toNextElement)
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
**Returns**: <code>number</code> - Angle property  
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

<a name="MouseMove"></a>

## MouseMove
{Object}       MouseMove 					MouseMove utilization class

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| sequence | [<code>Pattern</code>](#Pattern) \| [<code>List</code>](#List) | Pattern or List object |
| cursor | [<code>Cursor</code>](#Cursor) | Cursor object |
| animation | <code>string</code> | Cursor linear animation |
| config | <code>Object</code> | General configuration |


* [MouseMove](#MouseMove)
    * [new MouseMove(sequence, cursor)](#new_MouseMove_new)
    * [.cursor](#MouseMove+cursor)
    * [.cursor](#MouseMove+cursor) ⇒ [<code>Cursor</code>](#Cursor)
    * [.sequence](#MouseMove+sequence)
    * [.sequence](#MouseMove+sequence) ⇒ <code>Array</code>
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
<a name="MouseMove+animation"></a>

### mouseMove.animation
Set animation property

**Kind**: instance property of [<code>MouseMove</code>](#MouseMove)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Animation type within #_config.animations |

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

