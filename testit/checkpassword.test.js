import { describe, it } from "node:test";
import assert from "node:assert";
import { checkPassword } from "../checkpassword.js";

describe("checkPassword", () => {
  it("hylkää LIIAn lyhyen salasanan!!", () => {
    assert.strictEqual(checkPassword("Ab1!"), false);
  });

  it("hylkää salasanan ilman ISOJA kirjaimia!!", () => {
    assert.strictEqual(checkPassword("salasana1"), false);
  });

  it("hylkää salasanan ilman PIENIÄ kirjaimia!!", () => {
    assert.strictEqual(checkPassword("SALASANA1"), false);
  });

  it("hylkää salasanan ilman NUMEROITA!!", () => {
    assert.strictEqual(checkPassword("salasana!"), false);
  });

  it("hylkää salasanan ILMAN erikoismerkkiä", () => {
    assert.strictEqual(checkPassword("Salasana1"), false);
  });

  it("hyväksyy KELVOLLISEN salasanan!!", () => {
    assert.strictEqual(checkPassword("Salasana1!"), true);
  });
});
