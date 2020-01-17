import Component from '../Component.js';
import ResultItem from './ResultItem.js';

class ResultsSection extends Component {
  onRender(dom){
    const summaries = this.props;
    const resultsHeader = document.createElement('h1');
    resultsHeader.id = 'results-header';
    resultsHeader.textContent = 'Search Results';
    dom.prepend(resultsHeader);
    
    if(!summaries[0]){
      const noResults = document.createElement('div');
      noResults.id = 'no-results';
      noResults.textContent = 'Sorry, no results were found for your search. Please try changing your query or filters.';
      dom.appendChild(noResults);
    }

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
