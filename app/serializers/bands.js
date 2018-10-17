import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizeResponse({ payload }) {
        return {
            data: payload.data,
        };
    },
});
