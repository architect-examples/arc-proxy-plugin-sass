let test = require('tape')
let plugin = require('.')

test('env', t=> {
  t.plan(1)
  t.ok(plugin, 'plugin')
})

let src = `
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
`
test('render', t=> {
  t.plan(1)
  let result = plugin('foo.scss', {
    headers: {},
    body: src
  })
  t.ok(result, 'got result')
  console.log(result)
})
