// @program: 		Mouse Move 
// @brief: 			Automated mouse cursor for web presentation 
// @author: 		Justin D. Byrne 
// @email: 			justin@byrne-systems.com 
// @version: 		0.1.6 
// @license: 		GPL-2.0

"use strict";
 
/**
 * @class           {Object} List                               List object
 * @property        {number} index                              Index of list
 * @property        {string} current                            Current data value of list
 * @property        {number} length                             Length of list
 */
class List extends Array
{
    _index   = 0;
    _current = undefined;

    #length = undefined;

    /**
     * Creates a list
     * @param           {Array} array                               Array list
     */
    constructor ( array )
    {
        super ( );

        ////    SORT ARRAY    //////////////////////////////

        if ( List.isList ( array ) )
        {
            for ( let element of array ) this.push ( element );


            this.#length = this.length - 1;
        }

        this.current = this [ this.index ];
    }

    ////    [ INDEX ]    ///////////////////////////////////

        /**
         * Set index property
         * @param           {number} value                              Index value
         */
        set index ( value )
        {
            this._index = Number.isInteger ( value ) ? this [ value ] : this._index;
        }

        /**
         * Get index property
         * @return          {number}                                    Index value
         */
        get index ( )
        {
            return this._index;
        }

    ////    [ CURRENT ]    /////////////////////////////////

        /**
         * Set current value
         * @param           {string} value                              Current data value
         */
        set current ( value )
        {
            this._current = this.includes ( value ) ? value : this._current;
        }

        /**
         * Get current value
         * @return          {string}                                    Current data value
         */
        get current ( )
        {
            return this._current;
        }

    ////    & EXTEND &    //////////////////////////////////

        /**
         * Get current DOM identifier
         * @return          {string}                                    Current DOM identifier
         */
        get currentId ( )
        {
            return this._current;
        }

    ////    UTILITIES    ///////////////////////////////////

        /**
         * Checks whether the passed value is an instance of List
         * @param           {List} array                                List instance
         * @return          {boolean}                                   True | False
         */
        static isList ( array )
        {
            ////    FUNCTIONS    ///////////////////////////

            function _isArrayOfStrings ( array )
            {
                for ( let _element of array )

                    if ( typeof _element != 'string' )

                        return false;


                return true;
            }

            ////    LOGIC    ///////////////////////////////

            let _List        = ( array instanceof List );

            let _Array       = Array.isArray ( array );

            let _1_Dim       = ( array.every ( entry => ! Array.isArray ( entry ) ) ) ? true : false;

            let _stringArray = _isArrayOfStrings ( array );


            return ( _List || _Array && _1_Dim && _stringArray );
        }

        /**
         * Go to next value in list
         * @note            increment after completion
         * @return          {string}                                    Identifier for DOM
         */
        next ( )
        {
            if ( this._index > this.#length )
            {
                this._index = this.#length;

                return false;
            }
            else

                return this.current = this [ this._index++ ];
        }

        /**
         * Go to previous value in list
         * @note            increment before completion
         * @return          {string}                                    Identifier of DOM
         */
        prev ( )
        {
            return ( this._index == 0 ) ? false : this.current = this [ --this._index ];
        }
}
 
/**
 * @class           {Object} Pattern                            Pattern object
 * @property        {number} index                              Index of list
 * @property        {string} current                            Current data value of list
 * @property        {number} length                             Length of list
 */
class Pattern extends Array
{
    _index   = 0;
    _current = undefined;

    #length = undefined;

    /**
     * Creates a list
     * @param           {Array} array                               Array list
     */
    constructor ( array )
    {
        super ( );

        ////    SORT ARRAY    //////////////////////////////

        if ( Pattern.isPattern ( array ) )
        {
            for ( let element of array ) this.push ( element );


            this.#length = this.length - 1;
        }

        this.current = this [ this.index ];
    }

    ////    [ INDEX ]    ///////////////////////////////////

        /**
         * Set index property
         * @param           {number} value                              Index value
         */
        set index ( value )
        {
            this._index = Number.isInteger ( value ) ? this [ value ] : this._index;
        }

        /**
         * Get index property
         * @return          {number}                                    Index value
         */
        get index ( )
        {
            return this._index;
        }

    ////    [ CURRENT ]    /////////////////////////////////

        /**
         * Set current value
         * @param           {string} value                              Current data value
         */
        set current ( value )
        {
            this._current = this.includes ( value ) ? value : this._current;
        }

        /**
         * Get current value
         * @return          {Object}                                    Current data value
         */
        get current ( )
        {
            return this._current;
        }

    ////    & EXTEND &    //////////////////////////////////

        /**
         * Get current DOM identifier
         * @return          {string}                                    Current DOM Identifier
         */
        get currentId ( )
        {
            return this._current.id;
        }

        /**
         * Get current action
         * @return          {string}                                    Current action
         */
        get currentAction ( )
        {
            return this._current.action;
        }

    ////    UTILITIES    ///////////////////////////////////

        /**
         * Checks whether the passed value is an instance of Pattern
         * @param           {Pattern} arrayOfObjects                    Pattern instance
         * @return          {boolean}                                   True | False
         */
        static isPattern ( arrayOfObjects )
        {
            if ( arrayOfObjects instanceof Pattern ) return true;            // Short-circuit if an instance of Pattern


            if ( Array.isArray ( arrayOfObjects ) )

                for ( let _object of arrayOfObjects )
                {
                    let _results = undefined;


                    if ( typeof _object == 'object')
                    {
                        let _keys   = ( Object.keys ( _object ).length <= 3 );

                        let _id     = ( _object.hasOwnProperty ( 'id'     ) ) ? ( typeof _object.id     === 'string' ) : false

                        let _action = ( _object.hasOwnProperty ( 'action' ) ) ? ( typeof _object.action === 'string' ) : false;

                        let _bind   = ( _object.hasOwnProperty ( 'bind'   ) ) ? ( typeof _object.bind   === 'object' || typeof _object.bind === 'function' ) : false;


                        _results = ( _keys && _id && ( _action || _bind ) );
                    }
                    else

                        return false;


                    if ( ! _results ) return false;
                }


            return true;
        }

        /**
         * Go to next value in list
         * @note            increment after completion
         * @return          {string}                                    Identifier for DOM
         */
        next ( )
        {
            if ( this._index > this.#length )
            {
                this._index = this.#length;

                return false;
            }
            else

                return this.current = this [ this._index++ ];
        }

        /**
         * Go to previous value in list
         * @note            increment before completion
         * @return          {string}                                    Identifier of DOM
         */
        prev ( )
        {
            return ( this._index == 0 ) ? false : this.current = this [ --this._index ];
        }
}
 
/**
 * @class           {Object}  Point                             X & Y coordinates for an object
 * @property        {number}  [x=0]                             X - x-axis coordinate
 * @property        {number}  [y=0]                             Y - y-axis coordinate
 */
class Point
{
    _x = 0;
    _y = 0;

    /**
     * Create a point
     * @param           {number} x                                  X coordinate value
     * @param           {number} y                                  Y coordinate value
     */
    constructor ( x, y )
    {
        this.x = x;
        this.y = y;
    }

    ////    [ X ]   ////////////////////////////////////////

        /**
         * Set x-axis value
         * @param           {number} value                              X coordinate value
         */
        set x ( value )
        {
            this._x = (  ( typeof value === 'number' )  &&  !isNaN ( value )  ) ? value : this._x;
        }

        /**
         * Get x-axis value
         * @return          {number}                                    X coordinate value
         */
        get x ( )
        {
            return this._x;
        }

    ////    [ Y ]   ////////////////////////////////////////

        /**
         * Set the y-axis value
         * @param           {number} value                              Y coordinate value
         */
        set y ( value )
        {
            this._y = (  ( typeof value === 'number' )  &&  !isNaN ( value )  ) ? value : this._y;
        }

        /**
         * Get y-axis value
         * @return          {number}                                    Y coordinate value
         */
        get y ( )
        {
            return this._y;
        }

    ////    UTILITIES    ///////////////////////////////////

        /**
         * Checks whether the passed object is an instance of Point
         * @param           {Point}   object                        Point instance
         * @return          {boolean}                               True | False
         */
        static isPoint ( object )
        {
            let _Point  = ( object instanceof Point );

            let _length = ( Object.keys ( object ).length == 2 );

            let _x      = ( object.hasOwnProperty ( 'x' ) ) ? ( typeof object.x === 'number' ) : false;

            let _y      = ( object.hasOwnProperty ( 'y' ) ) ? ( typeof object.y === 'number' ) : false;


            return ( _Point || _length && _x && _y );
        }
}
 
/**
 * @class           {Object} Cursor                             Cursor object
 * @property        {Point}  position                           X & Y axis coordinates
 * @property        {string} id                                 Cursor's DOM identifier
 * @property        {string} type                               Type of cursor
 * @property        {Object} config                             Internal private configuration
 * @property        {Object} tools                              Internal private utility methods
 */
class Cursor
{
    _id       = 'ui-cursor';
    _type     = 'pointer';
    _position = new Point;

