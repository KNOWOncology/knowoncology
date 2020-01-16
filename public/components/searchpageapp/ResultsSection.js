import Component from '../Component.js';
import ResultItem from './ResultItem.js';

class ResultsSection extends Component {
  onRender(dom){
    const summaries = this.props;
    
    summaries.forEach(summary => {
      const resultItem = new ResultItem(summary);
      dom.appendChild(resultItem.renderDOM());
    });

  }

  renderHTML(){
    return /*html*/ `
      <section id="results"></section>
    `;
  }
}

export default ResultsSection;
