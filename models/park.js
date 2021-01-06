const Park = function (parkName, ticketPrice, dinosaurs) {
    this.parkName = parkName;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = dinosaurs;
  }


Park.prototype.addDino = function(dinosaur) {
    this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDino = function(dinosaur) {
     
    for( var i = 0; i < this.dinosaurs.length; i++){ 
    
        if ( this.dinosaurs[i] === dinosaur) { 
    
            this.dinosaurs.splice(i, 1); 
        }
    
    }
}
  
  module.exports = Park;