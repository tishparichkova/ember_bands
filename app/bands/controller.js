import Controller from '@ember/controller';
import { get, computed } from '@ember/object';

export default Controller.extend({
    isActive: computed(function() {
        let currentUrl = get(this, 'currentUrl');
    }),
    actions: {
        sendData(bandClickedId) {
            if (!bandClickedId) return;

            let currentUrl = get(this, 'currentUrl');

            if (!bandClickedId) return;

            let flag = true;
            
            if (flag) {
                this.toggleProperty('isActive');
            }
        }
    }
});