    #config =
    {
        calculations:
        {
            angle:    undefined,
            distance: undefined
        },
        cache:
        {
            avoid: [ '', 'ui-cursor', 'canvas', 'ui-overlay', 'canvas-underlay' ],
            over:  [ ]
        },
        presentation:
        {
            settings:
            {
                os: 'mac',        // Mac, Win, Linux
                css:
                {
                    'position':     'absolute',
                    'left':          window.innerWidth  / 2,
                    'top':           window.innerHeight / 2,
                    'width':         25,
                    'z-index':       10,
                    offset:
                    {
                        left: -7,
                        top:  -2
                    }
                }
            },
            mac:
            {
                allScroll:              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAChVBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAAAAAAAAAAABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgIAAAAAAAACAgIAAAAAAAAAAAAAAAAAAAD8/Pzs7OwAAAD9/f2UlJT7+/v09PT19fXq6upZWVn39/cjIyNERET6+vqwsLAiIiIUFBQUFBQeHh719fUlJSX7+/v5+fmRkZHp6ekeHh7+/v78/Pz9/f39/f3y8vLx8fH7+/v7+/v9/f3ExMTQ0NDJycnj4+Onp6eLi4uysrLq6uowMDD5+fn9/f37+/vo6Oivr6/Y2NhaWlo3Nzft7e21tbXz8/O8vLyLi4vv7+/v7+/4+Pjy8vLh4eG2trbn5+eIiIhycnL+/v74+Pj9/f3AwMC6urq4uLjw8PDe3t7n5+f+/v77+/v5+fnx8fH9/f36+vrOzs7ExMTCwsK/v7/x8fGjo6Pa2trt7e2ioqLX19etra3r6+vV1dXT09PR0dHm5ubX19cyMjJAQED////39/fY2Ni9vb3f39/h4eGbm5vs7OywsLDR0dEoKCj9/f2rq6vq6urw8PDr6+uysrKUlJSlpaVwcHD9/f05OTn///8AAACfn58fHx8bGxuAgID7+/swMDC/v7/GxsZAQEDq6ur9/f0DAwMHBwfn5+cLCwsUFBT09PQPDw/4+PjS0tJ0dHRtbW0qKirk5ORjY2Pa2tpeXl7s7Ozf39/Ly8uvr6+RkZFMTEzw8PC3t7cjIyMYGBjCwsKnp6eampqWlpaJiYlUVFRCQkLy8vLW1takpKR4eHgmJia8vLyrq6uNjY2EhIR9fX1YWFg1NTV+fn6ysrJpaWlQUFA4ODjp6ekflZsDAAAAl3RSTlMABggSCw8NFhgdIxogJiwuKCpCQD5ENDI2OTswRvTQOPFu3t3p0hPlRiPvi0pDNB3iOPDtcF5N7evl4djV0c3Hl4+Jhn12cWYg6+jUi4NyJRDPh4F6dXFJ6dB+dlQWFurn1ZKNiHp6T/rm3dzY2JeFgn58eXh2c2xsa2llXllXNS/x6JGQjYJ2bmViQ/po09LSkXprHsA6J/pzAAAACtRJREFUeNrt3dWS2zAUBuAyMzMzMzMzMzMzMzOzVEgx6ZaZmZnpeSrVybEsOZFd17bcyX+zN6uZ/ebI6yNZY6dKJplkkkkmmWSSSSYZ/5OaZuDAVIEOIWiO/S0Hpk6dKqihhDQ0A1siRCQBpUQV6dKlm0gcVJImkBTqoIoMGagjsBKNQRQZ0lNHVDIxTdAomoMo0qdf0RJBWgRNopWDMtKuaIEQK0mXJk1wJFCOtOAAybAASTQHYWiOwEp0R0bqCKyEcSwDB5vmwZCAI2PGZc0RCqxEc9ByZKKOwEriOh59OxUkSTzHqW8vjr4OsZLlSkuII13UsYV1hB4fxfjtk/NIT1eVJayjK+s4eBmTHLpz1ihJp6gknuPsnUP4T858vBcESTzHvWcPcTTn3pxWX8I4lrKOk1/PYEjKpSuspL6CEtYxHem5cjEFM4lcvYb0jFZPQh0ZTBzXvkewIeHPFxSWpI7nuHA9jPn8eGSQZFBIQhjmjlvPwcHkxf1TRokqi0am3c20hHW8u4tN8+W9QZJOkVujwTGFaUtu/8RxcvlgSD0J48jKOkIHj+K4efCUaVemKSGJ5zj/9AFOkMMfXqolied4+eEwTpgzR26oJGGWg1kXMo4bR84kZEC7ApIMvkp0R6asC8sgyOk352QO2q5cYyQdvZfIHTcvpWALiVxnbvJl/JCIjpqs49XVCLaU8PNbKkhgWcs5bn0OY6u5+85/CevowTiO3cU2cuL2KT8kcsepbyewrcCehE8S0QG7DLYCexI+SUQH7DLYCuxJ+CMRHbD8OMElYnZdcHl+HHkqkTvQq2N8zG7w7/hfuoBYSS8vJKKjCUoYs44rhBKlzGKJxBuHcwhqIpF455BDVJCwjnngsAlRQGJwTEZ/CfFfInE4hoBkk0Hiv8MuBNKYlbjp6AQOBxDvJaJjgomjHEQCEUesMZNUAImLjsZIyKSqsey2Ctmt/X6fPn0mmVwnA0DinqMLrGr1HYTi+UmK0TSwCqmWnyZPnjx5i+uPhS5ATUDivuPK1VsMhMYmhDKMkJM/rvES9x0nL4WP6xDyB1GKHUieWBgIvn6Tl7jjGAKOGxcj2ADRKE4h4atXeIkrjkawm/gpBbOQvHnzahTrkLx/wkFw+NJJXuKm4+zHc5iDkFBINauQSnm1cBAcuXgDJPNB4pLj/Icz2AjJly8qsQHJpw3iIDjlEyx/u4gS547KuiP09CHmISR/JNYh+WhMIPjcs/O8xB3HqYOHMQeZVPpP6tWrt9EqZGPp2JhtHASfuROSSBw4NuiOxw8wD0G9e5fQsssqpHeJ2BjEQ/DhJ1KJcwe6fRmzEOdNowjBh16fAsl4kPxbx/2j2H0IfvseJCNB8k8dx35iLyD48jfES5w72uqOWyewNxD85ZggcexoqG8n3sVeQfCJWxKJA8e159g7CL57gZGM0CXOHTevh72E4OfXdMkckDh3XLkKDm8g4ev6Ca+GIHHsOH2Jc+BPBxPmHBbzJOGIO5iTfD8tkVh2lELsAoTLw0MJA24miUcINYxcuiFIHDhgAeJ9Ut7ck0nkjp7EwS5AfEnKkbO6pC9I7Dw/79mNOvQFiPfhm3pUqu9wqxLBAQsQ33LmaYiXWClI1JERHLAA8S2HD54ySqAk8vOi4IAFiJ958NiWBCYWOPQFiM+5fBuxEphckokFDliA+J6j7xBkNZFASSQFGbIa6bmIFcgbxEgGQEkkBck6oRTS806xihAIvUokEFqQTFkrry+FVL1G4HJPPLP+3EIyZ1tFJGr+10Kluu1LD/cSyczKnC3LqrWlkIr3kT+O9HCmPtHM0iC5VhKJend24uiZNq11SJbsuXIcmFEHqdZroVJte2a0DMmkQYrWJhK1ul9UZ33lrJlsQwpQiUrrEeJYldkGJGMMUmgrSGCF6HHowxJIqbWrsmTOClPL4sWeI2fBQiW3zqiCICeFNfvVIwnz0GTCJx5xUVyzM/UgjmwcRP7vN3vunAULlCy8tRVI7O+imHQEh5HtXRRwtF6ZXYOkB4j8hhidWyWLgAT2tbyCwL4WOHJRSCYCgRui7GqHkhQqXKQSK7n23DMI7DSCIzdxiNe6fG6Rq4ROrnwggb1fjyAvbhkcOXIJM0vexmslyVGUlsQoufXCK8jPRwhSpXXtHKQgcKnDzJKVhN5KsuTKndNE8uini5BfTMN73+DImTtXlixkYjEFsV4SIikoSu4f9QLy9j3v4AsiLwkjycFJYHniLgSeIYIjB+OAgliaXKKEXZ64BTnNPdXlHTCx7GzQ8ZK67PJEgJSPZYdVyA4YwkCE5+yoLjjgAqETSw7hJLlBMkaXiCcfJvUnaU+zxypkDwzZpkOgcQdHG+LIzTlS29zEFiXxz6IUi6WBVUgDGFJch0DjbupICw5Hkuq6RDwdlJ/GOgSOAoqQyMV7UodzCbs84SE0NiE0HATOa0kcjiUJTtDlJ7EBgSEMhD1BhzpLHI4knVG8M43Rv8s6BIYwkPD1m5YcziXrOjPLkwQn6OSQSjCEgdDGHRw1TB0uSG5e4SDkz7IBgSE65OUFqcMVCUpwgk4OgSE6BNlxOJcMQnzEE3RyyEYYsg0JGWXB4Vwy1kRSAk7QWYX0hiFIyKCZEoeLEudNo9zhgmSNCxCpw0OJHOK5Qy5xCzLKnsO5pKI7kFGzzB3uScZVdADxzCGXFMkHEscQucM9ScnCIHEMkTs8lRw/yOeQCDkn/NIrpKeixOGN5PjdQ1wiFk7QXX/FOGa76xAlucwkp95/wbZz9xjrKAj7JazDG0kfRnL/hU1G+PMtucN1SVGQQB79sOeAeSVxeC+58Dls3RH5fg1BakkcXkvg1UHypFy8wjj6SRzeSGqxL3OyKDn39aTXDrmkOyM5fTFFQoB3tHrtkP/vygsSeH+p/A013jvkknwggTfKJs6DJ+e9d8glZHJRifiOX8mrGn1xyCVlEST05C2GSF6eWXaoJYdfktfQ+UpeZ1rLqsMnyanbX+K2V4+Qg3nluQTdfyFvr1BZvxxyiaTxilx9hfy/PuSSdiAxb7wil24aHEX9cMjv8bzk2tUI316dVsoRv1sBielbNM98PamYI0HfZZScfpPCOJ7d4xy5wZHeJwdI0oMkN0imIj03aOMF7RXr6EAdWXx3CJIsIMlHJWzjBa9kVNJhLikIEr7xuvw6JDrgfIkqL/zNqEsKCJLQwbfQXnGOzMSR1ncHI0lLJJlFid54Gdor1LRD0RwqOcwkOWKSpohtvB4hpR3xJPQmP5eVIMGRXS2HKMkuleiOTAo5DJJMcgk4skUdGVRxxCQZopJsEkkzzqHORyKoJHU8STPBsSinwaHSZztIeAk8nlvQLFAOUQIPUEDCOqDdVeuDMCCBZtgoCZQDJFxbX6hwYV0ymDhyqe4wl9CilFywM+rYHgiHKNEaL1KVvTujjtyBcJhJaFGIZe9g4ticI7fvy9q/lGiUnEWLFt0+ePBmygiIg1vIZ6YSQqHZvDkXdWQOiIOX0KIQC012Wo7gOAyLRnprJBRiIQrCoLdzBZa1NiVQFGqhCloOtdp2OxJCiYYyguVgJBolGsoIliMmiVLItUJCflCGSssom581Z5KeliNQDuZD8ySgoOUI2IfmDZ/+jyYDYQTPARRiiSZdMBkxCbXQUEVAHZRCLZDUQWX8oUACzdDyXyCSSSaZZJJJJplkkvkv8hvvpFmwQAEybgAAAABJRU5ErkJggg==',
                click:                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAC+lBMVEUAAAD///////////////////////////////////////////////////////////////////////9aWloAAAAPDw////////////////////////////////////////////////////8AAAD///8ODg7///8EBAT////+/v5SUlIBAQECAgIBAQEDAwMEBAQDAwMYGBhlZWUKCgoTExN3d3eGhoY0NDQVFRX///8wMDAEBAQDAwP///8DAwMFBQUHBwcCAgIREREVFRVYWFhQUFAaGhqOjo4PDw8DAwMDAwMODg4SEhIYGBgSEhIXFxcDAwMcHBwQEBAKCgoQEBAQEBBdXV1GRkY+Pj5ISEgfHx9wcHAHBwcMDAwVFRUZGRk5OTlLS0saGhotLS2wsLD////Pz8/t7e1cXFwCAgIbGxsfHx8FBQVlZWV5eXlVVVWCgoIcHBw5OTnk5OTw8PALCwsmJiYNDQ0nJycpKSlVVVVaWlpubm5ubm6hoaH////Dw8MMDAz///9vb29/f38EBAQbGxsJCQkaGhoqKioNDQ00NDQjIyNCQkJZWVleXl6MjIympqaYmJg8PDzS0tJzc3Pf3982NjZ1dXVBQUFSUlJcXFy5ubkQEBAICAgxMTEGBgYbGxsWFhYRERE2NjZvb28xMTE3NzeRkZGJiYnX19dlZWWRkZHf39+jo6Pu7u6QkJCZmZkICAg/Pz9MTEwrKysiIiJeXl5jY2Pi4uI8PDzKysrOzs7T09P///8AAAA/Pz+/v78gICDf399/f3/p6ekNDQ3x8fFbW1v+/v78/PzNzc0yMjIHBwcEBASjo6OTk5MqKirExMRNTU2Dg4Nra2v5+fnV1dVAQEA6OjoWFhbh4eGysrIiIiK6uroYGBjY2NioqKgdHR329vbd3d23t7dvb29HR0cnJyfDw8Oenp57e3t0dHRSUlIvLy8SEhLz8/Pv7+/s7OzS0tLKysqPj4+MjIxmZmZJSUkLCwvU1NS0tLSZmZlfX19aiwoxAAAAvnRSTlMABAkGEQoMFx0HDhkhJCwPFSgLY/3MIyYfGjAuNDITNiopG/o4yzvDPjoh+fXd1snNXBzIaxgVoWFAne7AQvLr5tnVZmFdVhPa09B7cFDPwr2QiX14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',
                copy:                   'data:image/png;base64,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',
                cross:                  'data:image/png;base64,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',
                handGrab:               'data:image/png;base64,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',
                handOpen:               'data:image/png;base64,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',
                handPoint:              'data:image/png;base64,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',
                pencil:                 'data:image/png;base64,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',
                plus:                   'data:image/png;base64,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',
                pointer:                'data:image/png;base64,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',
                question:               'data:image/png;base64,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',
                resizeDiagonalLeft:     'data:image/png;base64,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',
                resizeDiagonalRight:    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAC+lBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////p6ekAAACIiIgAAADe3t4AAABeXl7////9/f3+/v709PT19fUAAAC/v7+JiYn8/Pz19fW6urq4uLgAAAAODg6bm5v7+/v7+/v6+vr19fXk5OQAAADKysq0tLTh4eH8/Pz4+Pj09PRjY2O6urpeXl739/f39/cYGBilpaV9fX34+Pj+/v75+fns7Oz19fX19fX09PTb29u5ubkJCQm2trZra2u9vb0tLS329vbx8fH8/Pzu7u7q6urZ2dmYmJiPj4/JyclsbGzo6OhbW1tCQkL4+Pj19fX39/fn5+fy8vL09PS2trb29vbz8/PY2Nh0dHRRUVEyMjL19fX5+fnh4eHu7u729vbX19fp6enR0dGPj49PT0/BwcHY2NgqKirb29v9/f39/f329vbm5ub19fXw8PDHx8fHx8fExMTW1tbz8/Pr6+uFhYW6urqLi4uWlpZ4eHjMzMxaWlqSkpJTU1P19fX9/f3+/v7s7Ozm5ub29vbv7+/39/fPz8/IyMiVlZWKioqwsLDu7u6enp7Ozs7Ly8tTU1OmpqYWFha8vLxqamr39/fh4eHk5OTq6urR0dGoqKifn5/Hx8esrKyhoaHIyMjExMQfHx9VVVUmJiapqaljY2NBQUFYWFhubm51dXXo6Ojr6+vQ0NDy8vKlpaWZmZnh4eGurq6goKD///8AAACfn58gICD09PQFBQWkpKQkJCQDAwOxsbFAQEAtLS3r6+uurq77+/uYmJg+Pj4qKirp6emUlJT29vZDQ0NTU1Ozs7MKCgocHBwMDAzExMSrq6sZGRnz8/M7OzvCwsINDQ3GxsaZmZmWlpZXV1f9/f2goKCcnJwiIiK/v7+ioqLd3d20tLSbm5t4eHhkZGROTk7MzMyXl5cWFhbv7+/W1tbS0tLq6uro6OhQUFA6OjqH28fnAAAAwnRSTlMABAYJEwsOEBYIHSUiGyouMiAnORg2LDz9vS9WNLgZV/z3+rzCPU4b9L9MSkAyHNLy8LqzQycktrGjjVIbEaCENCEW2NXMvJuXkHJHRzApJiDdz87MvrJgXE1LMych0M7DubeUdXFtaGNUPOO2sqydbmdmUk1CODcb6eXgx8C5mZSPfnliXFVTTUI9PDgk5N/ayLa0lomJhXNzcmljYF1IRkU+LsfEp517dXVxbGVaV0JBPzs1My8kH8nBqH9nRZKNZIqbFGoAAAvtSURBVHja7NplyFRBFAZgdfWa61qrsshidxcqBnZiI4qJnRhYYIuKKIqBja2g/rAQA//IGtgtiN2t2IWC58w4e3Z2jNnrMO7CfYXPP+K3D++cO7vLSePFixcvXrx48eLFixcvXrx48ZKiSWsgaf572Ksw8Oc/YzjCQOxaVEa8Il0i+QXGMoXqIMC/hSyWKeQgRGaK78/JHJs4i/1SJEbca8/w56gwsliX0JFqUI2lDUv1n6kfTXmeEtE0EKlDERi7D2Pqg5VRrX9NTN1ohrM0FWkm0oen+c/UElmyZEm9n5kx3rYkbdThKz+jQ/6IodToms6qhArJDANRYiRIjEHS2YXEOBwHJcYg1iT05BWOjBn3m5LUGIszbxGCDoTAgxYc6dPva1EhvxmIL7PFSpBBhYAjU57WZiRDx/p8ViqhRqgQdPj9G41Ihs7JYLESakQUEvZnybl3S8P8RiC8kjR2IEAhCBSSJUu2bHskyatbR/Rz7lUU4ohKrDeSnkFyZsuadW6s5PObM0e1c/pULMRnD0KN8JOVBSG5ss9dRpLzN6/eOKybE8cFZExGrMTKkKiNICQbQvLuWtbOjYQglTnEzpCoM4KQrAgJuZHIkPSO4/NZHxK4R/iw86MVCOVY60py4iVBsBL7QyJBoJEcBdZOcyF5bgGiOyQCEhw9rV1EkWhDWqZPL6ZdH2K+kgBAco+eNkGR6EMyWYZQJSihSlAid/L4foKQjBYh6lUSrSRHMLfcyQMNyfOndiFqJdKDK2vWn5XkGz11iCRJZkhMJVwiDhdWkm9QYpKjCiSdC4jZJ1cghJUUGzRlviLRhcCNaA1ClcSPSd5ADm2JCinCIBlsQlQJewazMUFI2UFT5NOVxJDowNNtIi4TJjlYMUZy9dqfIEcEpIwuxMLAQyUEEbn8Jqkh0sDzMcEnF6uEhgRy9vWZw0kN4RT5cPFK4CqRHakBEfciVMKnZK3keCg51FxPBoj07jHMH1w5ZMeFM4dTAKKcLYDsWjpBx0GQZ/8fIirh484hc+MdqQGByBDFkRIQeUYQsmd6O9mRIhCINOzgyC85UgSSJu7xu3F6Q9mRIpD4h5YLB0JeR5LsLYrk+ProN46T928kGQR+mfSmsXWL2D4eXfqN4/ubqzdkyEMBKW0TQg4aEOHQOFcn7976dFOW3P6vEFDEOyroOe7g913XkgYS/1FX34GftO6BRIWUsg9BhXsHlyQFROljRA99h5AkAYT6cOkgCUIuWIBo9dEtYQdJzEPSRqPZh3sHScxD0iq7q/p9DNByXDxHDlly+4MJiLowyjH6fQxorOc4RoSo5Ns1oxBijO86nvY9NftoXNCdAyUv3oHkoylITB1dl/RjEqKoffyro9L8krLk4yMzEMHA19e1xgKUCMpf+5g3qmfCjk6HNheSJIYgpGCQ/I36jcf/iFOUf2vAMbDVCllyVEAmFXcJoT7E/m7XGhGQ1KbVVXN9kKNVnOTtESMQTHQLeWyNCEj6g0RQ/tjHJnJcvvLb+0N2VK2KkokxkvdfDEBoYZStUAOESzIrEsXRfTU5lM9Ryv1BDowkefIkwlP0XyDkgG1vByAkkSj4t+JI/FyVxaBkOUgo7iFUCDkcx5mzOMIkFfrX9olSKLKjV+HEHcVY0LIeJEYg6p4lbr5u4BCSmHXky5cvdz4IWlBiAKJ+L8UWXwEiJKvKk0R1rEnYUXHYzNzRAAUkBwobg8gLvAJCksxcQsUJR1F6DZcf6TqCwQKYYBAoUMv6bSRRIa6/usUXmGlD74gkoVLS/dZx5ZKeAxQ5eMDCWtm5bWFhAxAakegCb3gdQUiCkR2TXDhAEQqFAoEA/AQLo+zc1rGwqUZ4IWIRGSEk6TCyfAY8Xvy+FNy22905QoG8ebNj8uYNCMrOrSAx0ghB0JGFICSBVvDWJ0ephB1VOgMDFLl4wAIUNiu7QWJo2PGZ5Tg/F6rXTY7ESUpkAApnoPZfHLmyiuSCVlgpQZQUlCE+143E7MHNBogsmVHCyQBBBnPscOdgjGzZsuXMmRN+AoWXApTdK9sXJojL7SCU4MkSa3ACQinYGCQQZAC27Y4iiTpKVulcjtUBiiw8OZHCJEApMLhv+4L/CklLEL7eM7tJRJXszwhJ/9NRKFHHIuaAOoDh94fDYb8fKaIUCEo4pIvrxTMBEds9AFElA/ajAs5e21mVXTmwDmSE82TC5AkzCkqAAhkHEgFxCOKmEbF/8aO9ewm9IY7iAH498n79ucnzeqzskBAWbKlLiUTyykqRSGLBQnmEULKQNQushJJH8n6UhSIlaysihWycc37mfmfu8Th35tcxt+Zr6e/vfvrOvXNn5vxmdjIk+WoNyXX+38mxCY4fnTuI0ZdDv6xVCrVCn8pXL66fLBCMy+ZrRGZ7etKQb19epSXHaXuAI0cfxGBFfw5biCISonBIQueUNqzu219BzA6BJOMXLci7zx/Tkh1rB/WYHI8yjo2rUg5m4HODJAmFdi+Dr15cN0ZD7MlABo8E5PHL12nJ+h3XDu6zOJ4/+71jwABmZD7JRUIUyZBrdN6VIBgpz7U/pN8b5t8OtSBPHmUld4o6mIF9K0phC+9g1m6fTpC8qxWwPwyzVodWtiD3Hr1+8xCSaUUcvFkxA992IOlhBe9hli45vVq2rLyNADJs9HhA8LqQYg79/ZO/FiUZWr++q6kg1ijIWECUpJhDHRGEUnj/yHvKofUWlx213I1oiJIUc+hjtFBKvd6g1MXRH4vFIjaiJWbHlLHa0XbUPFAkTAkRRygkQiPDMxAtMTvOtTl+fx5DSkkSPp7zrnH9G0S/Qrtj0V8ckARK/8AIDixxjdgIXmM8h5ZQBMG7GfxkLXIj+NZhd6z8i0PdaYEoZEkY+Mla5EbwPdDuuKsdeHVKQsFtRnDCOXYjkJgdl//q0LfxYEsI7ilSi94IJB+KOv58nQx3rcEmGLsRSD6bHDdMfYROQEFwxS9yI5A8NTlumfpAJ5wsA+iojSAGx9RTt2x9oBQVFBK/Ebvjkr0PXOBHcFHctxHt2K0c//rexH+nGZ6NaMcK5TDt3QI0/IHDrxHtOGvuQ1M4IPs1oh2T4dB9eMQAKeaoOTkMEItj+eYtw0d31EdZGlEOum7QUR8laQRnipTD2Ec5GsmcuxvzyzE4nBdlR59/91GORt5++orD+Bn7t4yQNzochj7K0sibV4BsHf9rw2qIw3ZnqXI0kpXMPH+ICglvkH79jI5yNKIkh7kQ3rDMjpI0oiS3QyH281JlaaRNsufC7fAOMZ8oLE0jSnKlDkhXNaIlCcRUSIkaaZecvhIgtkLK1IiSpC/TdNF7REn2nm4GSPc10i5Z3Awfv93XSLtkftO6bZWtkbJIrI3YJQtn2yTla6RNcmLhMtNhlVsjz54/MOfJ5y/vIblpkrg18uHFfXsefwfEKHFopHBOHJjj/zbBUA2usxfOSX8J5rUAiSTp7S6JCoHEt5JegDQw5hQhtODMXZKZoAOkuMQHoqdMMdMYI2OcJRhgrg+NCQkLzhwOFuHIzgIeOTNr1lzORHvmSmZJtknmSQ7M9mwEkDAve3TNmjULOJOsWSBZwzlCOcZpNpv0cBXHbasXll3QpCTudSvLbWwZxeFVR+N+TfIPGtTAKUcXB1b0YMo/SIhCFmPoRyew4xekRyDeZ4Z6cdS9rWUNgSxP+0dYwAjKuOHiCEPX3o3gTUKS1A3gmTKOMMaMo/DyKXbwlhWuLvg1ohdZDUitIaAMt4UMpCAGO7gQ2bI8G8GbhCuBhCg8em8OI0hBDHZggNe3EVQikkYyrt5xwmA4O5JCXBvBYt0gkTV8MrDeYXpYQY6GOFCImwSViIQpDbLkCJXBDHZkC3GsBBKmhCnvoZ2Fh8JJQQw43A+t9DjxgFzBPDUcnlcYIGEKWQiTL/QvMcDrPzOQdAIKazoP5pDh8CwEM7jZeeJ+nSX1sEM1+OoSPYNrfEQjoh7T6M2ABBYJHpppym+fnJlruyrTg0wF4e3QFCQ3AAx3B6Y9o6XmWYe2yJ8YiP//OGl6Bd3+HOkqVapUqVKlSpUqVapUqVKlSpUC+QnvKda8S6kA3AAAAABJRU5ErkJggg==',
                resizeHorizontal:       'data:image/png;base64,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',
                resizeVertical:         'data:image/png;base64,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',
                text:                   'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAACSVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAADt7e0AAADx8fHv7+/9/f24uLjBwcH19fXw8PD39/fr6+v+/v75+fnOzs7l5eX19fX8/Py4uLidnZ3e3t729vbIyMjw8PD6+vr19fWmpqavr6/BwcHy8vK+vr79/f3////9/f309PT6+vrs7Oyurq7FxcX4+Pj4+PjMzMxeXl7R0dE1NTXa2tpycnKQkJDz8/P7+/vl5eXl5eXV1dXX19e7u7utra3p6enk5OR+fn5WVlaBgYHZ2dn9/f39/f3w8PDh4eH19fXh4eHo6Ojr6+vd3d2np6fn5+eTk5OJiYlvb2/q6urd3d2bm5v+/v7o6Oj4+Pjb29vLy8vS0tLj4+OkpKTHx8eSkpJiYmIbGxuPj4+kpKTu7u78/Pzt7e3S0tLm5ua+vr7CwsKysrLS0tK6urpnZ2eoqKg7Ozvr6+vJyclUVFTBwcHS0tIrKytHR0d8fHzy8vLn5+fX19fc3Nz4+Pi/v7/x8fHk5OTJycmXl5fZ2dm0tLSBgYF4eHiAgICXl5f///8AAAC/v78/Pz9/f38gICCgoKAICAj39/dgYGAwMDDg4OAQEBCQkJAYGBjv7+/IyMifn5/n5+fPz89QUFBISEiwsLCvr6+np6dwcHCXl5d4eHhoaGgoKChYWFg4ODjY2Ni3t7eHh4fQ0NC4uLhfX1+IiIhvb29TxvLgAAAAm3RSTlMABgsIDhAUEiEYFiskHBo1Lh8oJjAyODo8P89CzM7gWVSFZebQ+O6eR8nChmi4plGqo5ZiXX92VvLw6uK7Xy4p58WWV05MSkc429PEsqyXjoJ6a2FaPiXa2NS/t7avrZZ6cm9vYFJANOHKrKehnI9wZmFTShwY1srGpqCXk35rY05IRjw8PDQwLxwQ07m0sIyKh4aEel5PMCIgGy9vbLgAAAz/SURBVHja7d33W1NXGAfwkgAJK5AEFanFFgHRAiKtVgGhYBXc29q6d5fb7r333r0kYYQtSxBE0Y6/rO8Z5JzDTXIPPO3JCU++PxQfHk6f+3nec2dO3vtAIokkkkgiiSSSyDxMUpjMaUxMk4Rj58O2LKpBHBRbC9seGxd+y6K4zWNiZSGbVF9ff660tHRDYWHh2kdQ1hYWbiitf5mrjVAJRvijHkaxQTCqtPTDgwcPPqA4ZKNsq1evrl25cuXTBQUF6w2U9QUFh1aurnpkwzmGMSGun9vwSFUFjGKDnjsE/5ta+N8pLgph2GxGpByqrTp59mWbnYYhkq+fPVlV+3TEgaqmF3OgjUo2oqT61arCT20s6O+TP9lb9Wp1tFF2VRLmgM1KMaKn4IW15xgiJWXznhcKLIbYVUqoI8XhMKyyvnZtHTJAHHV7GtZZDoDZqAoCBaGO1HTDOusq9v7ugPy2twIY1hCbkpKwiYUdaYZMCqqe+vzzVVUwqeQgiiQACTlchlwa9uxpMOSSrK4kpCDYkWVIprrakIYo2ktYQcDhNP7zpKgqCUBoQVxZbh4y4IPc7eowZpGOrrto1IDB4lAHsdtRQWBiuZ2ZBsuoHzIZHA/0tI10WRvujrT1BMaDk2jUKA+BkiiZW3RmoYI4M70GS6CFpru1M9jz50A0xcCfPZOdrd3TIwIGS6qaucVmFi6IxwyhmDsTPf194RV9/T0TdzAiLMShEoJmVpbT6c0wQ5hleMzXYWZ0+MaGmcIMSXekqIPALoJnlkeEmOIP3J/puB/wt0CiQpIVQmAXcVtBIO1DbR1COdqG2lssIKnqId4MCwikNcAdwboCrS0tmkHSMCTHCgJFCfoMGl8QymEFSVMNgV3ECkLjHzFwRmDv0Alil4SwdI5gR2eLPMSuAmKbhnhESHsrpDe8JKKjF8a0myA2VRAHheQaLL57NyC3AmPB4W6TZHCw08wbDo4FbsGYez4B4ogphKWvq78nOPPoNDQ08xjQOXazv2v63K8lBKXrxoSpAgLDH7iJEbpD4LLwJjvWmnI7gC5e4gPCzn7mDI8CQw8IO2pFSceN8NMr2G+YYjpqKT+PRM3NcAfjoS7DEmK3Kz+zR09Pr9kxaESHxPxaK1w67rXP3M8tHLG5+oXLeIv0DYmO9huGhpBMa4jRL06uvzosIQ6AqL5D9DJI8bKaom3l5eXPvlJsCJngHd13DSElRc/CkPz8ZU8WxwhC79k9sC1PPpN/5Mjyxkd3n9q3f//+Mz+99LzBZ7CbL4jIKN916szGjWfKytasadx5/OixFSsOFaQ6YvEUxfvGzh/XXCp772pe3mLIgyjXTn8tFGWS20OEM8iWXRthTF7eooXZ2Qtycz47cGDpE+/sVQhhz7WcmR9n5OQuyM5euHDRImbZ/zovGeUOWR284wRWAAM7MjyZTneWi+zrKiDik0avByRAYRZE2fSsweJjEL/Bsu4ELgZhIIcXIC64QAGI4me/aVlEQigQRjlTYgn5hhSDMogjKy1d1cwSn8ZTCVCIhVJA8ool5BKZUzCpEIM4XOBIUQmhJcESRKGWBWhvIZIiS0gZLgZjIEeaSgcrCZUAhViAEpLIQFgxgIEd6cohIUmIQqYYpoBEBrKA7BqY4aYM4lAFYZ/q4qK4srLcgCEUKlmcbwl5DDNoMYCBywEOJQVhECJBRYGqgIXUBSggQbNLAoIctBiYgaaVSgeTUMq0xc1LZCCezFAxMIM6FEKYBFOohVCIRALyOD1SEQVjKHSw1UGCBUlITaAkEhBwYAZRAIOWQ/k6J0phFnrRAiXJzpaC0AMuU6h3QISlZJhCL1pwSawhS51u4sAKOqnUM8QVioTioJ/0ykKymEPVkkZrC5WkkTv5XBkIudQlDA0WzBIMlrA7+dwFD1lD6L0HOHRQzLhoSacPIKUgaenkikQbBpM4yHM7KcgTLvqU166Rg78BdjslIXRm6eWYCcmVhehWkBkPICUhsIvoVhARkjF/IJL7iJYQu21uELteECgIO/zKnkdSHboetWZ7QtQRYudXceVmy12iOLSbW6HTyK/NBw40NTW994wl5J3m5vN1dXX1X2hVEgxBV78/VB47dvTo9u0llpDXKisrKyCf6gRBDjKzVhg0FhCWUp32ktAxK84hyEEv4mcP2azRgYstMnfHNYQriHMOEH3OJVxB5gB5Si8IKcicINpcOQqr/pfMHqLNbSL/ebV3DhBtLri4FQSZc4Foc3uVZOcWp3CQgTaScQa5TX81xUFW6XJXwu5E0C0VB+lvJellkHb6q0keostdiXhLtYSfUhHj1xXC7kTmANHlGUQIAjNrHkCmnzrMHvKwLg9T5hsE7etzg6QlICT/w4Jmz9wgmpwRhSXmuQ/NEWLTBOIIAxn0k3QyQDf91T8ixKE3pM9H0sMgnT6SwbiCRLv6TUDEKNjZLSB67uzC4VcOouXhlzshSkO0PCHOMwi6aJSHaHzROF8g7MZKCqLvjRW51Y17CHv4sGbnhQvLl7/00jJLyPadO48fv3jx4nmdHj4QCFnzAGtl5dbGw0Jsr9Ot0YfUwgO6DLRWNk8Ogr/6otGyAeGRKV4rK7XI/zEoSCasa9RlFxEfYtO5lScJgYLoM7PEjxXI8mUpCJpZWVqtPmNzi5Uk3xqCCqLTzBI/eqMlkYGQXV2fmUUgbHfHJZFc5I8Kos/MMpVE8tsK2hXEVBLJbyvoVxDzEVgKotexl0HEs7sURKtj7zSEnd09s/i2gkOzlb9J+FTCrhylIPh6UbO18UkzF2JLQWBm6bbIX4TgNY3xCrEziPziTIBo9XWFJOIQvtFjvTjzXVIRjUpCHcJ145USS8gb+DRCShJ7CvuKlY3/stjHXxmWkOrL5PBLJTGlMAb7rhjaRZpejNTzweCy9bJLj2+9YQU04T9b+lH9dfY9RO9nj22P2IVjUJCcPE8kQAHLFwcPflh6tvABxaG1MNY/t3Xl4Yqq7/fs/XnV+83NB96/fHxJ5L4oQbEtc+XJVR/V1X2yefMGeDfBt+ilAFufU/8NV7GT/7qCrQ2HKyuPHd5SbAgJRutUU91wuKLihQZ4OcH6GHbyhyQbVvGJHQKDHQZEs07+aAc3LDLgn9HNqc3QrpO/De3gVv21Ai2z7a9lUwiBgoAD93ywcITteKZfJ39Herp85zYmGYi3Tv59t5iDz0S/Lp38KcSik//d8d7IfRp1gAi9gyK3mxydjN45U6NO/uiCxAif+23B2xa9TEf6DJYYdvKnV4jhTh1dvp6h1pmzadjcXXYkbHdZZc+Ck0If7GSJEN/fbZCewETQb+73298fqd8vGuOb0cnfrr4HnakDMxjM6bwJ7UAjd2DujlUnf/aZofmVBJEcJokWryRgfRplIH5wYMmdFpx47OQv9o2fCrbrCfF65kEn/3SpTv7dQzc6xF7G2r1bQaYBfrv/nulSdzDgb4+zTv69w+Ph3z8yPtyrdyd/8Y0wY7civxHm1pj4Rhi9OvkH2DkO3mszxSvMlil4u01rbwiiVbv1UT8kGByHtwxMDRiWGZiC1xeMB4No1KhWkAEfpGu277HqQqMGtILMKro0wJ81pKRETwg7asml6M03iwyWuOvkT1Oz4/S1a6d31Bg0cdjJn7Tw3r3pQcim3eVkfsVjJ394uL0NWnjjQK/sXdvWaQdh77GKlpojb+1bnAdZTLLvrfKa+OvkX/L8i29fzVtEQzkbd+94vkQjiPiuN3OKa7a9+N2VDxYthOC+3xCiWbzp9K4d22qKtXglAXv73tHtrz2Un//MMgjZNPjHlvwjrze+ve8DIOAsgMAPzKGWfbsbd5QXbYE/JuwnIV8uWbGitrISILF4H2JT05WysrJLj0Ial6PAP06cugqVoIRcSE4O+i/mUAxk08ZTJ+CP0ZgLjWsg7z6+dOkvzedj0cmfNipGWze9F6CfC6kCE3IyaHIwh1rEv4dfkQ74bNWp+k7+sIV062jobJpGeEKZxuDCiH+P+3yTTv505ZPit7hSSQ7dOGpgCNSDPBSvl8PwA4BBHVmuWHXyx22w6cbR5AgIJxceIw6gfb5Vd8BnnfypxEP2AUIQEG7oQU4D/+Qw4gjPtIMWxB6bTv5420LxhhBgQJ3UaVwurKEYNoKoY97J30W3jY8TKwgiHZIKQT8RhljMA9zMobyTP5GkkW0jIQSGAIMjFNAwjDiEtfJPVlcQ8Y35qWTT+LjwdKKIFEgyBP2kGDTNTEMwgzrsqjv5o+2jmwZxIQCEVYIYbDREwyrDjaFs9Ncx6+SPNo3uAxBMCIMwYcxD1L+RgEnsbNP4pPAIOxeGEYbwbLtiB4RfO0e3jQoERBIXHiOOoUNi2snfZo6IoBvGY0yJcSt/umWQmYRpRKR++eYxsW3lz7aMhU2mKCPMgzRo5Z8UJrMbo4MikUQSSSSRRBLRK/8C0CgDgIQTprsAAAAASUVORK5CYII=',
                unavailable:            'data:image/png;base64,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',
                zoomIn:                 'data:image/png;base64,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',
                zoomOut:                'data:image/png;base64,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',
            },
            win:
            {
                // @TODO: implement common windows cursors
            },
            linux:
            {
                // @TODO: implement common linux cursors
            }
        }
    }

