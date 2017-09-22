# Zoo Animal Tracker

#### Epicodus Typescript Independent Project, 09/22/2017

#### By **Kimberly H. Lu**

[Github repository](https://github.com/kchamp45/zoo-animal-tracker)

Welcome to my zoo animal tracker!  It allows a zoo administrator to keep track of the animals at his/her zoo.  

![app-screenshot](https://github.com/.png)

## Setup/Installation Requirements

To use this application, you will need to do the following.  In the terminal, please navigate to your desktop and execute:
  * `$ git clone https://github.com/kchamp45/zoo-animal-tracker`
  * `$ npm install`
  * `$ bower install`
  * `$ gulp build`
  * `$ gulp serve`

## Known Bugs

There are no known bugs.

## Technologies Used

Javascript, Typescript, Angular JS, HTML, and CSS.  Supporting libraries from Bootstrap and JQuery were employed as needed.

## User Stories:

* I want to log a newly-admitted animal by submitting a form with animal species, name, age, diet, zoo location, number of needed caretakers, sex, one like and one dislike.
* I want to view a list of animals I have logged.
* I want options to view all animals, only young animals (less than 2 years of age), or only mature animals (2 years of age and older).
* I want to click an animal to edit its name, age or caretakers.

## Specs

| Behaviour  | Input | Output |
| ------------- |:-------------:| -----|
| display list of all animals recorded in the tracker   | select "all animals" | Display all animals |
| register an animal's species, name, age, diet, location in the zoo, the number of caretakers assigned to this animal, gender, likes and dislikes | enter animal's species, name, age, diet, location in the zoo, etc.| The app records the entry. |
| edit the animal's species, name, age, diet, location in the zoo, etc. | enter said information | the information of said animal is updated |
| filter through the records and display animals based of their age (i.e. maturity)| select "young" | Display only animals younger than 2 yo|

## Future Functionalities

* User can check off the animals that have been fed that day, the number of feedings, and the time of feeding.
* User can track where the animal came from (i.e. the animal's history);
* User can track the animal's medical records.

### License

Published under MIT License.

Copyright (c) 2017 **_Kimberly H. Lu_**
