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
