import { module, test } from 'qunit';
import { setupTest } from 'message/tests/helpers';

module('Unit | Service | message', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:message');
    assert.ok(service);
  });
});
