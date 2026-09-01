int differenceOfSums(int n, int m) {
    int k = n / m;
    int divisibleSum_times_2 = m * k * (k + 1);
    int totalSum = (n * (n + 1)) / 2;
    return totalSum - divisibleSum_times_2;
}