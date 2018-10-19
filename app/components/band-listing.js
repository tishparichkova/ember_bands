import Component from '@ember/component';

export default Component.extend({
    tagName: 'div',
    classNames: ['band-item'],
    classNameBindings: ['isWide:image--wide'],
    actions: {
        sendAction(bandId) {
            this.sendAction('sendData', bandId)
        }
    }
});
