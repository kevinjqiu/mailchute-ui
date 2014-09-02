Mailchute.InboxRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find('inbox', params.inbox_name);
    }
});
