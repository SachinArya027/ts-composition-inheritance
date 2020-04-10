import { UserEdit } from './views/UserEdit';
import { User } from './models/User';

const user = User.buildUser({ name: 'Raju', age: 60 });
const root = document.getElementById('root');
if (root) {
  const userEdit = new UserEdit(root, user);
  userEdit.render();
  console.log(userEdit);
} else {
  throw new Error('Root Element Not Found');
}

// import { UserList } from './views/UserList';
// import { User, UserProps } from './models/User';
// import { Collection } from './models/Collection';

// const users = new Collection(
//   'http://localhost:3000/users',
//   (jsonData: UserProps) => User.buildUser(jsonData)
// );

// users.on('change', () => { 
//   const root = document.getElementById('root');

//   if (root) {
//     new UserList(root, users).render();
//   }
// });

// users.fetch();
