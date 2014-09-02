Mailchute.InboxRoute = Ember.Route.extend({
    model: function(params) {
        console.log(params.inbox_name);
        return this.store.find('inbox', params.inbox_name);
    }
});
