/**
 * @class           {Object} Text                               Text object
 */
class Text
{
    constructor ( ) { }

    ////    UTILITIES    ///////////////////////////////////

        /**
         * Writes text within an input element
         * @param           {string} text                               Text output
         * @param           {string} id                                 Input Identifier
         * @param           {number} [timing=120]                       Timing interval for typing
         */
        static write ( text, id, timing = 120 )
        {
            let _element = document.getElementById ( id );

            let _index   = 0;


            function _type ( )
            {
                setTimeout ( function ( )
                {
                    _element.value = text.slice ( 0, _index );


                    if ( _index > text.length ) return; else _index++;


                    _type ( );
                },
                timing );
            }

            _type ( );


            return new Promise ( ( resolve, reject ) => { setTimeout ( ( ) => { resolve ( ); }, ( timing * text.length ) + 500 ); });
        }
}