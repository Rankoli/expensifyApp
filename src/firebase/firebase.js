import * as firebase from 'firebase';



  // Initialize Firebase
  const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };
  firebase.initializeApp(config);
  const database = firebase.database();

  export {firebase, database as default};














  ///////exempels
// //child_removed
// database.ref('Expenses').on('child_removed', (snapshot) =>{
// console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref('Expenses').on('child_changed', (snapshot) =>{
//     console.log(snapshot.key, snapshot.val());
// });

// //child_added
// database.ref('Expenses').on('child_added', (snapshot) =>{
//     console.log(snapshot.key, snapshot.val());
// });




// database.ref('Expenses').once('value').then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

// database.ref('Expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

//setup data base structure with push()

// database.ref('Expenses').push({
//     description: 'expense 1',
//     note: '',
//     amount: 10.50,
//     createdAt:12131
// });




//    //listen for updates
//   database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
//   })


//   //faching all data from data base -(single time)
//   database.ref().once('value').then((snapshot) => { // on snapshot we have access to the data **on ref we can filter the data we get
//    const val = snapshot.val();
//    console.log(val);
//   }).catch((e) => {
//     console.log('Error fatching data', e);
//   });

//    firebase.database().ref().set({ // set without reg args will override all data
//        name: 'Ran Koli',
//        age: 28,
//        isSingle: false
//    });

// //   firebase.database().ref('age').set(27.5);//updating data

// //   firebase.database().ref('name').set('Ran koli');//updating data

// //   //adding data

//    firebase.database().ref('attributes').set({
//        height:1.83,
//        weight: 75
//    }).then(() => {
//        console.log('data saved!')
//    }).catch((error) => {
//      console.log('this Failed', error)
//    })
// //removing data
//      firebase.database().ref('age').remove().then(() => {
//          console.log('data was removed');
//      }).catch((e) => {
//          console.log('error removing data', e);
//      })

// //updating data
//      firebase.database().ref().update({
//         name:'afaf',//update value
//         age: 77,//update value
//         job: 'software dev',// adding new value
//         isSingle:null, //remove value
//         'attributes/height':1.84 //updade neasted object
//      });