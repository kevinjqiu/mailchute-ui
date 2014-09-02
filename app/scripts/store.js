Mailchute.ApplicationAdapter = DS.RESTAdapter.extend({
    host: 'http://mail.idempotent.ca:8080'
});


var attr = DS.attr;


Mailchute.Inbox = DS.Model.extend({
    name: attr('string'),
    emails: attr()
});
