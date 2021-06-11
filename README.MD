# Mr. Beep Boop

### A template for readmes, how meta

### By Michael Reiersgaard

## Technologies Used

- HTML
- CSS
- JavaScript
- jQuery

## Description

This program will take a number from a user and count up from zero to the user's inputted number. Numbers that contain 3, 2, and 1 will be replaced with text. Numbers that contain a 3 take priority over 2, and 2 takes priority over 1 in regards to text replacement. 

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
```
Test: "It should not accept input any larger than 1,000,000"
User Input: 1,000,001
Code: if (parseInt($('#userNumber').val()) > 1000000)
Expected Output: That's a little much, don't you think?
```
```
Test: "It should not accept input any smaller than 0"
User Input: -5
Code: if (parseInt($('#userNumber').val()) < 0)
Expected Output: I bet you think you're pretty clever, huh? Try again with a positive integer. And not too big, ya hear me?
```

## Setup/Installation Requirements

- Create and enter a directory on your local machine for the project
- Clone public repository from GitHub using `git clone https://github.com/mireie/mr-beep-boop`
- Open `index.html` to view the web page in your browser

## GitHub Links
- [GitHub Repo](https://github.com/mireie/mr-beep-boop)
- [GitHub Pages](https://mireie.github.io/mr-beep-boop/)

## Known Bugs

No known bugs at this time.

## License

[MIT](https://en.wikipedia.org/wiki/MIT_License)

Copyright (c) 2021 Michael Reiersgaard

## Contact Information

Michael Reiersgaard michael.reiersgaard [at] [gmail.com](http://gmail.com/)