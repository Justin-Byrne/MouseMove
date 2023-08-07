/**
 * @class 			{Object}       MouseMove 					MouseMove utilization class
 * @property 		{Pattern|List} sequence 					Pattern or List object
 * @property 		{Cursor}       cursor 						Cursor object
 * @property 		{string}       animation 					Cursor linear animation
 * @property 		{Object}       config 						General configuration
 */
class MouseMove
{
	_sequence  = undefined;
	_cursor    = undefined;
	_animation = 'quad';

	#_config =
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
			constant:  undefined
		},
		input:
		{
			hotkeys: [ 'ctrl+g', 'command+g' ] 					// For mousetrap
		},
		mousetrap:
		{
			cdn: '//cdnjs.cloudflare.com/ajax/libs/mousetrap/1.6.0/mousetrap.min.js'
		},
		about:
	    {
	        Author:    'Justin Don Byrne',
	        Created:   'Aug, 04 2023',
	        Library:   'Mouse Move: Automated mouse cursor for web presentation',
	        Updated:   'Aug, 07 2023',
	        Version:   '0.1.2',
	        Copyright: 'Copyright (c) 2023 Justin Don Byrne'
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


		this.#_config.animation.constant = this.#_config.animations [ this._animation ];

		this.config   = this.#_config;


		this.#_embedMousetrap ( );
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
		 * @param 			{string} value 								Animation type within #_config.animations
		 */
		set animation ( value )
		{
			this._animation = ( value in Object.keys ( this.#_config.animations ) ) ? value : this._animation
		}

		/**
		 * Get animation property
		 * @return 			{string} 									Animation type
		 */
		get animation ( )
		{
			return this._animation;
		}

	//// 	( PRIVATE )    /////////////////////////////////

		/**
		 * Embed mousetrap script into DOM
		 */
		#_embedMousetrap ( )
		{
			//// 	FUNCTIONS    ///////////////////////////

			function _cleanScriptCode ( script )
			{
			    script = script.toString ( ).replace ( /\([^{]+{/, '' );

			    return   script.substring ( 0, script.length - 1 );
			}

			let _hotkeyListener = ( ) =>
			{
				Mousetrap.bind ( [ 'ctrl+g', 'command+g' ], function ( event )
				{
					mouseMove.go ( );
				});
			}

			//// 	LOGIC    ///////////////////////////////

    		let _script      = document.createElement ( 'script' );

        		_script.type = 'text/javascript';

            	_script.text = _cleanScriptCode ( _hotkeyListener );


        		_script.onerror = ( ) => console.log ( ' >> [ ERROR ]: Script could not be loaded !'   );

        		_script.onload  = ( ) => console.log ( ' >> [ SUCCESS ]: Script loaded successfully !' );


        		document.body.appendChild ( _script );
        }

	//// 	ANIMATE    /////////////////////////////////////

		/**
		 * Animate cursor
		 * @param 			{number}   duration 						Duration of the animation
		 */
		go ( duration = this.#_config.animation.duration )
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

			let _animation = this.#_config.animation;


			_animate ( );
		}
}

////    INITIALIZATION  ////////////////////////////////////////////////////////

let initMouseMove = ( pattern, cursor ) =>
{
    if ( typeof MouseMove === 'function' && typeof window.mouseMove  === 'undefined' )

        window.mouseMove = new MouseMove ( pattern, cursor );
}
