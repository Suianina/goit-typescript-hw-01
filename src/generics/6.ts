type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

type Params = Omit<Form, 'errors'>;

const params: Params = {
  email: 'john@example.com',
  firstName: 'Poly',
  lastName: 'Cat',
  phone: '1234567890',
};

console.log(params);