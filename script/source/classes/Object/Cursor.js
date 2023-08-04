/**
 * @class 			{Object} Cursor 							Cursor object
 * @property 		{Point}  position 							X & Y axis coordinates
 * @property 		{string} id 								Cursor's DOM identifier
 * @property 		{string} type 								Type of cursor, within #_cursors
 * @property        {Object} config 							Cursor configuration
 */
class Cursor
{
	_id       = 'ui-cursor';
	_type     = 'default';
	_position = new Point;

	#_config =
	{
		calculations:
		{
			angle:    undefined,
			distance: undefined
		},
		actions:
		{
			avoid: [ '', 'ui-cursor', 'canvas', 'ui-overlay', 'canvas-underlay' ],
			over:  [ ]
		},
		presentation:
		{
			default:
			{
				data: 'data:image/png;base64,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',
				css:  `position: absolute; top: ${( window.innerHeight / 2 )}px; left: ${( window.innerWidth / 2 )}px; z-index: 10; width: 15px; height: 23px; aspect-ratio: auto 15 / 23;`
			},
			hand:
			{
				data: 'data:image/png;base64,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',
				css:  `position: absolute; top: ${( window.innerHeight / 2 )}px; left: ${( window.innerWidth / 2 )}px; z-index: 10; width: 17px; height: 18px; aspect-ratio: auto 17 / 18;`
			}
		}
	}

	/**
	 * Create a single instance of a Cursor
	 * @param 			{string} position 							X & Y axis coordinates
	 * @param 			{string} id 								Cursor's DOM identifier
	 * @param 			{string} type 								Type of cursor, within #_cursors
	 */
	constructor ( position = new Point, id, type )
	{
		this.position = position;

		this.id 	  = id;

		this.type     = ( type === undefined ) ? this._type : type;


		this.#_createCursor ( this._id, this._type );
	}

	//// 	[ ID ]    //////////////////////////////////////

		/**
		 * Set id property
		 * @param 			{string} id 								Identifier of Cursor
		 */
		set id ( id )
		{
			this._id = ( document.getElementById ( id ) != null ) ? id : this._id;
		}

		/**
		 * Get id property
		 * @return 			{string} 									Identifier of Cursor
		 */
		get id ( )
		{
			return this._id;
		}

	//// 	[ TYPE ]    ////////////////////////////////////

