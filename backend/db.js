const mongoose = require('mongoose');

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    // Disable strict query mode (optional)
    mongoose.set('strictQuery', false);

    // Connect to the database using the URI from environment variables
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    // Log the success message
    console.log(`Database Connected: ${conn.connection.host}`);
  } catch (error) {
    // Log any connection errors
    console.error('Error connecting to database:', error.message);
    process.exit(1); // Exit the process if connection fails
  }
};

// Export the connectDB function
module.exports = connectDB;
