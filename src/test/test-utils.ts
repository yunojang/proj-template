export const createUser = (userProp?: any) => {
  const user = { ...userProp };
  return user;
};

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
