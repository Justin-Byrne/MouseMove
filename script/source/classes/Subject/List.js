/**
 * @class 			{Object} List 								List object
 * @property 		{number} index 								Index of list
 * @property 		{string} current 							Current data value of list
 * @property 		{number} length 							Length of list
 */
class List extends Array
{
	_index   = 0;
	_current = undefined;

	#length = undefined;

	/**
	 * Creates a list
	 * @param 			{Array} array 								Array list
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
		 * @return 			{string} 									Current data value
		 */
		get current ( )
		{
			return this._current;
		}

	//// 	& EXTEND &    //////////////////////////////////

		/**
		 * Get current DOM identifier
		 * @return 			{string} 									Current DOM identifier
		 */
		get currentId ( )
		{
			return this._current;
		}

	//// 	UTILITIES    ///////////////////////////////////

		/**
		 * Checks whether the passed value is an instance of List
		 * @param 			{List} array 								List instance
		 * @return 			{boolean} 									True | False
		 */
		static isList ( array )
		{
			//// 	FUNCTIONS    ///////////////////////////

			function _isStringArray ( array )
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

			let _stringArray = _isStringArray ( array );

			// @TODO: Validate formatting for ids, classes, or xpath entries


			return ( _List || _Array && _1_Dim && _stringArray );
		}

		/**
		 * Go to next value in list
		 * @note 			increment after completion
		 * @return 			{string} 									Identifier for DOM
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
		 * @note 			increment before completion
		 * @return 			{string} 									Identifier of DOM
		 */
		prev ( )
		{
			return ( this._index == 0 ) ? false : this.current = this [ --this._index ];
		}
}
