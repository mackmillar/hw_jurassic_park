const Park = function (parkName, ticketPrice, dinosaurs) {
    this.parkName = parkName;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = dinosaurs;
  }


Park.prototype.addDino = function(dinosaur) {
    this.dinosaurs.push(dinosaur);
}
  
  module.exports = Park;