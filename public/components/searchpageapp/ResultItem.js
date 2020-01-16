import Component from '../Component.js';
import conditionalRender from '../util/conditionalResultsRendering.js';
import setArray from './resultsSectionSetArray.js';

class ResultItem extends Component {
  onRender(dom){
    const summary = this.props;    

    conditionalRender(summary, setArray, dom);
  }

  renderHTML(){
    const summary = this.props;
    
    return /*html*/ `
      <details>
        <summary><span class='dropdown-title'>${summary.summaryTitle}</span><span class='dropdown-result'>${summary.outcomeResults.entry}</span></summary>
      </details>
    `;
  }
}

export default ResultItem;
