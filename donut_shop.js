(function () {
  var TopPotDonuts = function (minCustPerHour, maxCustPerHour, avgDonutsPerCust, name) {
    this.minCustPerHour = minCustPerHour;
    this.maxCustPerHour = maxCustPerHour;
    this.avgDonutsPerCust = avgDonutsPerCust;
    this.hourlyDonutTotals = [];
    this.name = name;
  };
  TopPotDonuts.prototype.donutsByHour = function () {
    var numCustomers = Math.floor(Math.random() * this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour;
    return Math.round(numCustomers * this.avgDonutsPerCust);
  };

  TopPotDonuts.prototype.donutsByDay = function () {
    var byDay = 0;
    for (var i = 0; i <= 11; i++) {
      var hourlyDonutTotal = this.donutsByHour();
      this.hourlyDonutTotals.push(hourlyDonutTotal);
      byDay += hourlyDonutTotal;
    }
    return byDay;
  };

  TopPotDonuts.prototype.render = function () {
    var dailyDonutTotal = this.donutsByDay();
    var trEl = document.getElementById(this.name);
    for (var i = 0; i <= this.hourlyDonutTotals.length; i++) {
      var el = document.createElement('td');
      el.textContent = this.hourlyDonutTotals[i];
      trEl.appendChild(el);
    }
    el.textContent = dailyDonutTotal;
    trEl.appendChild(el);
  };
  var downtown = new TopPotDonuts(8, 43, 4.50, "storeLoc1");
  var capitolHill = new TopPotDonuts(4, 37, 2.00, "storeLoc2");
  var southLakeUnion = new TopPotDonuts(9, 23, 6.33, "storeLoc3");
  var wedgewood = new TopPotDonuts(2, 28, 1.25, "storeLoc4");
  var ballard = new TopPotDonuts(8, 58, 3.75, "storeLoc5");
  downtown.render();
  capitolHill.render();
  southLakeUnion.render();
  wedgewood.render();
  ballard.render();
}) ();