    #tools =
    {
        ////    CONVERSION    //////////////////////////////////

            /**
             * Converts CSS string value to number/integer
             * @param           {string} value                              CSS string value in pixels
             * @return          {number}                                    Number value of parsed value
             */
            pxToNumber:     ( value )   => Number ( value.replace ( /px$/, '' ) ),

            /**
             * Converts the 'css' object into a CSS inline string
             * @param           {object} json                               CSS object from #config.presentation.settings.css
             * @return          {string}                                    CSS inline string
             */
            jsonToCss ( json )
            {
                let _result = '';


                for ( let [ _key, _value ] of Object.entries ( json ) )
                {
                    _value = ( typeof _value === 'number' && _key != 'z-index') ? `${_value}px` : _value;

                    _result += `${_key}: ${_value}; `
                }


                return _result;
            },


        ////    GETTERS    /////////////////////////////////////

            /**
             * Gets the center point of an element
             * @param           {Object} element                            HTML DOM element
             * @return          {Point}                                     X & Y Coordinates
             */
            getCenterPoint: ( element ) =>
            ( {
                  x: element.getBoundingClientRect ( ).left + ( element.getBoundingClientRect ( ).width  / 2 ) + this.#config.presentation.settings.css.offset.left,

                  y: element.getBoundingClientRect ( ).top  + ( element.getBoundingClientRect ( ).height / 2 ) + this.#config.presentation.settings.css.offset.top
            } ),

        ////    MOUSE EVENTS    ////////////////////////////////

            /**
             * Actions executed after a mouseover event
             * @param           {HTMLElement} element                       HTML DOM element
             */
            mouseover:      ( element )         =>
            {
                if ( element.getAttribute ( `onmouseover` ) != null )
                {
                    element.onmouseover ( );

                    this.#config.cache.over.push ( element );
                }
            },

            /**
             * Actions executed after a mouseout event
             * @param           {HTMLElement} element                       HTML DOM element
             */
            mouseout:       ( element )         =>
            {
                if ( element.getAttribute ( `onmouseout` ) != null )
                {
                    element.onmouseout ( );

                    this.#config.cache.over.shift ( );
                }
            },

            /**
             * Initiates any mouse actions associated with the passed 'element'
             * @param           {HTMLElement} element                       HTML DOM element
             */
            mouseAction:    ( element )         =>
            {
                if ( mouseMove.sequence.constructor.name === 'Pattern' )
                {
                    let _currentData = mouseMove.sequence.current;


                    if ( _currentData.action === 'click' )

                        element.click ( );

                    else

                        if ( element.getAttribute ( `on${_currentData.action}` ) != null )

                            eval ( `element.on${_currentData.action} ( );` );
                }
            },

        ////    CREATION    ////////////////////////////////////

            /**
             * Create and embeds cursor within DOM
             * @param           {string} id                                 Identifier of cursor
             * @param           {string} type                               Cursor type within #config.presentation
             */
            createCursor:   ( id, type )    =>
            {
                let _settings = this.#config.presentation.settings;

                    _settings.css.top  += _settings.css.offset.top;

                    _settings.css.left += _settings.css.offset.left;


                let _image    = document.createElement ( 'img' );

                    _image.id            = id;

                    _image.src           = this.#config.presentation [ _settings.os ] [ type ];

                    _image.style.cssText = this.#tools.jsonToCss ( _settings.css )


                    _image.onerror       = ( ) => console.log ( ' >> [ ERROR ]: Image could not be loaded !'   );

                    _image.onload        = ( ) => console.log ( ' >> [ SUCCESS ]: Image loaded successfully !' );


                document.body.insertBefore ( _image, document.body.firstChild );

                ////////////////////////////////////////////////////

                this.position =
                {
                    x: this.#tools.pxToNumber ( _image.style.left ),

                    y: this.#tools.pxToNumber ( _image.style.top  )
                }
            }
    }

