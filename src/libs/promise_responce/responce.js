/**
 * Create Standard Output of an promise files
 * 
 * @param { function } promisify_fn 
 */
function standardPromise( promisify_fn ) {

    return promisify_fn.then( value => {
            x           = { data: value };
            x.success   = true;
            x.data.test = true;
            return x;
        }).catch(error => {
            x                   = { error: {} };
            x.success           = false;
            x.error.code        = 120;
            x.error.message     = error.message;
            true ? x.error.code = 121 : null
            return Promise.reject(x);
        });
}

module.exports = {
    standardPromise
}