import Component from '../Component.js';

class Loading extends Component {
  renderHTML() {
    const loading = this.props.loading;
    if(!loading) {
      return /*html*/'<div></div>';
    }
    return /*html*/`
    <div class="loading-container">
        <img src="../../publicAssets/loading2.gif" alt="Loading">
    </div>
    `;
  }
}

export default Loading;