    /**
     * Create a single instance of a Cursor
     * @param           {string} position                           X & Y axis coordinates
     * @param           {string} id                                 Cursor's DOM identifier
     * @param           {string} type                               Type of cursor, within #_cursors
     */
    constructor ( position = new Point, id, type )
    {
        this.position = position;

        this.id       = id;

        this.type     = ( type === undefined ) ? this._type : type;


        this.#tools.createCursor ( this._id, this._type );
    }

    ////    [ ID ]    //////////////////////////////////////

        /**
         * Set id property
         * @param           {string} id                                 Identifier of Cursor
         */
        set id ( id )
        {
            this._id = ( document.getElementById ( id ) != null ) ? id : this._id;
        }

        /**
         * Get id property
         * @return          {string}                                    Identifier of Cursor
         */
        get id ( )
        {
            return this._id;
        }

    ////    [ TYPE ]    ////////////////////////////////////

        /**
         * Set type property
         * @param           {string} value                              Type property
         */
        set type ( value )
        {
            // let _settings = this.#config.presentation.settings;

            let _presentation = this.#config.presentation;


            this._type = ( value in _presentation [ _presentation.settings.os ] ) ? value : this._type;
        }

        /**
         * Get type property
         * @param           {string}                                    Type property
         */
        get type ( )
        {
            return this._type;
        }

