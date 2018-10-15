import Route from '@ember/routing/route';

export default Route.extend({
    model(params)  {
        let result = this.store.findRecord('bands', params.id);

        console.log(result);

        return this.store.findRecord('bands', params.id);
    },
    setupController(controller, model) {        
        controller.setProperties({
            songs: model
        })
    }
});
