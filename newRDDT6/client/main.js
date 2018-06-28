import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
Router.route('/home', function () {
  this.render('home');
}, {
  name: 'home'
});

Router.route('/info', function () {
  this.render('info');
}, {
  name: 'info'
});

Router.route('/communication', function () {
  this.render('communication');
}, {
  name: 'communication'
});

Router.route('/leadership', function () {
  this.render('leadership');
}, {
  name: 'leadership'
});