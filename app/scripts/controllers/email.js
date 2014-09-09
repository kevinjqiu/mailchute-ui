Mailchute.EmailController = Ember.ObjectController.extend({
    actions: {
        deleteEmail: function() {
            var email = this.get('model');
            // why doesn't this update the view???
            // -- solved: upgraded to ember 1.0.0-beta9 from beta7
            email.deleteRecord();
            email.save();
            $(".email-body").addClass("hide");
        }
    }
});
