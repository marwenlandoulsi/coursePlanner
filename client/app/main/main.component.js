import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {
  $http;
  socket;
  syllabuses = [];
  newSyllabus = '';

  /*@ngInject*/
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('syllabus');
    });
  }

  $onInit() {
    this.$http.get('/api/syllabuses')
      .then(response => {
        this.syllabuses = response.data;
        this.socket.syncUpdates('syllabuses', this.syllabuses);
      });
  }

  addSyllabus() {
    if(this.newSyllabus) {
      this.$http.post('/api/syllabuses', {
        name: this.newSyllabus
      });
      this.newSyllabus = '';
    }
  }

  deleteSyllabus(syllabus) {
    this.$http.delete(`/api/syllabuses/${syllabus._id}`);
  }
}

export default angular.module('coursePlannerApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
