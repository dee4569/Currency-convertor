const users = [{
    id: 1,
    name: 'Katerina',
    schoolId: 101
}, {
    id: 2,
    name: 'Jessica',
    schoolId: 999
}];

const grades = [{
    id: 1,
    schoolId: 101,
    grade: 86
},{
    id: 2,
    schoolId: 999,
    grade: 100
}, {
    id: 3,
    schoolId: 101,
    grade: 80
} ];

const getUser = (id) => {
    return new Promise((resolve, reject) => {
        const user = users.find((user) => user.id === id);

    if (user) {
        resolve(user);
    }else{
        reject(`Unable to find user with id of ${id}`);
    }
});
}

const getGrades = (schoolId) => {
    return new Promise ((resolve, reject) => {
        resolve(grades.filter((grade) => grade.schoolId === schoolId));
    });
};

// const getStatus = (userId) => {
    //cannot get access to user here down below
//     return getUser(userId).then((user) => {
//         return getGrades(user.schoolId);
//     }).then((grades) => {

//     })
// };

// const getStatus = (userId) => {
//     var user;
//     return getUser(userId).then((tempUser) => {
//         user = tempUser;
//         return getGrades(user.schoolId);
//     }).then((grades) => {
//         let average = 0;

//         if(grades.length > 0){
//             average = grades.map((grade) => grade.grade).reduce((a, b) => a + b) / grades.length;
//         }
//         return `${user.name} has a ${average}% in the class` 
//         console.log(average);
//     })
// };

//async functions returns promises
//() => {
//     return new Promise((resolve, reject) => {
//         resolve('Mike')
//         reject('This is an error')
//     })
// }

//whne you throw an erro through an async function you have access to it through catch
const getStatusAlt = async (userId) => {
    // throw new Error ('This is an error');
    // return 'Mike';

    //await is used before a promise
    const user = await getUser(userId);
    const grades = await getGrades(user.schoolId);
    let average = 0;

        if(grades.length > 0){
            average = grades.map((grade) => grade.grade).reduce((a, b) => a + b) / grades.length;
        }
        return `${user.name} has a ${average}% in the class`
};

getStatusAlt(2).then((status) => {
    console.log(status)
}).catch ((e) => {
    console.log(e)
});

// getStatus(1).then((status) => {
//     console.log(status);
// }).catch((e) => {
//     console.log(e)
// })


