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
      content: <ProgressLLL />
    });
  }
});

FlowRouter.route('/app2', {

  subscriptions: function() {

  },
  action: function(params) {
    ReactLayout.render(MainLayout, {
      content: <Chart />
    });
  }
});

FlowRouter.route('/app3', {

  subscriptions: function() {

  },
  action: function(params) {
    ReactLayout.render(MainLayout, {
      content: <MySideNav />
    });
  }
});

FlowRouter.route('/app4', {

  subscriptions: function() {

  },
  action: function(params) {
    ReactLayout.render(MainLayout, {
      content: <MyBurgerMenu />
    });
  }
});

FlowRouter.route('/app5', {

  subscriptions: function() {

  },
  action: function(params) {
    ReactLayout.render(MainLayout, {
      content: <Chart />
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

console.log('routes ~~~');