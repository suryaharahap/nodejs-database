function tagFunction(array, ...args) {
  console.info(array);
  console.info(args);
}

test('tag function', () => {
  const name = 'Surya';
  const lastName = 'Harahap';

  tagFunction`Hello ${name} ${lastName}!, how are you?`;
  tagFunction`Bye ${name}!, how are you?`;
});

test('tag function sql', () => {
  const name = 'surya';
  const age = 24;

  tagFunction`SELECT * FROM users WHERE name = ${name} AND age = ${age}`;
});
