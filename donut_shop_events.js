(function () {

  var donutForm = document.getElementById('newDonutsForm');

  var erase = document.getElementById('erase');
  erase.addEventListener("click", function() {
    var tbEl = document.getElementById('allTable');
    tbEl.innerHTML = '';
    tbEl.innerHTML = '<tr id="openHours"><th></th><td>7:00 AM</td><td>8:00 AM</td><td>9:00 AM</td><td>10:00 AM</td><td>11:00 AM</td><td>12:00 PM</td><td>1:00 PM</td><td>2:00 PM</td><td>3:00 PM</td><td>4:00 PM</td><td>5:00 PM</td><td>Total</td></tr>';

    shops = [];
    shops.push(new TopPotDonuts(8, 43, 4.50, "Downtown"));
    shops.push(new TopPotDonuts(4, 37, 2.00, "Capitol Hill"));
    stores.push(new TopPotDonuts(9, 23, 6.33, "South Lake Union"));
    stores.push(new TopPotDonuts(2, 28, 1.25, "Wedgewood"));
    stores.push(new TopPotDonuts(8, 58, 3.75, "Ballard"));
    tableRender();
  })



   donutForm.addEventListener('submit', function() {

    window.shops.push(new window.TopPotDonuts (event.target.name.value, Number.parseInt(event.target.minimum.value), Number.parseInt(event.target.maximum.value), Number.parseInt(event.target.avg.value)));

      event.target.name.value = null;
      event.target.minimum.value = null;
      event.target.maximum.value = null;
      event.target.avg.value = null;
      window.tableRender();

      event.preventDefault();
   });

}) ();
