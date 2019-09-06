
/**
 * @returns number beetwen 0 and 1
 */
let random = () => Math.floor(Math.random() * 10)

/**
 * @returns source data data provide in future
 */
let _data = new Promise((res, rej)=>{
    random() == 0 ? res({title: 'success'}) : rej({message: 'database connection failed'});
});

/**
 * 
 * user method
 * 
 */
let controller = async () => {
    var {
        data,
        error
    } = await _data
        .then(x => {
            x.data = {};
            x.data.id = 1;
            return x;
        }).then(x => {
            x.data.title = 'new success';
            return x;
        }).then(x => {
            x.data.status = true;
            return x;
        }).catch(x => {
            x.error = {
                success: false,
                code: 123,
                message: x.message
            }
            return x;
        })
        
    data  && Object.values(data).length >= 1  ? console.log('[app] '        + JSON.stringify(data) )  : null;
    error && Object.values(error).length >= 1 ? console.log('[app][error] ' + JSON.stringify(error) ) : null;
}


module.exports = {
    controller,
}