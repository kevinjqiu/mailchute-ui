Mailchute.EmailRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find('email', params.inbox_name, params.message_id);
    }
});
