import app from "./app.js";
import { connectDB } from "./db.js";

connectDB();
app.listen(4000);    

// const PORT = process.env.PORT || 4000;

// // const app = express();

// app.listen(PORT, () => {
//   console.log(`Server listening on ${PORT}`);
// });

console.log('Server listening on port', 4000);