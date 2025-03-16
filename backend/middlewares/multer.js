import multer from "multer";

// Define storage configuration for uploaded files
const storage = multer.diskStorage({
  filename: function (req, file, callback) {
    // Use the original file name as the name of the uploaded file
    callback(null, file.originalname);
  }
});

// Initialize multer with the storage configuration
const upload = multer({ storage });

// Export the configured multer middleware
export default upload;