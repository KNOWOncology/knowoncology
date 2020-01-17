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
    
    const color = summary.outcomeResults.entry === 'Neutral' ? 'color:blue' : summary.outcomeResults.entry === 'Mixed' ? 'color:orange' : summary.outcomeResults.entry === 'Negative' ? 'color:red' : summary.outcomeResults.entry === 'Positive' ? 'color:green' : 'color:black';

    return /*html*/ `
      <details>
        <summary><span class='dropdown-title'>${summary.summaryTitle}</span><span class='dropdown-result' style=${color}>${summary.outcomeResults.entry}</span></summary>
      </details>
    `;
  }
}

export default ResultItem;
