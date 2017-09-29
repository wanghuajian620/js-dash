'use strict';


module.exports = app => {
  app.post('/user/register', 'user.register');
  app.post('/user/login', 'user.login');
  app.post('/mobile/set', 'mobile.set');
  app.post('/mobile/modify', 'mobile.modify');

  app.post('/photo/upload', 'photo.upload');
  app.post('/photo/list', 'photo.list');
  app.post('/photo/votes', 'photo.votes');
};
