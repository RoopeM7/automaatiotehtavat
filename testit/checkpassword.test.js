const test = require("node:test");
const assert = require("node:assert");
const checkPassword = require("../checkpassword");

test("hyvä salasana menee läpi", () => {
  assert.strictEqual(checkPassword("HyväPassu1!"), true);
});

test("liian lyhyt salasana hylätään", () => {
  assert.strictEqual(checkPassword("A1!a"), false);
});

test("puuttuu iso kirjain", () => {
  assert.strictEqual(checkPassword("pienet1!"), false);
});

test("puuttuu pieni kirjain", () => {
  assert.strictEqual(checkPassword("ISOT1!"), false);
});

test("puuttuu numero", () => {
  assert.strictEqual(checkPassword("EiNumeroa!"), false);
});

test("puuttuu erikoismerkki", () => {
  assert.strictEqual(checkPassword("IlmanErikois1"), false);
});
