import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDPJQNdvfdjr0blGJBaDWXqclrEjowkbGY",
    authDomain: "budget-app-9ddbb.firebaseapp.com",
    databaseURL: "https://budget-app-9ddbb.firebaseio.com",
    projectId: "budget-app-9ddbb",
    storageBucket: "budget-app-9ddbb.appspot.com",
    messagingSenderId: "638294144707",
    appId: "1:638294144707:web:e3a2591d043ef8acecd476",
    measurementId: "G-Z7RRNT5MR2"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();



database.ref().set({
    name: 'Mojojoojo Wannnng',
    age: 5,
    isSingle: true,
    job: 'Software Dev',
    location: {
        city: 'Toronto',
        country: 'Mexico'
    }
}).then(() => {
    console.log('Data is saved');
}).catch((error) => {
    console.log('This failed: ', error);
});

database.ref('age').set(27);
database.ref('location/city').set("New York");

database.ref('attributes').set(
    {
        height: 73,
        weight: 50
    }
).then(() => {
    console.log("attributes running");
}).catch((error) => {
    console.log("attributes error: ", error);
});

// database.ref('isSingle').remove()
//     .then(() => {
//         console.log("Data was removed");
//     }). catch((e) => {
//         console.log("Did not remove data: ", e);
// });

// database.ref("age").set(null);

database.ref().update({
    job: 'Manager',
    isSingle: null,
    'location/city': 'Beijing'
});


