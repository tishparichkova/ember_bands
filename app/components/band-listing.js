import Component from '@ember/component';

export default Component.extend({
    tagName: 'div',
    classNames: ['band-item'],
    classNameBindings: ['isWide:wide'],
    isWide: false,
    click() {
        this.toggleProperty('isWide');
    }
});