    ////    [ POSITION ]    ////////////////////////////////

        /**
         * Set position property
         * @param           {Point} point                               X & Y coordinates
         */
        set position ( point )
        {
            this._position = ( Point.isPoint ( point ) ) ? point : this._position;


            if ( document.getElementById ( this.id ) != null )
            {
                let _cursor = document.getElementById ( this.id );

                    _cursor.style.left = point.x + 'px';

                    _cursor.style.top  = point.y + 'px';
            }
        }

        /**
         * Get position property
         * @return          {Point}                                     X & Y coordinates
         */
        get position ( )
        {
            return this._position;
        }

    ////    [ ANGLE ]    ///////////////////////////////////

        /**
         * Set angle property
         * @param           {string} id                                 Identifier of element
         */
        set angle ( id )    // @note: calculation is good
        {
            let _element = document.getElementById ( id );


            if ( _element != undefined )
            {
                let _point = this.#tools.getCenterPoint ( _element );


                this.#config.calculations.angle = Math.atan2 ( _point.y - this.position.y, _point.x - this.position.x );
            }
        }

        /**
         * Get angle property
         * @return          {number}                                    Angle property; in radians
         */
        get angle ( )
        {
            return this.#config.calculations.angle;
        }

    ////    [ DISTANCE ]    ////////////////////////////////

