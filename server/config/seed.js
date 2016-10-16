/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
//import Thing from '../api/thing/thing.model';
//import User from '../api/user/user.model';
import Syllabus from '../api/syllabus/syllabus.model';
/*Thing.find({}).remove()
  .then(() => {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Webpack, Gulp, Babel, TypeScript, Karma, '
            + 'Mocha, ESLint, Node Inspector, Livereload, Protractor, Pug, '
            + 'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, '
            + 'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep '
            + 'tests alongside code. Automatic injection of scripts and '
            + 'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more '
            + 'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript '
            + 'payload, minifies your scripts/css/images, and rewrites asset '
            + 'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku '
            + 'and openshift subgenerators'
    });
  });
*/
/*User.find({}).remove()
  .then(() => {
    User.create({

      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {

      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });*/
Syllabus.find({}).remove()
  .then(() => {
    Syllabus.create({
      academy: 'Esprit',
      year: 2016,
      title: 'Web Apps',
      education: 'Computer sciences',
      lecturer: 'Marwen landoulsi',
      owner: '5803a4cb054a520aacad298e',
      objectives: 'learn',
      iconurl: 'https://scr.sad.supinfo.com/articles/resources/143787/944/0.png',
      weekplans: [{
        week: 4,
        summary: 'Awesome week',
        topics: 'Test topics',
        literature: 'test literature',
        videos: '<iframe width="781" height="439" src="https://www.youtube.com/embed/gjjVCXN7VnU?list=PL8jcXf-CLpxpHNKYAY1GM_b6_L0FhFLe0" frameborder="0" allowfullscreen></iframe>',
        assignments: 'test assignments',
        teaser: 'test teaser'
      },
      {
        week: 5,
        summary: 'Awesome week5',
        topics: 'Test topics5',
        literature: '5test literature',
        videos: '<iframe width="781" height="439" src="https://www.youtube.com/embed/gjjVCXN7VnU?list=PL8jcXf-CLpxpHNKYAY1GM_b6_L0FhFLe0" frameborder="0" allowfullscreen></iframe>',
        assignments: '5test assignments',
        teaser: '5test teaser'
      }]
    }, {
      academy: 'Esprit99',
      year: 2016,
      title: 'Web Apps99',
      education: 'Computer sciences99',
      lecturer: 'Marwen landoulsi99',
      owner: '5803a4cb054a520aacad298e',
      objectives: 'learn99',
      iconurl: 'https://scr.sad.supinfo.com/articles/resources/143787/944/0.png',
      weekplans: [{
        week: 4,
        summary: 'Awesome week',
        topics: 'Test topics',
        literature: 'test literature',
        videos: '<iframe width="781" height="439" src="https://www.youtube.com/embed/gjjVCXN7VnU?list=PL8jcXf-CLpxpHNKYAY1GM_b6_L0FhFLe0" frameborder="0" allowfullscreen></iframe>',
        assignments: 'test assignments',
        teaser: 'test teaser'
      },
      {
        week: 5,
        summary: 'Awesome week5',
        topics: 'Test topics5',
        literature: '5test literature',
        videos: '<iframe width="781" height="439" src="https://www.youtube.com/embed/gjjVCXN7VnU?list=PL8jcXf-CLpxpHNKYAY1GM_b6_L0FhFLe0" frameborder="0" allowfullscreen></iframe>',
        assignments: '5test assignments',
        teaser: '5test teaser'
      }]
    }).then(() => {
      console.log('finished populating syllabus');
    });
  });

/*
  Cat.find({}).remove()
    .then(() => {
      Cat.create({
        name: 'Cat',
        age: 25

      },
      {
        name: 'Cat2',
        age: 299
      }
    )
      .then(() => {
        console.log('finished populating cats');
      });
    });*/
