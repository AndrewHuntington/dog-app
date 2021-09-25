# Dog Shelter App

An app that displays a clickable menu of dogs, with each linking to their own profile page.

### [Try it live](https://AndrewHuntington.github.io/dog-app)

# Screen Shot

![Screenshot of Dog Shelter App](/other/dog-app.png "Dad Shelter App")

# Installation and Setup Instructions

Clone down the repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

To Start Server:

`npm start`

To Visit App:

`http://localhost:3000`

# Technologies Used

- React
- JavaScript
- CSS
- git / GitHub
- Bootstrap

# Reflection/Issues

This is a project that was built for Colt Steele's [The Modern React Bootcamp](https://www.udemy.com/course/modern-react-bootcamp) on Udemy. The main purpose of this project is to solidify my understanding of React Router patterns. A secondary goal is to make the site totally responsive.

After completing the project, I still feel a bit unsure of my understanding of React Router, and I think I will review my learning material and the site docs once again.

One problem that still stubbornly persists with my project is the way routes seem to be handled once hosted to GitHub Pages. The expected behavior (which matches the behavior that I see when the project is hosted on my machine) is that the root route to the index page should be like the following:

`<path>/dog-app/dogs`

However, once hosted on GitHub, I get the following route to my index page:

`andrewhuntington.github.io/dogs`

_`/dog-app/` mysteriously disappears!_

This seems to cause some issues when manually refreshing the page, and interferes with my error handling when a user goes to a page that does not exist. In both cases, the user should land on the index page, but instead the user will see GitHub's 404 page. I assume this is a conflict between React Router and how GitHub's server handles routing, but I do not know for sure. If anyone has an answer, please contact me.

# Additional Acknowledgements

This readme is based on a template called the [Peronsal project README template](https://gist.github.com/martensonbj/6bf2ec2ed55f5be723415ea73c4557c4) by GitHub user [martensonbj](https://gist.github.com/martensonbj).

This project was bootstrapped with `react-create-app`. I tried my best to mimic the design of the original without looking at the source code. All other code is my own.

Copyright 2021, Andrew Huntington.
