/**
 * @class 			{Object}       MouseMove 					MouseMove utilization class
 * @property 		{Pattern|List} sequence 					Pattern or List object
 * @property 		{Cursor}       cursor 						Cursor object
 * @property 		{string}       animation 					Cursor linear animation
 * @property 		{Object}       config 						General configuration
 * @property 		{Object} 	   tools 						Internal private utility methods
 */
class MouseMove
{
	_sequence  = undefined;
	_cursor    = undefined;
	_animation = 'quad';

	#config =
	{
		domWindow:
		{
			width:     window.innerWidth  - 18,
	        height:    window.innerHeight - 4,
	        xCenter: ( window.innerWidth  / 2 ),
	        yCenter: ( window.innerHeight / 2 ),
		},
		animations:
		{
			quad:    ( timeFraction ) 			=> Math.pow ( timeFraction, 2 ),
			arc:     ( timeFraction ) 			=> 1 - Math.sin ( Math.acos ( timeFraction ) ),
			back:    ( timeFraction, x = 1.5 ) 	=> Math.pow ( timeFraction, 2 ) * ( ( x + 1 ) * timeFraction - x ),
			elastic: ( timeFraction, x = 1.5 )	=> Math.pow ( 2, 10 * ( timeFraction - 1 ) ) * Math.cos ( 20 * Math.PI * x / 3 * timeFraction )
		},
		animation:
		{
			duration:  2000,
			framerate: 60,
			increment: 0.00034,
			constant:  undefined 	// Note: defined at creation
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
			hotkeys: [ 'ctrl+g', 'command+g' ] 					// For mousetrap
		},
		about:
	    {
	        Author:    'Justin Don Byrne',
	        Created:   'Aug, 04 2023',
	        Library:   'Mouse Move: Automated mouse cursor for web presentation',
	        Updated:   'Aug, 15 2023',
	        Version:   '0.1.4',
	        Copyright: 'Copyright (c) 2023 Justin Don Byrne'
	    }
	}

