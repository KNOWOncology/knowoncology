const root = document.getElementById('root');
const form = document.createElement('form');

const displaySignup = () => {
  form.id = 'Signup';
  form.innerHTML = /*html*/ `
    <fieldset>
      <legend>Signup</legend>
      <input name="displayName" type="text" placeholder="Display Name">
      <input name="email" type="text" placeholder="Email">
      <input name="password" type="password" placeholder="Password">
      <button id="user-button">Signup</button>
    </fieldset>
    <p id="switcher">Already have a KNOWOncology account?</p>
    <button id="display-login">Click here to log in!</button>
  `;  

  form
    .addEventListener('submit', event => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const user = {
        displayName: formData.get('displayName'),
        email: formData.get('email'),
        password: formData.get('password')
      };

      fetch('/api/v1/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
        .then(res => res.json())
        .then(() => {
          window.location.reload();
        });
    });

  root.appendChild(form);

  const loginButton = document.getElementById('display-login');

  loginButton
    .addEventListener('click', displayLogin);
};

const displayLogin = () => {
  form.id = 'Login';
  form.innerHTML = /*html*/ `
    <fieldset>
      <legend>Login</legend>
      <input name="email" type="text" placeholder="Email">
      <input name="password" type="password" placeholder="Password">
      <button id="user-button">Log In</button>
    </fieldset>
    <p id="switcher">Don't have a KNOWOncology account yet?</p>
    <button id="display-signup">Click here to sign up!</button>
  `;

  form
    .addEventListener('submit', event => {
      event.preventDefault();

      const formData = new FormData(event.target);
      const user = {
        email: formData.get('email'),
        password: formData.get('password')
      };

      fetch('/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
        .then(res => res.json())
        .then(() => {
          window.location.reload();
        });
    });

  root.appendChild(form);

  const signupButton = document.getElementById('display-signup');

  signupButton
    .addEventListener('click', displaySignup);
};

fetch('/api/v1/auth/verify', {
  credentials: 'include'
})
  .then(res => res.json())
  .then(user => {
    if(user._id){
      window.location.href = './pages/search-page/search-page.html';
    } else {
      displayLogin();
    }
  });
