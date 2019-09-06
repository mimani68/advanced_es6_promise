var { standardPromise } = require('promise-standard-responce');
var { _data } = require('mock_promise');

/**
 * 
 * user method
 * 
 */
let controller = async () => {

    var {
        data,
        error
    } = await standardPromise( _data ).then( x => {
                x.data.time = new Date().toDateString();
                return x;
            })
            .catch( x => {
                x.error.code = 122;
                x.error.time = new Date().toISOString();
                return x;
            })
        
    data  && Object.values(data).length >= 1  ? console.log('[app] '        + JSON.stringify(data) )  : null;
    error && Object.values(error).length >= 1 ? console.log('[app][error] ' + JSON.stringify(error) ) : null;
}


module.exports = {
    controller
}