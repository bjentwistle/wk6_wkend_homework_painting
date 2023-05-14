const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map(journey => journey.startLocation)
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map(journey => journey.endLocation)
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(journey => journey.transport === "train")
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey => journey.distance >= minDistance)
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let distancesTravelled =[]
  for (journey of this.journeys) {
    distancesTravelled = this.journeys.map(journey => journey.distance) 
  };
  return distancesTravelled.reduce((total, currentValue) => {return total += currentValue;}, 0)

};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const unique = Array.from(new Set(this.journeys.map((journey) => journey.transport)))
  return unique
};


module.exports = Traveller;
