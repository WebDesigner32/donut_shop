(function () {

  var TopPotDonuts = function (minimum, maximum, avg, name, openHrs) {
    this.minimum = minimum;
    this.maximum = maximum;
    this.avg = avg;
    this.hourlyDonutTotals = [];
    this.name = name;
    this.openHrs = openHrs || 11;
  };

  window.shops = [];

  TopPotDonuts.prototype.donutsByHour = function () {
    var numCustomers = Math.floor(Math.random() * this.maximum - this.minimum + 1) + this.minimum;
    return Math.round(numCustomers * this.avg);
  };

  TopPotDonuts.prototype.donutsByDay = function () {
    var byDay = 0;
    for (var i = 0; i < this.openHrs; i++) {
      var hourlyDonutTotal = this.donutsByHour();
      this.hourlyDonutTotals.push(hourlyDonutTotal);
      byDay += hourlyDonutTotal;
    }
    return byDay;
  };

  TopPotDonuts.prototype.render = function () {
    var dailyDonutTotal = this.donutsByDay();
    var trEl = document.createElement('tr');
    var nameEl = document.createElement('th');
    var dailyDonutTotalEl = document.createElement('td');

    nameEl.textContent = this.name;
    trEl.appendChild(nameEl);

    for (var i = 0; i < this.openHrs; i++) {
      var hourlyDonutTotalsEl = document.createElement('td');
      hourlyDonutTotalsEl.textContent = this.hourlyDonutTotals[i];
      trEl.appendChild(hourlyDonutTotalsEl);
    }
    dailyDonutTotalEl.textContent = dailyDonutTotal;
    trEl.appendChild(dailyDonutTotalEl);
    return trEl;
  };
  window.tableRender = function () {
    var tbEl = document.getElementById('allTable');
    tbEl.innerHTML = '<tr id="openHours"><th></th><td>7:00 AM</td><td>8:00 AM</td><td>9:00 AM</td><td>10:00 AM</td><td>11:00 AM</td><td>12:00 PM</td><td>1:00 PM</td><td>2:00 PM</td><td>3:00 PM</td><td>4:00 PM</td><td>5:00 PM</td><td>Total</td></tr>';
    shops.forEach(function (shops) {
      tbEl.appendChild(shops.render());
    });
  };

  shops.push(new TopPotDonuts(8, 43, 4.50, "Downtown"));
  shops.push(new TopPotDonuts(4, 37, 2.00, "Capitol Hill"));
  shops.push(new TopPotDonuts(9, 23, 6.33, "South Lake Union"));
  shops.push(new TopPotDonuts(2, 28, 1.25, "Wedgewood"));
  shops.push(new TopPotDonuts(8, 58, 3.75, "Ballard"));
  tableRender();
}) ();