        /**
         * Set distance property
         * @param           {string} id                                 Identifier of element
         */
        set distance ( id )     // @note: calculation is good
        {
            let _element = document.getElementById ( id );


            if ( _element != undefined )
            {
                let _point = this.#tools.getCenterPoint ( _element );


                this.#config.calculations.distance = Math.sqrt ( ( Math.pow ( _point.x - this.position.x , 2 ) ) + ( Math.pow ( _point.y - this.position.y, 2 ) ) );
            }
        }

        /**
         * Get distance property
         * @return          {number}                                    Distance from last distance check
         */
        get distance ( )
        {
            return this.#config.calculations.distance;
        }

    ////    UTILITIES    ///////////////////////////////////

        /**
         * Checks whether the passed value is an instance of Cursor
         * @param           {Cursor}  value                             Cursor instance
         * @return          {boolean}                                   True | False
         */
        static isCursor ( value )
        {
            let _cursor = ( value instanceof Cursor );

            let _length = ( Object.keys ( value ).length == 2 );

            let _id     = ( value.hasOwnProperty ( 'id'   ) ) ? ( typeof value.id   === 'string' ) : false;

            let _type   = ( value.hasOwnProperty ( 'type' ) ) ? ( typeof value.type === 'string' ) : false;


            return ( _cursor || _length && _id && _type );
        }

        /**
         * Sets the next element
         * @param           {string} id                                 Identifier of element within DOM
         */
        nextElement ( id )
        {
            this.distance = id;

            this.angle    = id;
        }

        /**
         * Sends cursor to the location of the next element
         * @param           {string} id                                 Identifier of element within DOM
         */
        toNextElement ( id )
        {
            let _element = document.getElementById ( id );


            if ( _element != null )
            {
                this.position = this.#tools.getCenterPoint ( _element );

                this.#tools.mouseAction ( _element );
            }
        }

        /**
         * Switch cursor's visual type
         * @param           {string} type                               Cursor type within #config.presentation [ type ]
         */
        switchType ( type = 'pointer' )
        {
            let _settings = this.#config.presentation.settings;

            let _delay    = 200;

            let _cursor   = document.getElementById ( this.id );


            _settings.css [ 'top'  ] = this.#tools.pxToNumber ( _cursor.style.top  );

            _settings.css [ 'left' ] = this.#tools.pxToNumber ( _cursor.style.left );


            this.type     = type;


            _cursor.src   = this.#config.presentation [ _settings.os ] [ type ];

            _cursor.style = this.#tools.jsonToCss ( _settings.css );


            return new Promise ( ( resolve, reject ) => { setTimeout ( ( ) => { resolve ( ); }, _delay ); });
        }

        /**
         * Set's this cursor's mouse interaction type; with other DOM elements
         */
        setInteraction ( )
        {
            let _elements = document.elementsFromPoint ( this.position.x, this.position.y );

            let _avoid    = this.#config.cache.avoid;

            let _wasOver  = this.#config.cache.over;


            for ( let _element of _elements )

                if ( ! _avoid.includes ( _element.id ) )

                    if ( ! _wasOver.includes ( _element ) )

                        this.#tools.mouseover ( _element );

                else

                    if ( _wasOver.length > 1 )

                        for ( let _over of _wasOver )

                            this.#tools.mouseout ( _over );
        }
}
 
/**
 * @class           {Object}       MouseMove                    MouseMove utilization class
 * @property        {Pattern|List} sequence                     Pattern or List object
 * @property        {Cursor}       cursor                       Cursor object
 * @property        {string}       animation                    Cursor linear animation
 * @property        {Object}       config                       Internal private configuration
 * @property        {Object}       tools                        Internal private utility methods
 */
class MouseMove
{
    _sequence  = undefined;
    _cursor    = undefined;
    _animation = 'easeOutExpo';

