Mailchute.InboxRoute = Ember.Route.extend({
    inboxName: null,
    inboxId: function() {
        var inboxName = this.get("inboxName")
            , parts = inboxName.split("@");

        return parts[0];
    }.property('inboxName'),
    model: function(params) {
        this.inboxName = params.inbox_name.split("@")[0];  // TODO: is this the best place for this kind of stuff?
        return this.store.find('inbox', params.inbox_name);
    },
    setupController: function(controller, model) {
        this._super(controller, model);
        this.controllerFor('application').set('inboxId', this.inboxName);
    }

});