		/**
		 * Set type property
		 * @param 			{string} value 								Type property
		 */
		set type ( value )
		{
			this._type = ( value in this.#_config.presentation ) ? this.#_config.presentation [ value ] : this._type;
		}

		/**
		 * Get type property
		 * @param 			{string} 									Type property
		 */
		get type ( )
		{
			return this._type;
		}

	//// 	[ POSITION ]    ////////////////////////////////

		/**
		 * Set position property
		 * @param 			{Point} point 								X & Y coordinates
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
		 * @return 			{Point} 									X & Y coordinates
		 */
		get position ( )
		{
			return this._position;
		}

	//// 	[ ANGLE ]    ///////////////////////////////////

		/**
		 * Set angle property
		 * @param 			{string} id 								Identifier of element
		 */
		set angle ( id )
		{
			if ( document.getElementById ( id ) != null )
			{
				let _element = document.getElementById ( id );

				let _destination =
				{
					x: this.#_toNumber ( _element.style.left ) + ( this.#_toNumber ( _element.style.width )  / 2 ),

					y: this.#_toNumber ( _element.style.top  ) + ( this.#_toNumber ( _element.style.height ) / 2 )
				}


		  		this.#_config.calculations.angle = Math.atan2 ( _destination.y - this.position.y, _destination.x - this.position.x );
			}
			else

				console.log ( ` >> [ ERROR ]: Id ${id} is not a valid identifier !` );
		}

		/**
		 * Get angle property
		 * @return 			{number} 									Angle property
		 */
		get angle ( )
		{
			return this.#_config.calculations.angle;
		}

	////    [ DISTANCE ]    ////////////////////////////////

		/**
		 * Set distance property
		 * @param 			{string} id 								Identifier of element
		 */
		set distance ( id )
		{
			if ( document.getElementById ( id ) != null )
			{
				let _element = document.getElementById ( id );

				let _point =
				{
					x: this.#_toNumber ( _element.style.left ) + ( this.#_toNumber ( _element.style.width  ) / 2 ),

					y: this.#_toNumber ( _element.style.top  ) + ( this.#_toNumber ( _element.style.height ) / 2 )
				}


				this.#_config.calculations.distance = Math.sqrt ( ( Math.pow ( _point.x - this.position.x , 2 ) ) + ( Math.pow ( _point.y - this.position.y, 2 ) ) );
			}
			else

				console.log ( ` >> [ ERROR ]: Id ${id} is not a valid identifier !` );
		}

		/**
		 * Get distance property
		 * @return 			{number} 									Distance from last distance check
		 */
		get distance ( )
		{
			return this.#_config.calculations.distance;
		}

	////    ( PRIVATE )    /////////////////////////////////

		/**
		 * Converts CSS string value to number/integer
		 * @param 			{string} value 								CSS string value in pixels
		 * @return 			{number} 									Number value of parsed value
		 */
		#_toNumber ( value )
		{
			return Number ( value.replace ( /px$/, '' ) );
		}

		/**
		 * Create and embeds cursor within DOM
		 * @param 			{string} id 								Identifier of cursor
		 * @param 			{string} type 								Cursor type within #_config.presentation
		 */
		#_createCursor ( id, type )
		{
			let _image = document.createElement ( 'img' );

				_image.id            = id;

				_image.src   		 = type.data

				_image.style.cssText = type.css


				_image.onerror 		 = ( ) => console.log ( ' >> [ ERROR ]: Image could not be loaded !'   );

				_image.onload  		 = ( ) => console.log ( ' >> [ SUCCESS ]: Image loaded successfully !' );


			document.body.insertBefore ( _image, document.body.firstChild );

			////////////////////////////////////////////////////

			this.position =
			{
				x: this.#_toNumber ( _image.style.left ),

				y: this.#_toNumber ( _image.style.top  )
			}
		}

		/**
		 * Actions executed after a rollover event
		 * @param 			{HTMLElement} element 						HTML DOM element
		 */
		#_rollover ( element )
		{
			element.onmouseover ( );

			this.#_config.actions.over.push ( element );
		}

		/**
		 * Actions executed after a rollout event
		 * @param 			{HTMLElement} element 						HTML DOM element
		 */
		#_rollout ( element )
		{
			element.onmouseout ( );

			this.#_config.actions.over.shift ( );
		}

		/**
		 * Initiates any mouse actions associated with the passed 'element'
		 * @param 			{HTMLElement} element 						HTML DOM element
		 */
		#_mouseActions ( element )
		{
			if ( mouseMove.sequence.constructor.name === 'Pattern' )
			{
				let _currentData = mouseMove.sequence.current;


				switch ( _currentData.action )
				{
					case 'none': 	/*     DO NOTHING     */ 	break;

					case 'click': 	element.onclick     ( ); 	break;

					case 'hold': 	element.onmousedown ( ); 	break;

					case 'release': element.onmouseup   ( ); 	break;

					default:

						console.log ( ` >> [ ERROR ]: Action ${_currentData.action} is not a valid action !` );
				}
			}
		}

	//// 	UTILITIES    ///////////////////////////////////

		/**
		 * Checks whether the passed value is an instance of Cursor
		 * @param 			{Cursor}  value 							Cursor instance
		 * @return 			{boolean} 									True | False
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
		 * @param 			{string} id 								Identifier of element within DOM
		 */
		nextElement ( id )
		{
			this.distance = id;

			this.angle    = id;
		}

		/**
		 * Sends cursor to the location of the next element
		 * @param 			{string} id 								Identifier of element within DOM
		 */
		toNextElement ( id )
		{
			let _element = document.getElementById ( id );


			if ( document.getElementById ( id ) != null )
			{
				let _element = document.getElementById ( id );

				this.position =
				{
					x: this.#_toNumber ( _element.style.left ) + ( this.#_toNumber ( _element.style.width  ) / 2 ),

					y: this.#_toNumber ( _element.style.top  ) + ( this.#_toNumber ( _element.style.height ) / 2 )
				}


				this.#_mouseActions ( _element );
			}
		}

		/**
		 * Set's this cursor's mouse interaction type; with other DOM elements
		 */
		setInteraction ( )
		{
			let _elements = document.elementsFromPoint ( this.position.x, this.position.y );

			let _avoid    = this.#_config.actions.avoid;

			let _wasOver  = this.#_config.actions.over;


			for ( let _element of _elements )

				if ( ! _avoid.includes ( _element.id ) )

					if ( ! _wasOver.includes ( _element ) )

						this.#_rollover ( _element );

					else

						if ( _wasOver.length > 1 )

							for ( let _over of _wasOver )

								this.#_rollout ( _over );
		}
}
