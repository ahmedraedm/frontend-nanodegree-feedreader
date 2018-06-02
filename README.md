# Project Overview

 This is web-based application that reads RSS feeds. The main aim of this project is to carry out some test suites using  [Jasmine](http://jasmine.github.io/) which is already included in this project. 

 ## Project Test suites & Specs

1- RSS Feeds test suite
* are defined
* URL defined & not empty
* Name defined & not empty
2- The menu
* element is hidden by default
* display when clicked
3- Initial Entries
* At least a single .entry element within the .feed container
4- New Feed Selection
* content actually changes
**note:** This spec compares the page contents of 2 different feeds, to ensure page contents have changed after a new feed is loaded

## To run the application successfully

1- Open the `index.html` file in your browser
* Feed lists should load and test results will appear at the bottom of the page
2- To change the `index` variable value in the `New Feed Selection` suite test
* Open `feedreader.js` file and go for the `New Feed Selection` suite test, then change the value of the `index` value
**note:** index value should not exceed the `allfeeds` array length 

## License

This project is a public work. Feel free to do what ever you want with it.
