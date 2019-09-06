let { random } = require('random_generator');

/**
 * @returns source data data provide in future
 */
let _data = new Promise((res, rej)=>{
    random() == 0 ? res({title: 'success'}) : rej({message: 'database connection failed'});
});

module.exports = { 
    _data
}