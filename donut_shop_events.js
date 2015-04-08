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
    shops.push(new TopPotDonuts(9, 23, 6.33, "South Lake Union"));
    shops.push(new TopPotDonuts(2, 28, 1.25, "Wedgewood"));
    shops.push(new TopPotDonuts(8, 58, 3.75, "Ballard"));
    tableRender();
  })


   donutForm.addEventListener('submit', function(event) {

    event.preventDefault();

    window.shops.push(new TopPotDonuts(parseInt(event.target.minimumCust.value,10), parseInt(event.target.maximumCust.value,10), parseInt(event.target.averageDonutsPurchasedPerCust.value,10),event.target.location.value));

      event.target.location.value = null;
      event.target.minimumCust.value = null;
      event.target.maximumCust.value = null;
      event.target.averageDonutsPurchasedPerCust.value = null;
      window.tableRender();


   });

}) ();
