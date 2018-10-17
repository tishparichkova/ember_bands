import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render , click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | band-listing', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs `{{band-listing}}`);
    assert.equal(this.element.textContent.trim(), '');
  });

  test('it toggles wide class when clicking on image', async function (assert) {
    await render(hbs `{{band-listing}}`);
    assert.notOk(this.element.querySelector('.band-container__band-image-holder.image--wide'));

    await click(this.element.querySelector('.band-container'));
    assert.ok(this.element.querySelector('.band-container__band-image-holder.image--wide'));

    await click(this.element.querySelector('.band-container'));
    assert.notOk(this.element.querySelector('.band-container__band-image-holder.image--wide'))
  })
});
