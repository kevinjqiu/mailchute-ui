Mailchute.EmailsController = Ember.ArrayController.extend({
    needs: ['email'],
    actions: {
        showEmail: function(email) {
            var that = this;
            email.get('raw_message').then(function(result){
                that.set("message", result.get("message"));
            });
            this.set('current_sender', email.get('sender'));
            this.set('current_subject', email.get('subject'));
            // TODO: Doing DOM manipulation in the controller
            // This must be a code smell
            $(".email-body").removeClass("hide");
        }
    }
});
