/**
 * @class 			{Object} Cursor 							Cursor object
 * @property 		{Point}  position 							X & Y axis coordinates
 * @property 		{string} id 								Cursor's DOM identifier
 * @property 		{string} type 								Type of cursor
 * @property        {Object} config 							Internal private configuration
 * @property 		{Object} tools 								Internal private utility methods
 */
class Cursor
{
	_id       = 'ui-cursor';
	_type     = 'default';
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
			default:
			{
				data: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAABcCAMAAAABI/YnAAACXlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD19fUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD7+/sAAAAAAAAAAAD9/f0AAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAAD6+vrU1NQBAQEAAAD39/cAAAABAQH9/f35+fkAAAD39/fo6OiEhIR1dXUCAgIAAADg4OD6+vr6+vp+fn55eXlsbGxlZWUAAAADAwMAAADr6+vY2NiDg4NoaGgBAQECAgIAAAD39/fKysrw8PDt7e3Pz8/d3d3h4eHq6uq/v7+rq6sAAAB4eHiKioqBgYGPj48AAACamppxcXFvb28AAABNTU2hoaFqamoJCQkxMTERERHCwsLk5OTb29v5+fmHh4fFxcW8vLysrKx7e3vl5eXV1dW7u7upqanS0tLf399dXV2UlJQ2NjYAAAC1tbXd3d2enp6IiIgdHR2WlpaLi4tCQkKJiYlaWlpoaGh/f38oKCgZGRlJSUmWlpbPz8+0tLRVVVUjIyN/f39DQ0MnJyd3d3cdHR2GhoYREREFBQWbm5uUlJSkpKQAAAD///8fHx9HR0f+/v7y8vLd3d0UFBT4+PiWlpZ2dnZOTk4qKioHBwcEBATt7e3p6enm5ubBwcG4uLiJiYk7OzsZGRn6+vrj4+PX19fR0dHNzc2mpqajo6Oenp6Pj4+Dg4N8fHxpaWlmZmZiYmJeXl5ZWVlTU1M/Pz83NzczMzMtLS0lJSUhISELCwvIyMixsbGrq6t6enpwcHBWVlZLS0tKSkoODg6yWay2AAAAknRSTlMABAkmFRE9GV31NwdLDA9jHmATISQqL/1SOhz+VUVCNEkxWE4t++Z2W/pxbP36QPTvqaB9aP728aWjm5eQgTLz47iZenhD/vHw7uvg2c/Nt66qqKakoJ6enZeVk4uIcFDz6+vh4d7e3t3c2tHOzMfFxMPCwb+/u7aysq2rp6WbmpiMi4mHh4J+fnx6c2tpXlpTQAXFCucAAATpSURBVFjD7dhlt9MwGAdwunZCd9uVytjGlA02GO7u7u7u7u7umuLu7u6u34onXdrBCQwCvOEc/i9223v227rkSZO03L8fjuQ3td/lkiSXn3h2LbtV1S3DB/yOltzCXkWJeN2Si2PnLtmrjd8dNHhFkNk9J6mK0bjRDo+Y0X7D+2UvLzY2G20rq9VK97J6zuVWgvHaptloRDSW4Fk9cC1RBhx8LsnqgauaGCpvQqo1r8DsgevhKHDiRTYPnPdUBk58WcFzv8wF3pPDvGHRu8EzcB/mz67BS812jmfk+w5fpTwLR5coz8TRpUPYN3M8I0f7GlKehaOXV+CoStEzcvTiLOVZODpxBvshjmfjtGfk6Plp7Ac7npGjZwcpz8LRU8vXczwjRxexr1j0jBw96UR5Fo72H7F8wPaMHH2iPBNHxy9j39TxjBw9rkR5Fo4eUZ6Jo4cHKM/C0X3LN3E8I0f3TMqzcPSe8kwcHcO+RtEzcnTX8v0dz8jRHcozcXTB8nUdz8jRbcozcXQU+0pFz8jRLcrTnMUzcnTD8v3I+oGZn3pb8L5kQhdkP/cL/MT+r3L8EPYHBlSOBxVV+hX+waRzYBC5/J/zU2e/54d7jIi7FP/8db3SfkNGKcWfnL1EjvZVghVX587dulUtpE2b7j169Oy5pxS/d9m8ax+/Mc0x8/oMbDGyfvsO2Wz16vlALh2HpecP+SlcoFdO2bMFnMwd2KJ9vkKucjQaCqXLYp5WhiJIP+CHz5k4xxEJ9NbkofUbRJO1wmFRFBOtgoYeEcjGheIn4O0457+62VRbk/UlxQyvaxDYtAhuoil+/KDdui8IPwxz1ZxsLh7UvILqhsiy5LI0zd8dsCyeXW8jkpum2bq9L55RVGAAIdx3R9zJGxauNGUCvJ5+ZU/1cNI3kExBX33laH7xuqWrze6zuCL8fYBIYKVctXpI1Emd/4gXfnbrZS1aDJ0EB9edmQZOhlWIG17ZX4pbGbe6ZYds/RX48Cnhr+Bzp+fTCY2UCs1zNp84snrA5wtkx8Lxza9udDU35TyGIHGlNyMzWuYrl8Vi6cASODlymPDncLKwQRluPK7EVqjiovoNQvFEsJUntL0anB9DJOegSbLRMG99Pb2PE9N4H1d7ZTaQDmd0RQ929PXCmxubP7L6LpaJwD2K5koqBrzr2nwuKcJoUL26mN5oQj4SfhJWuW2g7zTVRXG/HDE8jc2po3yhjngkSpI7kolV6E4K35mlhvmg7ySq7/ySoKcaLxhdFgsHdS+UFv5HODoA19/Lr+4avUjj0Vcf4dfDWEwZijUQrU1xciduzQuI5Dwscbf+4Ool1avxvK54VcmaPjhJgL6cjwv/ZGHUHcVLrN6VPd9pe/g2yS14YTjKkp+zWzOR3oJH30PccMcK5dyFcNq7JGsUc5zdHF4j7psG5DUsDg+ZJOvCFqc9VxjF327KV2Hy4JyNuw4anaB+uw0g33ZmMBboYhZTZ2k+WivjzA6lgxsvHO1dxG3hZtkxpQmkdejQpZgcVcPGLatXCNVK/fqDET/++tBMGwdCMdHQrKpgeJ6yGfDyDvkKUVyQEbWEpmtJ0FK1Zg3f5aucBsxHBFwVHMujKD0o1orHPTBBKILbKshfDq58QeENw+C1iIOZvAy1bBUzwYzej2v5D54DcvaM9D9/PV8Al+TvAO+eQ9MAAAAASUVORK5CYII=',
				css:  `position: absolute; top: ${( window.innerHeight / 2 )}px; left: ${( window.innerWidth / 2 )}px; z-index: 10; width: 15px; height: 23px; aspect-ratio: auto 15 / 23;`
			},
			inversion:
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