    #config =
    {
        domWindow:
        {
            width:     window.innerWidth  - 18,
            height:    window.innerHeight - 4,
            xCenter: ( window.innerWidth  / 2 ),
            yCenter: ( window.innerHeight / 2 ),
        },
        animation:
        {
            duration: 1500,
            timing:   undefined,    // Note: defined at creation
            ease:
            {
                in:
                {
                    sine:    ( timeFraction ) => 1 - Math.cos ( ( timeFraction * Math.PI ) / 2),

                    cubic:   ( timeFraction ) => timeFraction * timeFraction * timeFraction,

                    quint:   ( timeFraction ) => timeFraction * timeFraction * timeFraction * timeFraction * timeFraction,

                    circ:    ( timeFraction ) => 1 - Math.sqrt ( 1 - Math.pow ( timeFraction, 2 ) ),

                    elastic: ( timeFraction ) => ( timeFraction === 0 ) ? 0 : ( timeFraction === 1 ) ? 1 : - Math.pow ( 2, 10 * timeFraction - 10 ) * Math.sin ( ( timeFraction * 10 - 10.75 ) * ( ( 2 * Math.PI ) / 3 ) ),

                    quad:    ( timeFraction ) => timeFraction * timeFraction,

                    quart:   ( timeFraction ) => timeFraction * timeFraction * timeFraction * timeFraction,

                    expo:    ( timeFraction ) => ( timeFraction === 0 ) ? 0 : Math.pow ( 2, 10 * timeFraction - 10 ),

                    back:    ( timeFraction ) => ( 1.70158 + 1 ) * timeFraction * timeFraction * timeFraction - 1.70158 * timeFraction * timeFraction
                },
                out:
                {
                    sine:    ( timeFraction ) => Math.sin ( ( timeFraction * Math.PI ) / 2 ),

                    cubic:   ( timeFraction ) => 1 - Math.pow ( 1 - timeFraction, 3 ),

                    quint:   ( timeFraction ) => 1 - Math.pow ( 1 - timeFraction, 5 ),

                    circ:    ( timeFraction ) => Math.sqrt ( 1 - Math.pow ( timeFraction - 1, 2 ) ),

                    elastic: ( timeFraction ) => ( timeFraction === 0 ) ? 0 : ( timeFraction === 1 ) ? 1 : Math.pow ( 2, -10 * timeFraction ) * Math.sin ( ( timeFraction * 10 - 0.75 ) * ( ( 2 * Math.PI ) / 3 ) ) + 1,

                    quad:    ( timeFraction ) => 1 - ( 1 - timeFraction ) * ( 1 - timeFraction ),

                    quart:   ( timeFraction ) => 1 - Math.pow ( 1 - timeFraction, 4 ),

                    expo:    ( timeFraction ) => ( timeFraction === 1 ) ? 1 : 1 - Math.pow ( 2, -10 * timeFraction ),

                    back:    ( timeFraction ) => 1 + ( 1.70158 + 1 ) * Math.pow ( timeFraction - 1, 3 ) + 1.70158 * Math.pow ( timeFraction - 1, 2 )
                },
                inout:
                {
                    sine:    ( timeFraction ) => - ( Math.cos ( Math.PI * timeFraction ) - 1 ) / 2,

                    cubic:   ( timeFraction ) => ( timeFraction < 0.5 ) ? 4 * timeFraction * timeFraction * timeFraction : 1 - Math.pow ( -2 * timeFraction + 2, 3 ) / 2,

                    quint:   ( timeFraction ) => ( timeFraction < 0.5 ) ? 16 * timeFraction * timeFraction * timeFraction * timeFraction * timeFraction : 1 - Math.pow ( -2 * timeFraction + 2, 5 ) / 2,

                    circ:    ( timeFraction ) => ( timeFraction < 0.5 ) ? ( 1 - Math.sqrt ( 1 - Math.pow ( 2 * timeFraction, 2 ) ) ) / 2 : ( Math.sqrt ( 1 - Math.pow ( -2 * timeFraction + 2, 2 ) ) + 1 ) / 2,

                    elastic: ( timeFraction ) => ( timeFraction === 0 ) ? 0 : ( timeFraction === 1 ) ? 1 : ( timeFraction < 0.5 ) ? - ( Math.pow ( 2, 20 * timeFraction - 10 ) * Math.sin ( ( 20 * timeFraction - 11.125 ) * ( ( 2 * Math.PI ) / 4.5 ) ) ) / 2 : ( Math.pow ( 2, -20 * timeFraction + 10 ) * Math.sin ( ( 20 * timeFraction - 11.125 ) * ( 2 * Math.PI ) / 4.5 ) ) / 2 + 1,

                    quad:    ( timeFraction ) => ( timeFraction < 0.5 ) ? 2 * timeFraction * timeFraction : 1 - Math.pow ( -2 * timeFraction + 2, 2 ) / 2,

                    quart:   ( timeFraction ) => ( timeFraction < 0.5 ) ? 8 * timeFraction * timeFraction * timeFraction * timeFraction : 1 - Math.pow ( -2 * timeFraction + 2, 4 ) / 2,

                    expo:    ( timeFraction ) => ( timeFraction === 0 ) ? 0 : ( timeFraction === 1 ) ? 1 : ( timeFraction < 0.5 ) ? Math.pow ( 2, 20 * timeFraction - 10 ) / 2 : ( 2 - Math.pow ( 2, -20 * timeFraction + 10 ) ) / 2,

                    back:    ( timeFraction ) => ( timeFraction < 0.5 ) ? ( Math.pow ( 2 * timeFraction, 2 ) * ( ( ( 1.70158 * 1.525 ) + 1 ) * 2 * timeFraction - ( 1.70158 * 1.525 ) ) ) / 2 : ( Math.pow ( 2 * timeFraction - 2, 2 ) * ( ( ( 1.70158 * 1.525 ) + 1 ) * ( timeFraction * 2 - 2 ) + ( 1.70158 * 1.525 ) ) + 2 ) / 2
                }
            },
        },
        identifiers:
        {
            qualifier: 'mousemove',
            words:
            [
                'zero',    'one',         'two',         'three',         'four',         'five',         'six',         'seven',         'eight',         'nine',
                'ten',     'eleven',      'twelve',      'thirteen',      'fourteen',     'fifteen',      'sixteen',     'seventeen',     'eighteen',      'nineteen',
                'twenty',  'twenty_one',  'twenty_two',  'twenty_three',  'twenty_four',  'twenty_five',  'twenty_six',  'twenty_seven',  'twenty_eight',  'twenty_nine',
                'thirty',  'thirty_one',  'thirty_two',  'thirty_three',  'thirty_four',  'thirty_five',  'thirty_six',  'thirty_seven',  'thirty_eight',  'thirty_nine',
                'forty',   'forty_one',   'forty_two',   'forty_three',   'forty_four',   'forty_five',   'forty_six',   'forty_seven',   'forty_eight',   'forty_nine',
                'fifty',   'fifty_one',   'fifty_two',   'fifty_three',   'fifty_four',   'fifty_five',   'fifty_six',   'fifty_seven',   'fifty_eight',   'fifty_nine',
                'sixty',   'sixty_one',   'sixty_two',   'sixty_three',   'sixty_four',   'sixty_five',   'sixty_six',   'sixty_seven',   'sixty_eight',   'sixty_nine',
                'seventy', 'seventy_one', 'seventy_two', 'seventy_three', 'seventy_four', 'seventy_five', 'seventy_six', 'seventy_seven', 'seventy_eight', 'seventy_nine',
                'eighty',  'eighty_one',  'eighty_two',  'eighty_three',  'eighty_four',  'eighty_five',  'eighty_six',  'eighty_seven',  'eighty_eight',  'eighty_nine',
                'ninety',  'ninety_one',  'ninety_two',  'ninety_three',  'ninety_four',  'ninety_five',  'ninety_six',  'ninety_seven',  'ninety_eight',  'ninety_nine'
            ],
            actions: [ 'onmousedown', 'onmouseup', 'onmouseover', 'onmouseout', 'onmousemove', 'onclick', 'ondblclick' ],
            symbols: [ '>', ':', '#', '~', '+', '|', '.', ' ' ],
            generativeIndex: 0
        },
        mousetrap:
        {
            cdn: '//cdnjs.cloudflare.com/ajax/libs/mousetrap/1.6.0/mousetrap.min.js',
            hotkeys: [ 'ctrl+g', 'command+g' ]                  // For mousetrap
        },
        about:
        {
            Author:    'Justin Don Byrne',
            Created:   'Aug, 04 2023',
            Library:   'Mouse Move: Automated mouse cursor for web presentation',
            Updated:   'Aug, 24 2023',
            Version:   '0.1.6',
            Copyright: 'Copyright (c) 2023 Justin Don Byrne'
        }
    }

