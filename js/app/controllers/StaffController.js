function StaffController() {
  var vm = this;

  vm.name = 'Larry';
  vm.email = 'larry@larry.com';
  vm.phone = '444-444-4444';
}

angular
  .module('app')
  .controller('StaffController', StaffController)