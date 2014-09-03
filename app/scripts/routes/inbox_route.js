Mailchute.InboxRoute = Ember.Route.extend({
    inboxName: null,
    inboxId: function() {
        return this.get("inboxName").split("@")[0];
    }.property('inboxName'),
    model: function(params) {
        this.set('inboxName', params.inbox_name);  // TODO: is this the best place for this kind of stuff?
        return this.store.find('inbox', params.inbox_name);
    },
    setupController: function(controller, model) {
        this._super(controller, model);
        this.controllerFor('application').set('inboxId', this.get('inboxId'));
        this.controller.set('inboxName', this.get('inboxName'));
    }

});
