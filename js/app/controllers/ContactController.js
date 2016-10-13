function ContactController() {
  var vm = this;

  vm.name = 'Jennifer';
  vm.email = 'test@test.com';
  vm.phone = '777-777-7777';

  vm.changeName = function() {
    vm.name = 'Jen'
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController)