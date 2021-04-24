# love-calculator
Love calculator.

In order for the algorithm to work it combines two names and the word "loves". For this example we will use names "Mary" and "James" so the combined text for the calculation is "Mary Loves James" 

1. Count all the letters from left to right and write down the number
First one is "M" and it appears twice, so we write down 2
Next is "A" and it also appears twice, write down 2
Don’t repeat letters (on paper strike the ones you have counted) and continue to the end
You should get 2211111221

2. The second part is getting the shorter version of the number
You do this by adding the leftmost and rightmost numbers together
The first pair is 2 + 1 and write down the sum of the two numbers (in our case 3), next 2 + 2, 1 + 2…, continue this till you reach the middle, if there is only one number left, write it down, otherwise sum both numbers
Again you should strike the numbers you add together (one from the left and one from the right)
You should get 34322

3. Next step is repeating step 2 until you get only two numbers
For our example, this is two more times
So you should get 563 for the first iteration
And the result should be 86
The result should always have two numbers (except 100)

4. The result is 86%
