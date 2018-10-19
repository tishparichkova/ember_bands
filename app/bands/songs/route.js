import Route from '@ember/routing/route';
import { get, set } from '@ember/object';

export default Route.extend({
    model(params)  {
        return this.store.findRecord('bands', params.id);
    },
   
    setupController(controller, model) {
        controller.setProperties({
            songs: model.songs,
            currentUrl: get(this, 'currentUrl')

        })
    }
});
