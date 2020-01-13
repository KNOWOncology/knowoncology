import Component from '../Component.js';
import deleteCookie from '../util/deleteCookie.js';

class Header extends Component {
  onRender(dom){
    const logoutButton = dom.querySelector('#logout');
    logoutButton
      .addEventListener('click', () => {
        deleteCookie('session');
      });
  }

  renderHTML() {
    return /*html*/ `
      <header>
        <ul>
          <a href="../../pages/home/home.html">KNOW Home</a>
          <a href="../../pages/studies/studies.html">Studies</a>
          <button id="logout">Log out</button>
        </ul>
      </header>
    `;
  }
}

export default Header;
