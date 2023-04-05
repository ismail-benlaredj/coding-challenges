# Implement Selection Sort

[Challenge source](https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-selection-sort)

Here we will implement selection sort. Selection sort works by selecting the minimum value in a list and swapping it with the first value in the list. It then starts at the second position, selects the smallest value in the remaining list, and swaps it with the second element. It continues iterating through the list and swapping elements until it reaches the end of the list. Now the list is sorted. Selection sort has quadratic time complexity in all cases.

Instructions: Write a function selectionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.


selectionSort should be a function.
Failed: selectionSort should return a sorted array (least to greatest).
Failed: selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]) should return an array that is unchanged except for order.
Passed: selectionSort should not use the built-in .sort() method.
