Mailchute.ApplicationAdapter = DS.RESTAdapter.extend({
    host: 'http://mail.idempotent.ca:8080'
});


var attr = DS.attr;


Mailchute.Email = DS.Model.extend({
    sender: attr('string'),
    recipient: attr('string'),
    created_at: attr('date'),  // Why camel case doesn't work?
    subject: attr('string'),
    raw_message_id: attr('string')
});
