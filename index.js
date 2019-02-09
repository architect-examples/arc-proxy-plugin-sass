let sass = require('sass')
let type = 'text/css;charset=utf8'

module.exports = function scss(key, {headers, body}) {
  return {
    headers: {...headers, 'content-type':type}, 
    body: sass.renderSync({data:body}).css.toString()
  }
}
