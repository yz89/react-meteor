FlowRouter.route("/", {
  subscriptions: function() {

  },
  action: function() {
    ReactLayout.render(MainLayout, {
      content: <QuestionApp />
    });
  }
});

FlowRouter.route("/app1", {
  subscriptions: function() {

  },
  action: function() {
    ReactLayout.render(MainLayout, {
      content: <WelcomeComponent name='yzhou1' />
    });
  }
});

FlowRouter.route('/app2', {

  subscriptions: function() {

  },
  action: function(params) {
    ReactLayout.render(MainLayout, {
      content: <WelcomeComponent name='yzhou2' />
    });
  }
});

FlowRouter.notFound = {
    // Subscriptions registered here don't have Fast Render support.
    subscriptions: function() {

    },
    action: function() {
    	console.log('notFound!!');
    }
};