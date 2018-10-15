import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizeResponse(store=undefined, primaryModelClass=undefined,payload={},requestType="GET",returns={}) {
        return {
            data: payload.data,
        };
    },
});