	#tools =
	{
		////    VALIDATION    //////////////////////////////////

			/**
			 * Checks whether the passed id is an XPath
			 * @param  			{string} id 								XPath
			 * @return 			{boolean}    								True | False
			 */
			isXpath: 		( id ) 	=> id.substring ( 0, 2 ).includes ( '/' ),

			/**
			 * Checks whether the passed id is a CSS query selector
			 * @param 			{string} id 								CSS query selector
			 * @return 			{boolean} 									True | False
			 */
			isCssSelector: 	( id ) 	=>
			{
				let _symbols = this.#config.identifiers.symbols


		        for ( let _symbol of _symbols )

		            if ( id.includes ( _symbol ) && ! this.#tools.isXpath ( id ) )

		                return true;


		        return false;
			},

			/**
			 * Checks whether the passed id is an element identifier
			 * @param 			{string} id 								Element identifier
			 * @return 			{boolean} 									True | False
			 */
			isId: 			( id ) 	=>
			{
				let _symbols = this.#config.identifiers.symbols


				for ( let _symbol of _symbols )

			        if ( id.includes ( _symbol ) || this.#tools.isXpath ( id ) )

			            return false;


			    return true;
			},

		////    GETTERS    /////////////////////////////////////

			/**
			 * Returns an element based on its XPath
			 * @param  			{string} xpath 								XPath
			 * @return 			{Object}      								HTML DOM element
			 */
			getElementByXPath: 	( xpath ) 	=> document.evaluate ( xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null ).singleNodeValue,

			/**
			 * Returns a DOM's element based on its identifier
			 * @param  			{string} id 								CSS query, identifier, or XPath
			 * @return 			{Object}    								HTML DOM element
			 */
			getElement: 		( id ) 		=>
			{
				if ( this.#tools.isXpath       ( id ) ) return this.#tools.addGeneratedId   ( this.#tools.getElementByXPath ( id ) );

				if ( this.#tools.isCssSelector ( id ) ) return this.#tools.addGeneratedId   ( document.querySelector   ( id ) );

				if ( this.#tools.isId          ( id ) ) return document.getElementById ( id );


				return undefined;
			},

		////    ADDITIVE    ////////////////////////////////////

			/**
			 * Adds a generated id to the passed element
			 * @param  			{Object} element 							HTML DOM element
			 * @return 			{Object} element 							HTML DOM element
			 */
			addGeneratedId: 	( element ) =>
			{
				let _index      = this.#config.identifiers.generativeIndex;

				let _qualifier  = this.#config.identifiers.qualifier;

				let _numberWord = this.#config.identifiers.words [ _index ];


				element.id = this.sequence [ _index ].id = _qualifier + '_' + _numberWord;


				this.#config.identifiers.generativeIndex++;


				return element;
			},

		//// 	STERILIZATION    ///////////////////////////////

			/**
			 * Cleans script of it's function wrapper
			 * @param  			{function} script 					JavaScript function
			 * @return 			{string}        					Function as a string
			 */
			cleanScriptCode: 	( script ) 	=>
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

			seedMouseEvents: ( ) =>
			{
				let _seedEvents = ( ) =>
				{
					for ( let _step of this.sequence )

						if ( this.#tools.isCssSelector ( _step.id ) || this.#tools.isXpath ( _step.id ) )
						{
							let _element    = this.#tools.getElement ( _step.id );

							let _binds      = _step.bind;

							// let _actions    = _step.action;

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
	 * @param 			{Array}  sequence 							Pattern or List of DOM identifiers
	 * @param 			{Cursor} cursor 							Cursor object
	 */
	constructor ( sequence, cursor )
	{
		this.sequence = sequence;

		this.cursor   = cursor;


		this.#config.animation.constant = this.#config.animations [ this._animation ];

		this.config   = this.#config;


		this.#tools.embedMousetrap ( );
	}

	//// 	[ CURSOR ]     /////////////////////////////////

		/**
		 * Set cursor property
		 * @param           {Cursor} cursor 							Cursor object
		 */
		set cursor ( cursor )
		{
			this._cursor = ( cursor instanceof Cursor  ) ? cursor     : this._cursor;

			this._cursor = ( this._cursor == undefined ) ? new Cursor : this._cursor;
		}

		/**
		 * Get cursor property
		 * @return 			{Cursor} 									Cursor object
		 */
		get cursor ( )
		{
			return this._cursor;
		}

	////	[ SEQUENCE ]    ////////////////////////////////

		/**
		 * Set sequence property
		 * @param 			{Array} array 								Array object
		 */
		set sequence ( array )
		{
			this._sequence = ( Pattern.isPattern ( array ) )

							     ? new Pattern ( array )

							     : ( List.isList ( array ) )

							           ? new List ( array )

							           : this._sequence;


			this.#tools.seedMouseEvents ( );
		}

		/**
		 * Get sequence property
		 * @return 			{Array} 									List or Pattern instance
		 */
		get sequence ( )
		{
			return this._sequence;
		}

	//// 	[ ANIMATION ]    ///////////////////////////////

		/**
		 * Set animation property
		 * @param 			{string} value 								Animation type within #config.animations
		 */
		set animation ( value )
		{
			this._animation = ( value in Object.keys ( this.#config.animations ) ) ? value : this._animation
		}

		/**
		 * Get animation property
		 * @return 			{string} 									Animation type
		 */
		get animation ( )
		{
			return this._animation;
		}

	//// 	ANIMATION    ///////////////////////////////////

		/**
		 * Animate cursor
		 * @param 			{number} duration 							Duration of the animation
		 */
		go ( duration = this.#config.animation.duration )
		{
			////    FUNCTIONS    ///////////////////////////

			function _draw ( progress )
			{
				let _power = _animation.framerate * ( _animation.increment * duration );

				_cursor.position =
				{
					x: _cursor.position.x + ( _cursor.distance * Math.cos ( _cursor.angle ) ) * progress / _power,

					y: _cursor.position.y + ( _cursor.distance * Math.sin ( _cursor.angle ) ) * progress / _power
				}


				_cursor.setInteraction ( );


				if ( progress == 1 )
				{
					_cursor.toNextElement ( _sequence.currentId );

					_animate ( );
				}
			}

			function _animate ( )
			{
				////    CHECK NEXT ELEMENT    //////////////

				if ( _sequence.next ( ) ) _cursor.nextElement ( _sequence.currentId );

				else return;

				//// 	LOGIC    ///////////////////////////

				let _start = performance.now ( );


			    requestAnimationFrame ( function animate ( time )
			    {
			        let _timeFraction = ( time - _start ) / duration; 			// _timeFraction goes from 0 to 1

			        	_timeFraction = ( _timeFraction > 1 ) ? 1 : _timeFraction;


			        let _progress 	  = _animation.constant ( _timeFraction );  // calculate the current animation state


			        _draw ( _progress );


			        if ( _timeFraction < 1 ) requestAnimationFrame ( animate );
			  	} );
			}

			////    LOGIC    ///////////////////////////////

			let _cursor    = this.cursor;

			let _sequence  = this.sequence;

			let _animation = this.#config.animation;


			_animate ( );
		}
}

////    INITIALIZATION  ////////////////////////////////////////////////////////

let initMouseMove = ( pattern, cursor ) =>
{
    if ( typeof MouseMove === 'function' && typeof window.mouseMove  === 'undefined' )

  			window.mouseMove = new MouseMove ( pattern, cursor );
}
