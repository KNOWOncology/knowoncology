import Component from '../Component.js';

class UnsummarizedResultItem extends Component {
  onRender(dom){

  }

  renderHTML(){
    const { unsummarizedItem } = this.props;

    return /*html*/ `
      <details>
        <summary><span class='dropdown-title'>${unsummarizedItem.title}</span><span></summary>
        <p class='line-title'>Title: <span class='line-content'>${unsummarizedItem.title}</span></p>
        <p class='line-title'>Year Published: <span class='line-content'>${unsummarizedItem.pubYear}</span></p>
        <p class='line-title'>Source: <span class='line-content'>${unsummarizedItem.source}</span></p>
        <p class='line-title'>Abstract: <span class='line-content'>${unsummarizedItem.abstract}</span></p>
      </details>
    `;
  }
}

export default UnsummarizedResultItem;
