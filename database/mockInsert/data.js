const {ContentType, Collections} = require('../models');

// ContentType.create({
//   contentTypeName: 'Test',
//   Types: ['Test', 'Test2']

// }).then(newUser => {
//   console.log('New user created:', newUser);
// }).catch(error => {
//   console.error('Error creating user:', error);
// });
Collections.create({
  contentId: 5,
  content: {test: 'test'}


}).then(newUser => {
  console.log('New user created:', newUser);
}).catch(error => {
  console.error('Error creating user:', error);
});
// Collections.findAll({
//   where: {
//     collectionId: 1
//   }


// }).then(newUser => {
//   console.log('New user created:', newUser);
// }).catch(error => {
//   console.error('Error creating user:', error);
// });

