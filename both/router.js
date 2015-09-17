Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'main'});
Router.route('/app1', {name: 'app1'});
Router.route('/app2', {name: 'app2'});