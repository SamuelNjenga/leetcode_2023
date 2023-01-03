const { MinPriorityQueue } = require("@datastructures-js/priority-queue");
  
var maxPerformance = function (n, speed, efficiency, k) {
  let ord = Array.from({ length: n }, (_, i) => i);
  ord.sort((a, b) => efficiency[b] - efficiency[a]);
  let sppq = new MinPriorityQueue(),
    totalSpeed = 0n,
    best = 0n;
  for (let eng of ord) {
    sppq.enqueue(speed[eng]);
    if (sppq.size() <= k) totalSpeed += BigInt(speed[eng]);
    else totalSpeed += BigInt(speed[eng] - sppq.dequeue().element);
    let res = totalSpeed * BigInt(efficiency[eng]);
    if (res > best) best = res;
  }
  return best % 1000000007n;
};

console.log(maxPerformance(6, [2, 10, 3, 1, 5, 8], [5, 4, 3, 9, 7, 2], 2));
