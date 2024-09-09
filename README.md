# GitHub User List and Search Application

This project is an Angular application that uses NgRX for state management to retrieve and display a list of GitHub users. The application includes two main tabs: Feed/List Tab and User/Search Tab.

## Features Implemented

### Feed/List Tab
1. **Retrieve a list of users using the GitHub User API**
   - Implemented NgRX state interface, actions, reducers, and effects to fetch users from the GitHub API.
   - Implemented infinite scrolling functionality to load more users onto the page.
   - Display each user's avatar and login name on the page.
   - Clicking a specific user switches to the User/Search Tab with the user's login name pre-populated in the search bar.

### User/Search Tab
1. **Search for a user by their login information**
   - Created a search bar to find a user by their login name.
   - If switching to this tab was a result of clicking the bottom tab, the search bar is empty.
   - If switching to this tab was a result of clicking a user from the Feed/List tab, the search bar is pre-populated with the login name.
   - Display user details including avatar, full name, bio, company, location, and website/blog.
   - If a user has a website and/or blog, use either InAppBrowser or SafariViewController Native Cordova Plugins to load the user's website.

## Missing Features
1. **Feed/List Tab**
   - Indicating users with more than 2 public repositories by having their user information be red (point c).
   - Implementation of this feature through an Angular Directive (point d).

## How to Run the Project
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the application using `ng serve`.

## Documentation & Comments
- The code is clearly documented and commented for better understanding.
- Commit messages are descriptive and clear.

## Contact
For any questions or further information, please contact me.

## Description of Completed Work
The application successfully implements the majority of the required features, with the exception of indicating users with more than 2 public repositories in red and implementing this feature through an Angular Directive. All other functionalities are complete.
