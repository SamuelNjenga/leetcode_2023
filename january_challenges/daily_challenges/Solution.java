package january_challenges.daily_challenges;

import java.util.Arrays;
import java.util.PriorityQueue;

public class Solution {
    static int maxPerformance(int n, int[] speed, int[] efficiency, int k) {
        int MOD = (int) (1e9 + 7);
        int[][] engineers = new int[n][2];
        for (int i = 0; i < n; ++i) 
	    engineers[i] = new int[] {efficiency[i], speed[i]};

        Arrays.sort(engineers, (a, b) -> b[0] - a[0]);
      

        PriorityQueue<Integer> pq = new PriorityQueue<>(k, (a, b) -> a - b);
        long res = Long.MIN_VALUE, totalSpeed = 0;

        for (int[] e : engineers) 
        {
	        if (pq.size() == k) totalSpeed -= pq.poll(); 
	        pq.add(e[1]);
	        totalSpeed = (totalSpeed + e[1]);
	        res = Math.max(res, (totalSpeed * e[0]));  
        }   

        return (int) (res % MOD); 
    }
    
    public static void main(String[] args) {
        int[] speed = {2, 10, 3, 1, 5, 8};
        int[] efficiency = {5, 4, 3, 9, 7, 2};

     System.out.println(maxPerformance(6, speed,efficiency,2));
    }
    
}