import { module, test } from 'qunit';
import { setupTest } from 'message/tests/helpers';

module('Unit | Controller | not-found', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:not-found');
    assert.ok(controller);
  });
});
