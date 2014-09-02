Mailchute.Router.map(function () {
    this.route('inbox', {
        path: 'inbox/:inbox_name'
    });
    this.route('email', {
        path: 'inbox/:inbox_name/:message_id'
    });
});
