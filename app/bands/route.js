import Route from '@ember/routing/route';
import { get, set } from '@ember/object';

export default Route.extend({
    currentSlug: 0,
    model() {
        return this.store.findAll('bands');
    },
     afterModel(...args) {
        let [ , { intent } ] = args;
        let context = intent.contexts;
        let url = '';

        if (context) {
            url = context[0]; 
        } else {
            let fullurl = intent.url.split('/');
            let { length } = fullurl;

            url = fullurl[length-1]
        }

        set(this, 'currentUrl', url)
    },
    setupController(controller, model) {        
        controller.setProperties({
            bands: model,
            currentUrl: get(this, 'currentUrl')
        })
    }
});
