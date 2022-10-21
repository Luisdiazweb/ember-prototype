import { module, test } from 'qunit';
import { setupTest } from 'message/tests/helpers';

module('Unit | Controller | home/chats', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:home/chats');
    assert.ok(controller);
  });
});
