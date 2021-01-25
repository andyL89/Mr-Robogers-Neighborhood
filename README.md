## Mr. Roboger's Neighborhood
#### *A Robot that turns certain numbers into beeps, boops, and a Mr. Rogers phrase*
***By Andrew Lawson © 2021***

## *Description:*
This webpage will take a number submitted by the user, and display an array leading up to the number inputted, with "beep", "boop", and "Won't You Be My Neighbor?" taking the place of numbers that consist of "1", "2", and "3". The JavaScript logic incorporates variables, for loops, if else statements, and array methods.

## *Tests*
#### Test 1:
Describe: beepBoop()
Test: It should return an array with a 0 if the number 0 is inputted.
Expect(beepBoop(0)) to return (0);
#### Test 2:
Describe: beepBoop()
Test: It should return an array with the word "Beep!".
Expect(beepBoop(1)) to return (0,Beep!);       
#### Test 3:
Describe: beepBoop()
Test: It should return an array with the words "Beep!" and "Boop!".
Expect(beepBoop(2)) to return (0, Beep!, Boop!);
#### Test 4:
Describe: beepBoop()
Test: It should return an array and the words "Beep!", "Boop!" and "Won't you be my neighbor?".
Expect(beepBoop(3)) to return (0, Beep!, Boop!, Won't you be my neighbor?);
#### Test 5:
Describe: beepBoop()
Test: It should return an array of numbers leading up to 5 and the words "Beep!", "Boop!" and "Won't you be my neighbor?" in place of 1, 2, and 3".
Expect(beepBoop(5)) to return (0,Beep!,Boop!,Won't you be my neighbor?,4,5);
#### Test 6:
Describe: if (input.includes())
Test: The last element in the array should return "Won't you be my neighbor?" if the number inputted contains a "3" even if it contains a "2" as well. 
Expect(beepBoop(23)) to return (0,...,Won't you be my neighbor?);
#### Test 7:
Describe: else if (input.includes())
Test: The last element in the array should return "Boop!" if the number inputted contains a "2" even if it contains a "1" as well, but doesn't contain a "3". 
Expect(beepBoop(12)) to return (0,...,Boop!);
#### Test 8:
Describe: else if (input.includes())
Test: The last element in the array should return "Beep!" if the number inputted contains a "1" and doesn't contain "2" and/or "3". 
Expect(beepBoop(11)) to return (0,...,Beep!);

## *Setup instructions:*

1. Clone https://github.com/andyL89/Mr-Robogers-Neighborhood.
2. Navigate to the top level of the directory.
3. Open index.html in your browser.

## *Tecnologies used:*
* HTML
* Java Script
* JQuery
* Bootstrap

## *Known bugs:*
The alert response covers up the submit button if a large enough number is inputted. Simply click the alert response to hide it.

## *License and copyright:*

[MIT](LICENSE.txt)

## Contact Information

Andrew Lawson : alawson89@gmail.com