import express from 'express';
import { createUser, deleteUser, getUser, updateUser } from './controllers/user.controller';
import { convertArabicToNumber, convertToRoman } from './romanNumber';
import { memoizedAdd } from './memorize';


const app = express();
const port = process.env.PORT || '8000';

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/', (req,res)=>{
    return res.send('API is working 🤓');
});

// Task - 3
app.post('/user', createUser)
app.get('/user/:userId', getUser)
app.patch('/user/:userId', updateUser)
app.delete('/user/:userId', deleteUser)

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});



// convert to roman number Task - 2

  // Example usage
  const arabicNumber = "١"; // enter Roman Number
  const number = convertArabicToNumber(arabicNumber);
  console.log(number); // Output: 12345
  const romanNumer = convertToRoman(number);
  console.log(romanNumer); // Output: XXVII


  // memorize Task - 1

  
console.log(memoizedAdd(2, 3)); // Output: Performing addition... 5
console.log(memoizedAdd(2, 3)); // Output: 5 (cached result)
console.log(memoizedAdd(2, 3)); // Output: 5 (cached result)