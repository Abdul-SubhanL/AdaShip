# AdaShip

This repo contains the code for the game AdaShip
There is a single file to be executed labelled `battleships.js` inside the `main` folder
This project was made by Abdul-Subhan Latif for the Advanced Programmming 2 module

# PREREQUISITES

This repo was made using node version 16.9.0 and npm version 8.3.0
It is recommended for a similar version to be used to avoid any compatability issues with any of the libraries used.

The project has a prettier / eslint config, so if you are using vscode, install the prettier extension for auto-formatting.

To get started, run `npm i` at base level to install all the necessary packages
The main program can then be run by `battleships.js` with node


## Challenge Outline

The task at hand was to replicate a simplistic version of a battleships game, dubbing it AdaShip. The concept of the battleships game is as follows: Each player has a grid representing a battlefield and a group of ships that they can place on their grid. The players take turns guessing the coordinates of the other player's ships which matches a specific square on the grid. A correct guess results in the player scoreing a hit and the opponent must mark the hit on their grid. The game finishes when one player has sunk all of the other player's ships. The player who sinks all of the opponent's ships first wins the game.

I decided to create the solution to this task using the terminal window in a command-line interface (CLI) instead of a graphical user interface (GUI) which would utilise libraries such as React. The reason for this is due to my lack of experience with front-end development and the limited timeframe of approximately 3 weeks is not sufficient for me to efficiently learn the fundamentals of a library; I decided that it would be appropriate to tackle the task by utilising a language and the libraries that I am familiar with in order to dedicate more time in other parts of the project.

![This is a UML design of my initial breakdown of the game](/UML.png)

In my development, my first step was to set up linters and file formatters to ensure consistency in the way I write my code throughout the codebase. I focused on decomposing the game into different sections that could be managed individually, which were: the board, ships, player(s), and game logic. Each of these sections had 'epic' tasks that abstracted unnecesary details. As I was working using object oriented programming, the epic tasks could be planned by creating class files and adding comments referring to the methods that needed to be created for that class. The implementation was faster this way as the logic of the program was mostly there in 'pseudocode'. 

I attempted to implement modularisation for this task as all the components were not interlinked and mostly independent; this would make maintability of the code easier to uphold. However, there may be times where coupling has been used to rely on data that passed through or came in from external sources. 


## Development

Good standards were used in my code, such as using snake_case for variable names and properties, as well as camelCase for any functions or methods. The variables and functions followed good naming conventions that made the function of the variable/function obvious. The codebase has been set up to separate the main code from any 'assistance' files that are called or referred to - in this case the files being used in the `libs` folder. An attempt to implement helper functions was also carried out although this was not done often. Files like `.gitignore` and `.prettierignore` were used as a good practice to ensure that the relevant parts of the codebase were having checks and the right actions done on them. 

Writing the code was made easier due to the comments I added when decomposing the task. I had a comment for the method that needed to be added, and the only difficulties were the technicalities of how to achieve the desired output/return. Resources were used like w3schools, mozilla docs, and stack overflow to overcome gaps in my knowledge and to debug any issues that popped up. This process was repeated for each function or method that was written at a time.

At each stage of development, the code was manually being tested. The `nodemon` npm package was utilised for refreshing the output and rerunning of my code every time I saved the file. I had also manually tested the code with random data entries, boundary conditions and extreme values to see if the expected outcome would occur. I carried out dry-run tests to ensure the data flow was as predicted. As time was a limiting factor, I did not have enough time to implement unit tests using Jest for the methods that were used. 

A key design challenge was deciding how to store and format the contents of `adaship_config.ini`. The first issue I ran into was the inconsistency in the data that was being imported; one line was for specifying board dimensions while the rest of the file was for adding extra ships. This was resolved by creating two separate data structures to handle separately - one containing the board dimensions and the other one containing the ships. The next issue was trying to store the boat types and sizes in a JSON object. It was a complex task to get the data in the correct format to be able to parse it, to the extent that I was using regex (although I changed my mind on this because debugging became another problem). After successfully creating an object, there was an issue with having more than one of the same boat type, as the key has to be unique in an object. To overcome this, I switched to a 2D array instead, storing the boat type in one index, and an array of lengths in the other - allowing for duplicate boat types with the same and different lengths. 


## Evaluation

Code refactoring provides many benefits, such as making code more legible, enhancing maintainability, and reducing complexity. I refactored my code at various points in development, such as when deciding to switch from storing the `.ini` config file from an object to an array. I had also gone back to my code to add more validation checks on a separate layer to add greater detail - such as the `board-size-limit` function that throws an error if the board is a size >80 or <5.

I have implemented the advanced programming technique encapsulation with the board class using the getter setter functions to prevent unauthorised changes being made to the `grid` property. I had considered using inheritance with the `ship-class` as a parent class for each type of boat as children classes, however this seemed overly excessive, adding a layer of complexity that is not needed. Therefore I decided against it and stuck to a single `ship-clas` that contains the `ship-type` attribute. 

If I had taken developed this program professionally, I would have invested time in building a GUI for a better user experience. Part of the MVP requirements is to create a set-up interface that can be used with 'minimal effort' - which front end programming would be beneficial in achieving. I can imagine using the React library to achieve this, seeing as I have written my code in JavaScript and members of my team use React. To further improve, I would spend more time planning the folder and file structure of this program, as it is not a usual convention to have it set up in this format. I would have written automated unit tests to check that functions are robust and behave the way they are expected to. 
