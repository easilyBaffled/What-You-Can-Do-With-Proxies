import { improve } from '../../proxies/index';

export default log =>
{
    // #### The Builder Again
    const urlBuilder = {
        url: [],
        addParam ( str )
        {
            this.url.push( str );
        },
        getUrl ()
        {
            return '/' + this.url.join( '/' );
        }
    };

    // const builder = improve(urlBuilder);

    // #### Default Handler Proxy
    const improve = targetObject =>
        new Proxy( targetObject, {
            get ( target, prop, proxy )
            {
                const result = Reflect.get( target, prop, proxy );
                return result || ( () => ( target.addParam( prop ), proxy ) );
            }
        } );

    const builder = improve(urlBuilder);
};



//
// export default log =>
// {
//     // #### Back to the Builder
//     const urlBuilder = {
//         url: [],
//         addParam ( str )
//         {
//             this.url.push( str );
//         },
//         getUrl ()
//         {
//             return '/' + this.url.join( '/' );
//         }
//     };
//
//     const builder = improve(urlBuilder);
//
//     // #### Default Handler Proxy
//     const improve = targetObject =>
//         new Proxy( targetObject, {
//             get ( target, prop, proxy )
//             {
//                 const result = Reflect.get( target, prop, proxy );
//                 return result || ( () => ( target.addParam( prop ), proxy ) );
//             }
//         } );
// };
