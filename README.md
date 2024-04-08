# Project README

## Project Name: Task Manager API

### Description:
The Task Manager API is a RESTful web service designed to manage tasks. It allows users to perform CRUD (Create, Read, Update, Delete) operations on tasks stored in a MongoDB database. This API is built using Node.js, Express.js, and Mongoose.

### Features:
- **Create Task:** Users can create new tasks by sending a POST request to the API endpoint.
- **Read Tasks:** Users can retrieve all tasks or a single task by sending GET requests to the appropriate endpoints.
- **Update Task:** Users can update a task by sending a PATCH request with the updated data to the API endpoint.
- **Delete Task:** Users can delete a task by sending a DELETE request to the API endpoint.

### Technologies Used:
- **Node.js:** A JavaScript runtime environment used to execute server-side code.
- **Express.js:** A web application framework for Node.js used to create the API endpoints and handle HTTP requests.
- **MongoDB:** A NoSQL database used to store task data.
- **Mongoose:** An Object Data Modeling (ODM) library for MongoDB and Node.js, used to interact with the MongoDB database.
- **dotenv:** A module used for loading environment variables from a `.env` file into `process.env`.
- **async/await:** Asynchronous programming syntax used to handle asynchronous operations cleanly.

### Project Structure:
- **models/schema.js:** Defines the schema for the task model using Mongoose.
- **middleware/:** Contains middleware functions for error handling and handling asynchronous operations.
- **errors/custom_Error.js:** Defines a custom error handler for the project.
- **DB/db.js:** Contains the database connection logic using Mongoose.
- **routes/router.js:** Defines the API routes for handling task-related requests.
- **app.js:** The main entry point of the application where middleware, routes, and server initialization are configured.

### How to Use:
1. Clone the repository to your local machine.
2. Install dependencies using `npm install`.
3. Create a `.env` file in the root directory and set the `MONGO_URL` variable to your MongoDB connection string.
4. Start the server using `npm start`.
5. Use API endpoints to perform CRUD operations on tasks.

### API Endpoints:
- **GET /api/v1/tasks:** Retrieves all tasks.
- **GET /api/v1/tasks/:id:** Retrieves a single task by ID.
- **POST /api/v1/tasks:** Creates a new task.
- **PATCH /api/v1/tasks/:id:** Updates an existing task by ID.
- **DELETE /api/v1/tasks/:id:** Deletes a task by ID.

### Error Handling:
- Custom error handling middleware is implemented to handle errors and provide appropriate responses.


### Contact:
- For any inquiries or support, please contact www.linkedin.com/in/bahergamalelshaikh.
