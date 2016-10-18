'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('syllabus', {
      url: '/',
      template: '<syllabus></syllabus>'
    });
}