	#tools =
	{
		//// 	CONVERSION    //////////////////////////////////

			/**
			 * Converts CSS string value to number/integer
			 * @param 			{string} value 								CSS string value in pixels
			 * @return 			{number} 									Number value of parsed value
			 */
			pxToNumber: 	( value ) 	=> Number ( value.replace ( /px$/, '' ) ),

		//// 	GETTERS    /////////////////////////////////////

			/**
			 * Gets the center point of an element
			 * @param  			{Object} element 							HTML DOM element
			 * @return 			{Point}         							X & Y Coordinates
			 */
			getCenterPoint: ( element ) =>
			( {
			      x: element.getBoundingClientRect ( ).left + ( element.getBoundingClientRect ( ).width  / 2 ),

			      y: element.getBoundingClientRect ( ).top  + ( element.getBoundingClientRect ( ).height / 2 )
			} ),

		//// 	MOUSE EVENTS    ////////////////////////////////

			/**
			 * Actions executed after a mouseover event
			 * @param 			{HTMLElement} element 						HTML DOM element
			 */
			mouseover: 		( element ) 		=>
			{
				if ( element.getAttribute ( `onmouseover` ) != null )
				{
					element.onmouseover ( );

					this.#config.cache.over.push ( element );
				}
			},

			/**
			 * Actions executed after a mouseout event
			 * @param 			{HTMLElement} element 						HTML DOM element
			 */
			mouseout: 		( element ) 		=>
			{
				if ( element.getAttribute ( `onmouseout` ) != null )
				{
					element.onmouseout ( );

					this.#config.cache.over.shift ( );
				}
			},

			/**
			 * Initiates any mouse actions associated with the passed 'element'
			 * @param 			{HTMLElement} element 						HTML DOM element
			 */
			mouseAction: 	( element ) 		=>
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

		//// 	CREATION    ////////////////////////////////////

			/**
			 * Create and embeds cursor within DOM
			 * @param 			{string} id 								Identifier of cursor
			 * @param 			{string} type 								Cursor type within #config.presentation
			 */
			createCursor: 	( id, type ) 	=>
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
					x: this.#tools.pxToNumber ( _image.style.left ),

					y: this.#tools.pxToNumber ( _image.style.top  )
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


		this.#tools.createCursor ( this._id, this._type );
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
			this._type = ( value in this.#config.presentation ) ? this.#config.presentation [ value ] : this._type;
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
		set angle ( id ) 	// @note: calculation is good
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
		 * @return 			{number} 									Angle property; in radians
		 */
		get angle ( )
		{
			return this.#config.calculations.angle;
		}

	////    [ DISTANCE ]    ////////////////////////////////

		/**
		 * Set distance property
		 * @param 			{string} id 								Identifier of element
		 */
		set distance ( id ) 	// @note: calculation is good
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
		 * @return 			{number} 									Distance from last distance check
		 */
		get distance ( )
		{
			return this.#config.calculations.distance;
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


			if ( _element != null )
			{
				this.position = this.#tools.getCenterPoint ( _element );

				this.#tools.mouseAction ( _element );
			}
		}

		/**
		 * Switch cursor's visual type
		 * @param  			{string} type     						    Cursor type within #config.presentation
		 */
		switchType ( type = 'default' )
		{
			let _delay = 200;

			let _cursor = document.getElementById ( this.id );

				this.type   = type;

				_cursor.src = this.type.data;


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
