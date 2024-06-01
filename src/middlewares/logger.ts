import morgan from 'morgan';

// Define a stream object with a 'write' function
const stream = {
  write: (message: string) => {
    // Customize this function to log to a file, database, or other storage
    console.log(message.trim());
  },
};
export const loggerMiddleware = morgan('combined', { stream });
