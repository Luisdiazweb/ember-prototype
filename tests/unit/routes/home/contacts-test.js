import { module, test } from 'qunit';
import { setupTest } from 'message/tests/helpers';

module('Unit | Route | home/contacts', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:home/contacts');
    assert.ok(route);
  });
});
