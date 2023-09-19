# React App of Movie Reviewer Website
A functional, user-friendly platform for film enthusiasts to engage in film critique and analysis. 

This is the front-end of the website, the backend using Node.js and MongoDB can be found at: https://github.com/yunke-l/movie-reviewer-web-node-server   
  
Runs the node server first, you can open [http://localhost:4000/api/users](http://localhost:4000/api/users) to view the users' data, or go to [http://localhost:4000/api/posts](http://localhost:4000/api/posts) to view the posts' data. 

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view the website.


## Overview
* Technologies: JavaScript, React.js, Node.js, MongoDB, IMDb API.
* User Roles: Implemented user registration with options for regular users and verified users (resembling industry professionals such as directors or actors), with an admin role for content management.
* Functionality: Implemented features, differentiating between anonymous users and registered users. These features include movie searches, review submissions, profile customization, and follow/follower. Anonymous users can explore movie information and read reviews. Registered users can submit reviews, customize profile, and engage in social interactions by following and unfollowing other users.
* Responsive UI: Ensured a responsive user interface that maintains structural integrity and alignment.


## Home page
* Home page includes all the posts, and shows the latest post at the beginning. 
<img width="829" alt="Screenshot 2023-09-19 at 3 26 04 AM" src="https://github.com/yunke-l/movie-reviewer-web-react-app/assets/66773247/fd3655ec-c61a-4264-aa8d-298c2371d9b4">
<img width="827" alt="Screenshot 2023-09-19 at 3 26 18 AM" src="https://github.com/yunke-l/movie-reviewer-web-react-app/assets/66773247/313a25e3-4c30-48e8-8076-4e779b1009de">
 
* Each post includes the movie's image and name; user's name and avatar; post's title, time and the first three lines. The posts can be liked and disliked by all registered users.
![Screenshot 2023-09-19 at 3 34 09 AM](https://github.com/yunke-l/movie-reviewer-web-react-app/assets/66773247/00266c08-ea4f-4c0b-99c4-29671719790c)
 
* The movie's image is clickable, will render to the movie's infomation page.
![Screenshot 2023-09-19 at 3 35 13 AM](https://github.com/yunke-l/movie-reviewer-web-react-app/assets/66773247/cdc38711-fdf5-4818-8ef6-1cc5d8f47ff6)
![Screenshot 2023-09-19 at 3 35 23 AM](https://github.com/yunke-l/movie-reviewer-web-react-app/assets/66773247/1aba46e7-ef79-49e5-bc15-933b269bd5fe)
 
* The user's avatar is clickable, will render to the user's profile page.
![Screenshot 2023-09-19 at 3 37 16 AM](https://github.com/yunke-l/movie-reviewer-web-react-app/assets/66773247/cefc420e-3306-4592-8f9d-b00d1c6d4a51)
 

### Register page
* If the checking box is not selected, the user will be registered as a regular user, which can search movies, write and delete posts, follow/unfollow others, modify own profile, view other's profile.
* The users can choose to select the checking box to be a verified user (resembling industry professionals such as directors or actors). Their profile page will be slightly different from regular users with some informations about their movies.
![register](https://github.com/yunke-l/movie-reviewer-web-react-app/assets/66773247/e8ef4b06-d117-4a0b-8dee-508eb4815efd)
 
### Loginin page
![Screenshot 2023-09-19 at 3 22 17 AM](https://github.com/yunke-l/movie-reviewer-web-react-app/assets/66773247/cca41186-5229-4fb3-a158-800aa02dec09)
 
### Search page
![anony-search](https://github.com/yunke-l/movie-reviewer-web-react-app/assets/66773247/f8d36753-a975-4193-aeae-74bf071374e8)
 
### Anonymous User
 * The anonymous user can only view others' posts, but can not write posts themselves.
 * The anonymous user can not like/dislike posts.
 * The anonymous user can not follow/unfollow others.
 
### Regular User
* Regular user's home page has a section shows all the posts of the user. 
![Screenshot 2023-09-19 at 3 40 38 AM](https://github.com/yunke-l/movie-reviewer-web-react-app/assets/66773247/d59cb8db-d314-413b-887d-f20e5c3ad111)

* Regular user can delete their own posts from the home page by clicking the X button.
![Screenshot 2023-09-19 at 3 42 09 AM](https://github.com/yunke-l/movie-reviewer-web-react-app/assets/66773247/25795483-3774-4b5f-97ae-3126f5fdb427)

* Regular user has a profile page:
They can edit their profiles, including change avatar from the given library, change first name and last name.
They can check follow/follower lists. Both lists can be expanded or collapse by clicking "Show More"/"Show Less". 
They can see their recent posts.
![login-profile](https://github.com/yunke-l/movie-reviewer-web-react-app/assets/66773247/f27bd84d-757d-4850-babf-62ac9b1ac9ff)




## Verified User
