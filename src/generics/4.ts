interface IUserProfile {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(initialValues: Partial<IUserProfile>): Partial<IUserProfile> {
  return initialValues;
}

const updateResult = createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
});
console.log(updateResult);