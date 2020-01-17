import Component from '../Component.js';
import conditionalRender from '../util/conditionalResultsRendering.js';
import { unsummarizedSetArray } from './resultsSectionSetArray.js';

class UnsummarizedResultItem extends Component {
  onRender(dom){
    const { unsummarizedItem } = this.props;

    conditionalRender(unsummarizedItem, unsummarizedSetArray, dom);
  }

  renderHTML(){
    const { unsummarizedItem } = this.props;

    return /*html*/ `
      <details>
        <summary><span class='dropdown-title'>${unsummarizedItem.title}</span></summary>
      </details>
    `;
  }
}

export default UnsummarizedResultItem;
