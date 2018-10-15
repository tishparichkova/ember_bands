import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.store.findAll('bands');
    },
    setupController(controller, model) {        
        controller.setProperties({
            bands: model
        })
    }
});
