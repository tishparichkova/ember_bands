import Route from '@ember/routing/route';

export default Route.extend({
    model(params)  {
        return this.store.findRecord('bands', params.id);
    },
    setupController(controller, model) {
        controller.setProperties({
            songs: model.songs
        })
    }
});
