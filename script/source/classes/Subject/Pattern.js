/**
 * @class 			{Object} Pattern 							Pattern object
 * @property 		{number} index 								Index of list
 * @property 		{string} current 							Current data value of list
 * @property 		{number} length 							Length of list
 */
class Pattern extends Array
{
	_index   = 0;
	_current = undefined;

	#_length = undefined;

	/**
	 * Creates a list
	 * @param 			{Array} array 								Array list
	 */
	constructor ( array )
	{
		super ( );

		////    SORT ARRAY    //////////////////////////////

		if ( Pattern.isPattern ( array ) )
		{
			for ( let element of array ) this.push ( element );


			this.#_length = this.length - 1;
		}

		this.current = this [ this.index ];
	}

	////    [ INDEX ]    ///////////////////////////////////

		/**
		 * Set index property
		 * @param 			{number} value 								Index value
		 */
		set index ( value )
		{
			this._index = Number.isInteger ( value ) ? this [ value ] : this._index;
		}

		/**
		 * Get index property
		 * @return 			{number} 									Index value
		 */
		get index ( )
		{
			return this._index;
		}

	////    [ CURRENT ]    /////////////////////////////////

		/**
		 * Set current value
		 * @param 			{string} value 								Current data value
		 */
		set current ( value )
		{
			this._current = this.includes ( value ) ? value : this._current;
		}

		/**
		 * Get current value
		 * @return 			{object} 									Current data value
		 */
		get current ( )
		{
			return this._current;
		}

	////    & EXTEND &    //////////////////////////////////

		/**
		 * Get current DOM identifier
		 * @return 			{string} 									Current DOM Identifier
		 */
		get currentId ( )
		{
			return this._current.id;
		}

		/**
		 * Get current action
		 * @return 			{string} 									Current action
		 */
		get currentAction ( )
		{
			return this._current.action;
		}

	//// 	UTILITIES    ///////////////////////////////////

		/**
		 * Checks whether the passed value is an instance of Pattern
		 * @param 			{Pattern} arrayOfObjects 					Pattern instance
		 * @return 			{boolean} 									True | False
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
	                    let _keys   = ( Object.keys ( _object ).length == 2 );

	                    let _id     = ( _object.hasOwnProperty ( 'id'     ) ) ? ( typeof _object.id     === 'string' ) : false;

	                    let _action = ( _object.hasOwnProperty ( 'action' ) ) ? ( typeof _object.action === 'string' ) : false;


	                    _results = ( _keys && _id && _action );
	                }
	                else

	                    return false;


	                if ( ! _results ) return false;
	            }


	        return true;
	    }

		/**
		 * Go to next value in list
		 * @note 			increment after completion
		 * @return 			{string} 									Identifier for DOM
		 */
		next ( )
		{
			if ( this._index > this.#_length )
			{
				this._index = this.#_length;

				return false;
			}
			else

				return this.current = this [ this._index++ ];
		}

		/**
		 * Go to previous value in list
		 * @note 			increment before completion
		 * @return 			{string} 									Identifier of DOM
		 */
		prev ( )
		{
			return ( this._index == 0 ) ? false : this.current = this [ --this._index ];
		}
}
