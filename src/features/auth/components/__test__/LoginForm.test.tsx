import {
  render,
  screen,
  waitFor,
  userEvent,
  createUser,
} from '@/test/test-utils';

import LoginForm, { INVALIDE_MSG } from '../LoginForm';

const tryLogin = (
  user: ReturnType<typeof createUser>,
  onSuccess: () => void
) => {
  render(<LoginForm onSuccess={onSuccess} />);

  userEvent.type(screen.getByLabelText('email'), user.email);
  userEvent.type(screen.getByLabelText('password'), user.password);

  userEvent.click(screen.getByRole('button', { name: /login/i }));
};

describe('LoginForm', () => {
  test('input an invalid password does not call onSuccess and, validate notice', async () => {
    const onSuccess = jest.fn();
    const newUser = createUser({ password: '123' });

    tryLogin(newUser, onSuccess);

    await waitFor(() => expect(onSuccess).toHaveBeenCalledTimes(0));
    expect(await screen.findByRole('alert')).toHaveTextContent(
      INVALIDE_MSG.password
    );
  });

  test('input an invalid email does not call onSuccess and, validate notice', async () => {
    const onSuccess = jest.fn();
    const newUser = createUser({ email: 'ab' });

    tryLogin(newUser, onSuccess);

    await waitFor(() => expect(onSuccess).toHaveBeenCalledTimes(0));
    expect(await screen.findByRole('alert')).toHaveTextContent(
      INVALIDE_MSG.email
    );
  });

  test('sould login new user and call onSuccess', async () => {
    const onSuccess = jest.fn();
    const newUser = createUser();

    tryLogin(newUser, onSuccess);

    await waitFor(() => expect(onSuccess).toHaveBeenCalledTimes(1));
  });
});
