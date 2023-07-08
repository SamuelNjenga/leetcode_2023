/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
let ParkingSystem = function (big, medium, small) {
  this.availableByType = {
    1: big,
    2: medium,
    3: small,
  };
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
  if (this.availableByType[carType]) {
    this.availableByType[carType]--;
    return true;
  }
  return false;
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * let obj = new ParkingSystem(big, medium, small)
 * let param_1 = obj.addCar(carType)
 */
