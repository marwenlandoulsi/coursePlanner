'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './syllabus.routes';

export class SyllabusComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('coursePlannerApp.syllabus', [uiRouter])
  .config(routes)
  .component('syllabus', {
    template: require('./syllabus.html'),
    controller: SyllabusComponent,
    controllerAs: 'syllabusCtrl'
  })
  .name;