    #tools =
    {
        ////    VALIDATION    //////////////////////////////////

            /**
             * Checks whether the passed id is an XPath
             * @param           {string} id                                 XPath
             * @return          {boolean}                                   True | False
             */
            isXpath:        ( id )  => id.substring ( 0, 2 ).includes ( '/' ),

            /**
             * Checks whether the passed id is a CSS query selector
             * @param           {string} id                                 CSS query selector
             * @return          {boolean}                                   True | False
             */
            isCssSelector:  ( id )  =>
            {
                let _symbols = this.#config.identifiers.symbols


                for ( let _symbol of _symbols )

                    if ( id.includes ( _symbol ) && ! this.#tools.isXpath ( id ) )

                        return true;


                return false;
            },

            /**
             * Checks whether the passed id is an element identifier
             * @param           {string} id                                 Element identifier
             * @return          {boolean}                                   True | False
             */
            isId:           ( id )  =>
            {
                let _symbols = this.#config.identifiers.symbols


                for ( let _symbol of _symbols )

                    if ( id.includes ( _symbol ) || this.#tools.isXpath ( id ) )

                        return false;


                return true;
            },

            /**
             * Checks whether a string is camel case
             * @param           {string} string                             Camel case string
             * @return          {boolean}                                   True | False
             */
            isCamelCase ( string )
            {
                let _camel = /[A-Z]+[^A-Z]+/.test ( string );

                let _char  = string.charAt ( 0 );

                let _lower = ( isNaN ( _char ) ) ? ( _char == _char.toLowerCase ( ) ) : false;


                return ( _camel && _lower );
            },

        ////    GETTERS    /////////////////////////////////////

            /**
             * Returns an element based on its XPath
             * @param           {string} xpath                              XPath
             * @return          {Object}                                    HTML DOM element
             */
            getElementByXPath:  ( xpath )   => document.evaluate ( xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null ).singleNodeValue,

            /**
             * Returns a DOM's element based on its identifier
             * @param           {string} id                                 CSS query, identifier, or XPath
             * @return          {Object}                                    HTML DOM element
             */
            getElement:         ( id )      =>
            {
                if ( this.#tools.isXpath       ( id ) ) return this.#tools.addGeneratedId   ( this.#tools.getElementByXPath ( id ) );

                if ( this.#tools.isCssSelector ( id ) ) return this.#tools.addGeneratedId   ( document.querySelector   ( id ) );

                if ( this.#tools.isId          ( id ) ) return document.getElementById ( id );


                return undefined;
            },

            /**
             * Returns an easing function based on the input type
             * @param           {string} type                               Type of easing animation, in camel case: i.e.: 'easeInSine'
             * @return          {function}                                  Easing function from #config.animation.ease
             */
            getEasing:          ( type )  =>
            {
                /**
                 * Converts camel case string into an <Array>.<String> for bracket notation
                 * @param       {string} string                         Camel case string to split
                 * @return      {Array}                                 Array of strings
                 */
                function stringToBracketNotation ( string )
                {
                    let _bracketEntries = string.split ( /(?=[A-Z])/ );

                        _bracketEntries.shift ( );


                    for ( let _i = 0; _i < _bracketEntries.length; _i++ )

                        _bracketEntries [ _i ] = _bracketEntries [ _i ].toLowerCase ( );


                    return _bracketEntries;
                }

                let _result = ( type != undefined ) ? stringToBracketNotation ( type ) : stringToBracketNotation ( this.animation );


                return this.#config.animation.ease [ _result [ 0 ] ] [ _result [ 1 ] ];
            },

        ////    ADDITIVE    ////////////////////////////////////

            /**
             * Adds a generated id to the passed element
             * @param           {Object} element                            HTML DOM element
             * @return          {Object} element                            HTML DOM element
             */
            addGeneratedId:     ( element ) =>
            {
                let _index      = this.#config.identifiers.generativeIndex;

                let _qualifier  = this.#config.identifiers.qualifier;

                let _numberWord = this.#config.identifiers.words [ _index ];


                element.id = this.sequence [ _index ].id = _qualifier + '_' + _numberWord;


                this.#config.identifiers.generativeIndex++;


                return element;
            },

        ////    STERILIZATION    ///////////////////////////////

            /**
             * Cleans script of it's function wrapper
             * @param           {function} script                   JavaScript function
             * @return          {string}                            Function as a string
             */
            cleanScriptCode:    ( script )  =>
            {
                script = script.toString ( ).replace ( /\([^{]+{/, '' );

                return   script.substring ( 0, script.length - 1 );
            },

        ////    CREATION    ////////////////////////////////////

            /**
             * Embed mousetrap script into DOM
             */
            embedMousetrap:  ( ) =>
            {
                let _hotkeyListener = ( ) =>
                {
                    Mousetrap.bind ( [ 'ctrl+g', 'command+g' ], function ( event )
                    {
                        mouseMove.go ( );
                    });
                }


                let _script      = document.createElement ( 'script' );

                    _script.type = 'text/javascript';

                    _script.text = this.#tools.cleanScriptCode ( _hotkeyListener );


                    _script.onerror = ( ) => console.log ( ' >> [ ERROR ]: Script could not be loaded !'   );

                    _script.onload  = ( ) => console.log ( ' >> [ SUCCESS ]: Script loaded successfully !' );


                    document.body.appendChild ( _script );
            },


            /**
             * Seeds mouse binding mouse events along with unique identifiers
             */
            seedMouseEvents: ( ) =>
            {
                let _seedEvents = ( ) =>
                {
                    for ( let _step of this.sequence )

                        if ( this.#tools.isCssSelector ( _step.id ) || this.#tools.isXpath ( _step.id ) )
                        {
                            let _element    = this.#tools.getElement ( _step.id );

                            let _binds      = _step.bind;

                            let _setActions = this.#config.identifiers.actions;


                            if ( _binds != undefined && ( typeof _binds === 'object' || typeof _binds === 'function' ) )

                                for ( let _bind in _binds )

                                    ( _setActions.includes ( _bind ) )

                                        ? ( ! _element.hasAttribute ( _bind ) )

                                            ? _element.setAttribute ( _bind, this.#tools.cleanScriptCode ( _binds [ _bind ] ) )

                                            : console.log ( ` >> [ ERROR ]: Element ${_element} already has bind: ${_bind} !` )

                                        : console.log ( ` >> [ ERROR ]: Bind "${_bind}" is not a valid mouse action !` );
                        }
                }


                setTimeout ( _seedEvents, 500);
            }
    }

    /**
     * Create a single instance of MouseMove
     * @param           {Array}  sequence                           Pattern or List of DOM identifiers
     * @param           {Cursor} cursor                             Cursor object
     */
    constructor ( sequence, cursor )
    {
        this.sequence = sequence;

        this.cursor   = cursor;

        this.#config.animation.timing = this.#tools.getEasing ( );

        this.config   = this.#config;


        this.#tools.embedMousetrap ( );
    }

    ////    [ CURSOR ]     /////////////////////////////////

        /**
         * Set cursor property
         * @param           {Cursor} cursor                             Cursor object
         */
        set cursor ( cursor )
        {
            this._cursor = ( cursor instanceof Cursor  ) ? cursor     : this._cursor;

            this._cursor = ( this._cursor == undefined ) ? new Cursor : this._cursor;
        }

        /**
         * Get cursor property
         * @return          {Cursor}                                    Cursor object
         */
        get cursor ( )
        {
            return this._cursor;
        }

    ////    [ SEQUENCE ]    ////////////////////////////////

        /**
         * Set sequence property
         * @param           {Array} array                               Array object
         */
        set sequence ( array )
        {
            this._sequence = ( Pattern.isPattern ( array ) ) ? new Pattern ( array ) : ( List.isList ( array ) ) ? new List ( array ) : this._sequence;


            this.#tools.seedMouseEvents ( );
        }

        /**
         * Get sequence property
         * @return          {Array}                                     List or Pattern instance
         */
        get sequence ( )
        {
            return this._sequence;
        }

    ////    [ ANIMATION ]    ///////////////////////////////

        /**
         * Set animation property
         * @param           {string} value                              Animation type within #config.animations
         */
        set animation ( value )
        {
            this._animation = this.#tools.isCamelCase ( value ) ? value : this._animation;
        }

        /**
         * Get animation property
         * @return          {string}                                    Animation type
         */
        get animation ( )
        {
            return this._animation;
        }

    ////    ANIMATION    ///////////////////////////////////

        /**
         * Animate cursor
         * @param           {number} duration                           Duration of the animation
         */
        go ( duration = this.#config.animation.duration )
        {
            ////    FUNCTIONS    ///////////////////////////

                async function _action ( object )
                {
                    if ( 'action' in object )
                    {
                        switch ( object.action )
                        {                       /*          Action Expression 1        */       /*   Action Expression 2   */

                            case 'mousedown':   await _cursor.switchType ( 'handPoint' );       /*        Nothing ...      */   break;

                            case 'mouseup':     await _cursor.switchType (             );       /*        Nothing ...      */   break;

                            case 'mouseover':   /*              Nothing ...            */       /*        Nothing ...      */   break;

                            case 'mouseout':    /*              Nothing ...            */       /*        Nothing ...      */   break;

                            case 'mousemove':   /*              Nothing ...            */       /*        Nothing ...      */   break;

                            case 'click':       await _cursor.switchType (   'click'   );       await _cursor.switchType ( );   break;

                            case 'dblclick':    /*              Nothing ...            */       /*        Nothing ...      */   break;
                        }
                    }
                }

                function _animate ( )
                {
                    ////    CHECK NEXT ELEMENT    //////////////

                    if ( _sequence.next ( ) ) _cursor.nextElement ( _sequence.currentId );

                    else return;

                    ////    LOGIC    ///////////////////////////

                    let _start = performance.now ( );


                    _cursorStart = _cursor.position;            // Set: cursor's initial start position


                    requestAnimationFrame ( function animate ( time )
                    {
                        let _timeFraction = ( time - _start ) / duration;           // _timeFraction goes from 0 to 1

                            _timeFraction = ( _timeFraction > 1 ) ? 1 : _timeFraction;

                        let _progress     = _timing ( _timeFraction );              // calculate the current animation state


                        _draw ( _progress );


                        if ( _timeFraction < 1 ) requestAnimationFrame ( animate );
                    } );
                }

                async function _draw ( progress )
                {
                    let _distance = _cursor.distance * progress;

                        _cursor.position =
                        {
                            x: _cursorStart.x + _distance * Math.cos ( _cursor.angle ),

                            y: _cursorStart.y + _distance * Math.sin ( _cursor.angle )
                        }


                        _cursor.setInteraction ( );


                    if ( progress == 1 )
                    {
                        await _action ( _sequence.current );

                        await _cursor.toNextElement ( _sequence.currentId );

                        _animate ( );
                    }
                }

            ////    LOGIC    ///////////////////////////////

                let _cursor      = this.cursor;

                let _sequence    = this.sequence;

                let _timing      = this.#config.animation.timing;

                let _cursorStart = undefined;


                _animate ( );
        }
}

////    INITIALIZATION  ////////////////////////////////////////////////////////

let initMouseMove = ( pattern, cursor ) =>
{
    if ( typeof MouseMove === 'function' && typeof window.mouseMove  === 'undefined' )

            window.mouseMove = new MouseMove ( pattern, cursor );
}
