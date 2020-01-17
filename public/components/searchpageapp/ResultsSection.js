import Component from '../Component.js';
import ResultItem from './ResultItem.js';

class ResultsSection extends Component {
  onRender(dom){
    const summaries = this.props;
    const resultsHeader = document.createElement('h1');
    resultsHeader.id = 'results-header';
    resultsHeader.textContent = 'Summarized Search Results';
    dom.prepend(resultsHeader);

    const caseReportResultsSection = dom.querySelector('#case-report-results');
    const clinicalTrialResultsSection = dom.querySelector('#clinical-trial-results');
    const observationalResultsSection = dom.querySelector('#observational-results');
    const systemicReviewResultsSection = dom.querySelector('#systematic-review-results');
    
    if(!summaries[0]){
      const noResults = document.createElement('div');
      noResults.id = 'no-results';
      noResults.textContent = 'Sorry, no results were found for your search. Please try changing your query or filters.';
      dom.appendChild(noResults);
    }

    summaries.forEach(summary => {
      const resultItem = new ResultItem(summary);
      const studyType = summary.studyType.toLowerCase();
      if(studyType === 'case report/series'){
        caseReportResultsSection.appendChild(resultItem.renderDOM());
      } 
      else if(studyType === 'clinical trial'){
        clinicalTrialResultsSection.appendChild(resultItem.renderDOM());
      }
      else if(studyType === 'observational results'){
        observationalResultsSection.appendChild(resultItem.renderDOM());
      }
      else if(studyType === 'systematic review and/or meta-analysis'){
        systemicReviewResultsSection.appendChild(resultItem.renderDOM());
      }
      else {
        dom.appendChild(resultItem.renderDOM());
      }
    });

  }

  renderHTML(){
    const summaries = this.props;
    let caseReportCount = 0;
    let clinicalTrialCount = 0;
    let observationalCount = 0;
    let systematicCount = 0;

    summaries.forEach(summary => {
      const studyType = summary.studyType.toLowerCase();
      if(studyType === 'case report/series'){
        caseReportCount++;
      } 
      else if(studyType === 'clinical trial'){
        clinicalTrialCount++;
      }
      else if(studyType === 'observational results'){
        observationalCount++;
      }
      else if(studyType === 'systematic review and/or meta-analysis'){
        systematicCount++;
      }
    });

    return /*html*/ `
      <section id="results">
        <details id='case-report-results'>
          <summary class='results-list'>Case Report/Series Results<span class='counter'>Total results: ${caseReportCount}</span></summary>
        </details>
        <details id='clinical-trial-results'>
          <summary class='results-list'>Clinical Trial Results<span class='counter'>Total results: ${clinicalTrialCount}</span></summary>
        </details>
        <details id='observational-results'>
          <summary class='results-list'>Observational Results<span class='counter'>Total results: ${observationalCount}</span></summary>
        </details>
        <details id='systematic-review-results'>
          <summary class='results-list'>Systematic Review and/or Meta-analysis Results<span class='counter'>Total results: ${systematicCount}</span></summary>
        </details>
      </section>
    `;
  }
}

export default ResultsSection;
