// Jest 27 (bundled with react-scripts 5) has no test.failing, so this provides the same contract:
// while the bug exists the assertion fails and this test passes; once fixed, this test fails
// with a reminder to make it a normal test. SHOW_BUGS=1 runs it as an ordinary test.
export function knownBug(name, fn) {
  if (process.env.SHOW_BUGS) {
    test(`BUG: ${name}`, fn);
    return;
  }
  test(`BUG: ${name}`, async () => {
    let reproduced = false;
    try {
      await fn();
    } catch (e) {
      reproduced = true;
    }
    if (!reproduced) {
      throw new Error('This known bug no longer reproduces. If it has been fixed, turn this into a normal test.');
    }
  });
}
