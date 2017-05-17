const babel = require('babel-core');
const plugin = require('../');
const assert = require('assert');
const printAst = require('ast-pretty-print');

const example = `
const foo = 1;
if (foo) console.log(foo);
`;

it('works', () => {
  const {code} = babel.transform(example, {plugins: [plugin]});
  expect(code).toMatchSnapshot();
});

it('contains baz', () => {
  const {ast} = babel.transform(example, {plugins: [plugin]});
  const program = ast.program;
  const declaration = program.body[0].declarations[0];
  assert.equal(declaration.id.name, 'baz');
  expect(printAst(ast)).toMatchSnapshot();
});

