//Register 'phoneList' component, along with its assiciated controller and template
angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
  controller: ['Phone',
          function PhoneListController(Phone) {
            this.phones = Phone.query();
            self.orderProp = 'age';
    }
  ]
});


