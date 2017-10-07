'use strict';

module.exports = app => {
  app.post('/string', 'type.insert');
  app.post('/integer', 'type.insert');
};
