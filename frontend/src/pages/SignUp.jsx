import React from 'react';

const SignUp = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <br />
        <label>
          Confirm Password:
          <input type="password" name="confirmPassword" />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
