# Project-4 VintCars

Deployed with Heroku [here](https://vintcars.herokuapp.com/)

## Overview

This was the final solo project for the General Assembly Software Engineering Bootcamp, applying the knowledge from the last module - use of Django Framework with PostgreSQL and Python programming language on the backend and continuing to practice with React node for the front-end. I decided to do this project solo, because I wanted to go through the whole process of building an application. My application allows me to find and rent a vintage car.

## Timeframe

9 days

## Installation

Clone or download the repo
pipenv to install Python packages
Enter Shell for the project pipenv shell
Make migrations python manage.py makemigrations
Migrate python manage.py migrate
To start back-end python manage.py runserver
Change into frontend folder cd frontend
Install front-end dependencies yarn
Run the frontend yarn start

## Brief

Create a full stack application with a React front-end and a Django back-end. Application should be RESTful with CRUD routes (GET, POST, PUT, DELETE) and include at least OneToMany and one ManyToMany relationship.

## Technologies used

### Backend:

Python, Django, Django REST Framework, PostgreSQL

### Frontend:

React.js, Axios, Semantic UI React, React Router Dom, React Responsive Carousel

### Development tools:

VS Code, yarn, Insomnia, Heroku, Figma, Git/GitHub, TablePlus, Formspark, reCAPTCHA.

## Approach

As it was the first time when I was building a full application by myself with a limited deadline, I wanted to keep everything very simple to reach MVP as quickly as possible, and to have plenty of time to style and add different additional features.
Planning process took almost two days. I decided to start with detailed wireframes and planning relationships. It definitely helped me to be more organised and to understand what and when to build.

### Figma wireframes

Relationships

Next step was building the backend.

Backend
This was my first experience of creating a backend using Python. I used Django to create a PostgreSQL database with RESTful features. I really enjoyed using Django, it was a very straightforward and efficient process of creating the PostgreSQL database. On building the backend and connecting it to the frontend I was working for two days.

Models and relationship code examples
In this app there are four models - Car, Reviews, Images and Services.

To manage my database I used the TablePlus app.

Frontend
I built the frontend with the help of React, React-router-dom, to get data from the backend I used Axios. To get all necessary information from my API I used Axios.

The next step was to add a review section to the CarPage and display random reviews on aHome page. For the review section I used two React hooks - useState and useEffect and created two functions - handleChange and handleSubmit.

Also, I decided to add a rating possibility, to show with stars how satisfied the user is.

For booking the car I used an enquiry form, where the user can leave all the information. When a filled in form is submitted Formspark it sends a messege with all details to the registered email.

    Styling

For styling, I decided to use the Semantic UI styling framework. I used it in my previous project and really enjoyed using it.
My application has three main pages which are Home, All Cars and Car Page. On Home page user can find general information about the company, how to find and book a car, can see picture carousel and read random reviews.

All Cars page represents car cards catalogue, clicking on each card user can have detailed information about each car.

Car Page contains a picture carousel, detailed information about the car, possible services with description, enquire form, reviews and rating section.

Challenges
The biggest challenge was to fix the error which appeared after adding some styling to the car page. The page started to download from the bottom. Spent a lot of time trying to figure out what exactly caused that error, but I couldn't find it. The solution is to force the page to scroll to the top with the help of useEffect hook, but It caused a new error - every time when a user changed the field of review form the page scrolled to the top. With the help of an instructor, I found the solution.

Wins
This project was very important for me in rebuilding my self-confidence and motivation. I am very happy that I managed to create a working application by myself from scratch.
Good styling. Reaching MVP as planned I had enough time for styling and responsive design.
After submitting the enquire form by user, sending all information to the company's mailbox with the help of Formspark.

Bugs
reCAPTCHA is not working after deployment.
After successfully adding a review thanks message “Thank you very much for your review!” it very quickly disappears, the user can’t properly read it, because the page is immediately reloading.

Key learnings
PostgreSQL and relational database. Working with databases with the help of Django and Python on the backend improved my confidence building the backend of my application.
Being able to adapt JavaScript and Python fundamentals which I have learned during the course in my project.

Future improvements
Fixing all existing bugs.
Adding avarage rating for each car.
Adding user authentication functionality.
Possibility to delete comments.
Adding payment possibility.
