import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizeResponse(...args) {

        // let [ , , { data }] = args;
        const { data } = args[2];

        return {
            data
        };
    },
});
