let numRescueBoats = function (people, limit) {
  let sortedPeople = people.sort(function (a, b) {
    return a - b;
  });
  let right = sortedPeople.length - 1;
  let left = 0;
  let numberOfBoats = 0;
  while (left <= right) {
    let remainder = limit - sortedPeople[right];
    right -= 1;
    numberOfBoats += 1;
    if (left <= right && remainder >= sortedPeople[left]) {
      left += 1;
    }
  }
  return numberOfBoats;
};

console.log(numRescueBoats([3, 2, 2, 1], 3));
