// let student = {
//   name: "Ali",
//   marks: {
//     math: 80,
//     eng: 70
//   }
// };

// let {name, marks:{math, eng} } = student;
// console.log(name, math, eng );


// let product = {
//   title: "Laptop",
//   price: 50000,
//   specs: {
//     ram: "8GB",
//     storage: "512GB SSD"
//   }
// };

// let {title: mytitle, specs: {ram: myram , storage: mystorage} } = product;

// console.log(`This is the name of your product : '${mytitle}'`);
// console.log(`This is the ram of your laptop :  '${myram}'`);
// console.log(`This is the storage of your laptop :  '${mystorage}'`);



    // let student = {
    //   name: "Hasnain",
    //   marks: {
    //     math: 100,
    //     eng: 100,
    //     science: {
    //       physics: 100,
    //       chemistry: 100
    //     }
    //   }
    // };

    // let {name: studentName , marks: {math: mathmarks, eng: englishMarks,   science: {physics: physicsMarks, chemistry: chemistryMarks}}} = student;
    // console.log("The Name of the student:  " + studentName, +  "Math Marks:  " + mathmarks, "English Marks:  " +  englishMarks, "Physics Marks:  " + physicsMarks, "Chemistry Marks:  " + chemistryMarks);


    // task

// const apiResponse = {
//   status: 200,
//   data: {
//     user: {
//       id: 101,
//       profile: {
//         fullName: "Ali Raza",
//         email: "ali@example.com",
//         address: {
//           city: "Karachi",
//           country: "Pakistan",
//           zipCode: "75000"
//         }
//       }
//     },
//     preferences: {
//       theme: "dark",
//       notifications: true
//     }
//   }
// };

// let {data: {preferences: {theme: settheme , notifications: shownotifications},  user:{id: myid,  profile: {email: myemail,  address : {city: mycity,  country: mycountry}}}}} = apiResponse;


// console.log(`
//   user id is:  "${myid}"
//   userprofile is:  "${myemail}"
//   usercity is:  "${mycity}"
//   usercountry is:  "${mycountry}"
//   themepreference:  "${settheme}"
//   notificationstatus:  "${shownotifications}"
//   `);



