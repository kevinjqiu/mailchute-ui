Mailchute.ApplicationAdapter = DS.RESTAdapter.extend({
    host: 'http://mail.idempotent.ca:8080',
});


var attr = DS.attr
  , belongsTo = DS.belongsTo;


Mailchute.Email = DS.Model.extend({
    sender: attr(),
    recipient: attr(),
    created_at: attr('date'),  // Why camel case doesn't work?
    subject: attr(),
    raw_message_id: attr(),
    raw_message: belongsTo('raw_message', {async: true})
});

Mailchute.RawMessage = DS.Model.extend({
    message: attr(),
    email: belongsTo('email', {async: true})
});
