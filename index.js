const express = require('express')
const connectDB = require('./config/db')

const app = express()

// Connect Database
connectDB()

// Initialising middleware
app.use(express.json({ extended: false }))

app.get('/', (req, res) => {
    res.send('API running...')
})

// Define Routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/posts', require('./routes/api/posts'))

const PORT = process.env.PORT || 5555
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

// const arr = [10, 12, 15, 21];

// // async function f(i, arr) {
// //     await setTimeout(function() {
// //         console.log('Index: ' + i + ', element: ' + arr);
// //         }, 3000);
// // }


// for (var i = 0; i < arr.length; i++) {
// // setTimeout(function() {
// // console.log('Index: ' + i + ', element: ' + arr[i]);
// // }, 3000);

// f(i, arr[i]);

// console.log(arr[i])
// }
// 

// var myObject = {
//     foo: "bar",
//     func: () => {
//     var self = this;
//     this.foo = "hello"
//     console.log("outer func: this.foo = " + this.foo);
//     console.log("outer func: self.foo = " + self.foo);
//     (()=> {
//     console.log("inner func: this.foo = " + this.foo);
//     console.log("inner func: self.foo = " + self.foo);
//     })();
// }
// };
//     myObject.func();

// const arr = [1,2,3,4];
// arr.push(5);
// console.log(arr);
// arr = [10,20,30]
// console.log(arr)
