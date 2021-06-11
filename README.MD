# Mr. Beep Boop

### A template for readmes, how meta

### By Michael Reiersgaard

## Technologies Used

- HTML
- CSS
- JavaScript
- jQuery

## Description

*{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}*

## Specs

```
Describe: mrBeepBoop()

Test: "It should return an array with a 0 if the number 0 is inputted"
Code:
mrBeepBoop(0)
Expected Output: [0]
```
```
Test: "It should return an array with numbers from 0 to the user's inputted number"
Code:
mrBeepBoop(5);
Expected Output: [0,1,2,3,4,5]
```

```
Test: "It should return the matching value from an array if a number less than 4 is inputted"
Code:
const matchArray = [0, "Beep!","Boop!","Won't you be my neighbor?"]
mrBeepBoop(5);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5]
```

```
Test: "It should return from the match array if the index contains a 1, 2, or 3."
Code:
mrBeepBoop(10);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!"]
```
---
```
Describe: numContains()

Test: "It should create an array of strings with the input separated by character"
Code:
numContains(13);
Expected Output: ["1","3"]
```

```
Test: "It should return a 1 if a 1 is found in the index"
Code:
numContains(132);
Expected Output: 1
```
```
Test: "It should return a 2 if a 2 is found in the index"
Code:
numContains(132);
Expected Output: 2
```

```
Test: "It should return a 3 if a 3 is found in the index"
Code:
numContains(132);
Expected Output: 3
```
---

```
Describe: Interface Logic

Test: "It should collect user entry on submit"
User Input: 5
Code: $('#userNumber').val()
Expected Output: 5
```

```
Test: "It should collect user entry as an integer"
User Input: 01234
Code: (parseInt($('#userNumber').val()));
Expected Output: 1234
```

```
Test: "It should output the calculated array as a comma separated paragraph"
User Input: 4
outputArray = mrBeepBoop(parseInt($('#userNumber').val()));
Code: $('p#output').text(outputArray.join(", "));
Expected Output: 0, Beep!, Boop!, Won't you be my neighbor?, 4
```

## Setup/Installation Requirements

- *This is a great place*
- *to list setup instructions*
- *in a simple*
- *easy-to-understand*
- *format*

*{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}*

## Known Bugs

- *Any known issues*
- *should go here*

## License

[MIT](https://en.wikipedia.org/wiki/MIT_License)

Copyright (c) 2021 Michael Reiersgaard

## Contact Information

Michael Reiersgaard michael.reiersgaard [at] [gmail.com](http://gmail.com/)