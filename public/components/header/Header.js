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
    const name = this.props;

    return /*html*/ `
      <header>
        <div id='know-header-background'><span id='know-header-text'>KNOWOncology Summary Search Page</span></div>
        <span id='identifier'>Logged in as: ${name}</span>
        <button id="logout">Log out</button>
      </header>
    `;
  }
}

export default Header;
