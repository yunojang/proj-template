import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import LoginForm from '../LoginForm';

describe('LoginForm', () => {
  test('sould login new user and call onSuccess', async () => {
    const newUser = { email: '123@123', password: '123123' };
    const onSuccess = jest.fn();

    await render(<LoginForm onSuccess={onSuccess} />);

    userEvent.type(screen.getByLabelText('email'), newUser.email);
    userEvent.type(screen.getByLabelText('password'), newUser.password);

    userEvent.click(screen.getByRole('button', { name: /login/i }));

    await waitFor(() => expect(onSuccess).toHaveBeenCalledTimes(1));
  });
});
