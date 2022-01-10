# Campus-CRUD-app
Starter Server
Starter code for the backend of our final CRUD app

To start:

npm run dev

Download Postgres and Postman.

As a user I:
[   ] will land on a visually pleasing homepage by default, which allows navigation to view all campuses and all students
can navigate to all campuses view, and
[   ] see a list of all campuses in the database
[   ] see an informative message if no campuses exist
[   ] add a new campus
[   ] with a validated form displaying real-time error messages

can navigate to a single campus view, and
[   ] see details about a single campus, including enrolled students (if any)
[   ] see an informative message if no students are enrolled at that campus
[   ] navigate to any student’s single student view 
[   ] delete the campus 
[   ] edit campus information (including adding/removing students)
[   ] with a validated form displaying real-time error messages

can navigate to all students view, and
[   ] see a list of all students in the database
[   ] see an informative message if no students exist
[   ] add a new student
[   ] with a validated form displaying real-time error messages

can navigate to a single student view, and
[   ] see details about a single student, including the campus at which they are enrolled (if exists)
[   ] see an informative message if student is not enrolled at a campus
[   ] navigate to single campus view of the student’s enrolled campus
[   ] delete the student
[   ] edit the student’s information (including campus s/he is enrolled at)
[   ] with a validated form displaying real-time error messages

Technical breakdown of requirements:

All Campuses and All Students 

Database (Sequelize) 
- [ ] Write a `campuses` model with the following information:   
- [ ] name - not empty or null   
- [ ] imageUrl - with a default value   
- [ ] address - not empty or null   
- [ ] description - extremely large text

 - [ ] Write a `students` model with the following information:  
- [ ] firstName - not empty or null   
- [ ] lastName - not empty or null   
- [ ] email - not empty or null
- [ ] imageUrl - with a default value   
- [ ] gpa - decimal between 0.0 and 4.0

 - [ ] Students may be associated with at most one campus
- [ ] Campuses may be associated with many students  

API (Express, Sequelize)
 - [ ] Write a route to serve up all students 
- [ ] Write a route to serve up all campuses  

State management (Redux)
 - [ ] Write a campuses sub-reducer to manage campuses in your Redux store 
- [ ] Write a students sub-reducer to manage students in your Redux store

UI (React)
 - [ ] Write a component to display a list of all campuses (just their names and images) 
- [ ] Write a component to display a list of all students (just their names)

Client-side routing (React-Router)
 - [ ] Display the all-campuses component when the url matches `/campuses`
 - [ ] Display the all-students component when the url matches `/students` 
- [ ] Add links to the navbar that can be used to navigate to the all-campuses view and the all-students view

Single Student and Single Campus 

API (Express, Sequelize)
 - [ ] Write a route to serve up a single campus (based on its id), including that campuses' students
 - [ ] Write a route to serve up a single student (based on their id), including that student's campus

UI (React)
 - [ ] Write a component to display a single campus with the following information:  
- [ ] The campus's name, image, address and description   
- [ ] A list of the names of all students in that campus (or a helpful message if it doesn't have any students) 
- [ ] Write a component to display a single student with the following information:   
- [ ] The student's full name, email, image, and gpa   
- [ ] The name of their campus (or a helpful message if they don't have one)


Client-side routing (React-Router)
- [ ] Display the appropriate campus's info when the url matches `/campuses/:campusId`
 - [ ] Clicking on a campus from the all-campuses view should navigate to show that campus in the single-campus view
 - [ ] Display the appropriate student when the url matches `/students/:studentId`
 - [ ] Clicking on a student from the all-students view should navigate to show that student in the single-student view  
- [ ] Clicking on the name of a student in the single-campus view should navigate to show that student in the single-student view
 - [ ] Clicking on the name of a campus in the single-student view should navigate to show that campus in the single-campus view    

Editing a Campus and Editing a Student 

API (Express, Sequelize)
 - [ ] Write a route to edit a new campus 
- [ ] Write a route to edit a new student  

UI (React) 
- [ ] Write a component to display a form for editing a new campus 
- [ ] Display this component EITHER as part of the single-campus view, or as its own view
 - [ ] Submitting the form with should:   
- [ ] Make a request that causes the new campus to be updated in the database   
- [ ] Display the updates without needing to refresh the page  

- [ ] Write a component to display a form for editing a new student
- [ ] Display this component EITHER as part of the single-student view, or as its own view
 - [ ] Submitting the form with a should:   
- [ ] Make a request that causes the new student to be updated in the database   
- [ ] Display the updates without needing to refresh the page  

Adding Student and Adding Campus

API (Express, Sequelize)
 - [ ] Write a route to add a new campus 
- [ ] Write a route to add a new student  

UI (React ) 
- [ ] Write a component to display a form for adding a new campus that contains inputs for at least the name and address. 
- [ ] Display this component EITHER as part of the all-campuses view, or as its own view
 - [ ] Submitting the form with a valid name/address should:   
- [ ] Make a request that causes the new campus to be persisted in the database   
- [ ] Add the new campus to the list of campuses without needing to refresh the page  

- [ ] Write a component to display a form for adding a new student that contains inputs for at least first name, last name and email 
- [ ] Display this component EITHER as part of the all-students view, or as its own view
 - [ ] Submitting the form with a valid first name/last name/email should:   
- [ ] Make a request that causes the new student to be persisted in the database   
- [ ] Add the new student to the list of students without needing to refresh the page  

Removing a Campus and Removing a Student

API (Express, Sequelize) 
- [ ] Write a route to remove a campus (based on its id) 
- [ ] Write a route to remove a student (based on their id)  

UI (React)
 - [ ] In the all-campuses view, include an `X` button next to each campus 
- [ ] Clicking the `X` button should:   
- [ ] Make a request that causes that campus to be removed from database   
- [ ] Remove the campus from the list of campuses without needing to refresh the page  
- [ ] In the all-students view, include an `X` button next to each student
- [ ] Clicking the `X` button should:   
- [ ] Make a request that causes that student to be removed from database   
- [ ] Remove the student from the list of students without needing to refresh the page
