const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50)
    dinosaur2 = new Dinosaur('Velociraptor','carnivore', 40)
    dinosaur3 = new Dinosaur('Stegosaurus', 'herbivore', 5)
    dinosaurs = [dinosaur1, dinosaur2]
    park = new Park('Dinosaur World', 10, dinosaurs)
  })

  it('should have a name', function() {
    const actual = park.parkName;
    assert.strictEqual(actual, 'Dinosaur World')
  });


  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10)
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 2)
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDino(dinosaur3)
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 3);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.removeDino(dinosaur2)
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 1);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    const actual = park.mostAttractiveDino()
    assert.deepStrictEqual(actual, dinosaur1)
  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
