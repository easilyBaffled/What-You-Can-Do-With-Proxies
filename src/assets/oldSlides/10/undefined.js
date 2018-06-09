export default `
import safe from "../../proxies/undefined";

const isEven = num => !( parseInt( num ) % 2 );

function finagleSomeNumbers ( target ) {
    const result = safe( target )
        .map( JSON.parse )
        .filter( isEven )
        .join( ' | ' );

    return result === Undefined
        ? ( console.log( result.stack ), '' )
        : result;
}

finagleSomeNumbers( [ "1", "2", "3", "4" ] );
// -> 2 | 4

finagleSomeNumbers( {} );
// -> ''
finagleSomeNumbers( [] );
// -> ''
finagleSomeNumbers( [ 1, 2, 3 ] );
// -> ''
finagleSomeNumbers( [ 'a', 'b' ] );
// -> ''

export default safe;
`;