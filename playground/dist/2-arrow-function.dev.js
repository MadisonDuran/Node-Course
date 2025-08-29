"use strict";

//const square = function (x) {
// return x * x
//}
//const square = (x) => {
//return x * x
//}
// const square = (x) => x * x
// console.log(square(2))
var event = {
  name: 'Birthday Party',
  guestList: ['Andrew', 'Jen', 'Mike'],
  printGuestList: function printGuestList() {
    var _this = this;

    console.log('Guest list for ' + this.name);
    this.guestList.forEach(function (guest) {
      console.log(guest + ' is attending ' + _this.name);
    });
  }
};
event.printGuestList();