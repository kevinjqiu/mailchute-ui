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

Mailchute.EmailsController = Ember.ArrayController.extend({
    hideEmailPanel: true,
    actions: {
        showemail: function(email) {
            var that = this;
            email.get('raw_message').then(function(result){
                that.set("message", result.get("message"));
            });
            this.set('current_sender', email.get('sender'));
            this.set('current_subject', email.get('subject'));
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
