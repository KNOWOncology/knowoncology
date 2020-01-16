import Component from '../Component.js';

class Header extends Component {
  onRender(dom){
    const logoutButton = dom.querySelector('#logout');
    logoutButton
      .addEventListener('click', async() => {
        await fetch('/api/v1/auth/logout');
        window.location.href = '../../index.html';
      });
  }

  renderHTML() {
    return /*html*/ `
      <header>
        <ul>
          <a href="../../pages/home/home.html">Home</a>
          <a href="../../pages/studies/studies.html">Studies</a>
          <button id="logout">Log out</button>
        </ul>
      </header>
    `;
  }
}

export default Header;
