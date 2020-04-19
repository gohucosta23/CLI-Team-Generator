const Intern = require("../lib/intern");

test("Can set school via constructor", () => {
  const testValue = "UCLA";
  const e = new Intern(testValue, 1, "test@test.com", "Foo");
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "test@test.com", "UCLA");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UCLA";
  const e = new Intern(testValue, 1, "test@test.com", "Foo");
  expect(e.getSchool()).toBe(testValue);
});