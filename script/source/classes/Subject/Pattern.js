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

    #length  = undefined;

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

            else

                return false;


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

        /**
         * Returns the index of the passed id; within the pattern array
         * @param           {string} id                                 Identifier of DOM; XPath, CSS Selector
         */
        indexOfId ( id )
        {
            for ( let [ _index, _entry ] of Object.entries ( this ) )

                if ( id === _entry.id )

                    return _index;


            return -1;
        }

        /**
         * Inserts an object at the index provided
         * @param           {number} index                              Index number to insert into
         * @param           {Object} object                             Implicitly of explicitly declared object; see README.md
         */
        insert ( index, object )
        {
            super.splice ( index, 0, object );

            this.#length += 1;
        }
}
