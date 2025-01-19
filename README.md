# Social Media Screen

This is a web application that allows users to submit their name, social media handle, and upload multiple images. The submitted data is displayed on an admin dashboard, showing each user's name, social media handle, and all images they have uploaded.

## Features

- **User Form**: Users can input their name, social media handle, and upload multiple images.
- **Data Storage**: All data (name, social media handle, and images) is stored in MongoDB.
- **Admin Dashboard**: Displays a list of all users along with their name, social media handle, and the images they uploaded.

## Tech Stack

- **Frontend**: ReactJS
- **Backend**: Node.js with Express
- **Database**: MongoDB
- **File Storage**: Local Storage (Images are uploaded and stored in the `uploads/` folder)

## Installation

### Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or above)
- [MongoDB](https://www.mongodb.com/) (You can use MongoDB Atlas for a cloud database or run a local instance)
- [npm](https://www.npmjs.com/) (Node package manager, usually comes with Node.js)

### Backend Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/social-media-submission-system.git
   cd social-media-submission-system/backend
