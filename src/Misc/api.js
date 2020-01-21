let users = [{
  "id": 1,
  "name": "test1",
  "password": "test1",
  "age": "11",
  "gender": "male",
  "email": "test1@gmail.com",
  "phoneNo": "9415346313",
},
{
  "id": 2,
  "name": "test2",
  "password": "test2",
  "age": "12",
  "gender": "male",
  "email": "test2@gmail.com",
  "phoneNo": "9415346314"
},
{
  "id": 3,
  "name": "test3",
  "password": "test3",
  "age": "13",
  "gender": "male",
  "email": "test3@gmail.com",
  "phoneNo": "9415346315"
},
{
  "id": 4,
  "name": "test4",
  "password": "test4",
  "age": "14",
  "gender": "male",
  "email": "test4@gmail.com",
  "phoneNo": "9415346316"
},
{
  "id": 5,
  "name": "test5",
  "password": "test5",
  "age": "15",
  "gender": "male",
  "email": "test5@gmail.com",
  "phoneNo": "9415346317"
},
{
  "id": 6,
  "name": "test6",
  "password": "test6",
  "age": "16",
  "gender": "male",
  "email": "test6@gmail.com",
  "phoneNo": "9415346318"
}
];

const getUsers = () => {
  return users;
};

const getUser = (email, password) => {
  let foundUser = users.filter(user => user.email == email && user.password == password)[0];
  if(foundUser) {
    return {
      status: 'success',
      code: 200,
      user: foundUser
    };
  } else {
    return {
      status: 'error',
      code: 404,
      message: 'User not found'
    }
  }
};

module.exports = { getUsers, getUser };