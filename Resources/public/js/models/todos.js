// Generated by CoffeeScript 1.4.0
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['chaplin', 'models/base/collection', 'models/todo'], function(Chaplin, Collection, Todo) {
  'use strict';

  var Todos;
  return Todos = (function(_super) {

    __extends(Todos, _super);

    function Todos() {
      return Todos.__super__.constructor.apply(this, arguments);
    }

    Todos.prototype.model = Todo;

    Todos.prototype.url = window.Api.get_todos;

    Todos.prototype.initialize = function() {
      Todos.__super__.initialize.apply(this, arguments);
      return this.reset(window.Data.todos);
    };

    Todos.prototype.allAreCompleted = function() {
      return this.getCompleted().length === this.length;
    };

    Todos.prototype.getCompleted = function() {
      return this.where({
        completed: true
      });
    };

    Todos.prototype.getActive = function() {
      return this.where({
        completed: false
      });
    };

    return Todos;

  })(Collection);
});