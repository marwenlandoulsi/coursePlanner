'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('syllabus', {
      url: '/syllabus',
      template: '<syllabus></syllabus>'
    });
}
