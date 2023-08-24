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
