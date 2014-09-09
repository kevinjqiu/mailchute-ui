var Mailchute = window.Mailchute = Ember.Application.create({
    LOG_TRANSITIONS: true,
    LOG_ACTIVE_GENERATION: true
});


Mailchute.ApplicationController = Ember.ObjectController.extend({
    applicationName: "Mailchute",
    domainName: 'mail.idempotent.ca',
    inboxId: null,
    inboxName: function() {
        return this.get('inboxId') + '@' + this.get('domainName');
    }.property('inboxId', 'domainName'),
    actions: {
        go: function() {
            this.transitionToRoute('emails', this.get('inboxName'));
        }
    }
});

Ember.Handlebars.helper('format-date', function(date) {
    return moment(date).fromNow();
});

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/components/*');
require('scripts/views/*');
require('scripts/router');
