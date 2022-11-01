//temp interface
interface User {
  email: string;
  password: string;
}

export const createUser = ({
  email = 'abc@123',
  password = 'abc123',
}: Partial<User> = {}): User => {
  const user = { email, password };
  return user;
};

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
