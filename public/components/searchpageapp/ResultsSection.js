import Component from '../Component.js';
import ResultItem from './ResultItem.js';
import UnsummarizedResultItem from './UnsummarizedResultItem.js';

class ResultsSection extends Component {
  onRender(dom){
    const { summarizedData, unsummarizedData } = this.props;
    
    let summarizedCount = 0;

    const caseReportResultsSection = dom.querySelector('#case-report-results');
    const clinicalTrialResultsSection = dom.querySelector('#clinical-trial-results');
    const observationalResultsSection = dom.querySelector('#observational-results');
    const systemicReviewResultsSection = dom.querySelector('#systematic-review-results');
    const unsummarizedResultsSection = dom.querySelector('#unsummarized-results-section');
    
    if(!summarizedData[0]){
      const noResults = document.createElement('div');
      noResults.id = 'no-results';
      noResults.textContent = 'Sorry, no results were found for your search. Please try changing your query or filters.';
      dom.appendChild(noResults);
    }

    summarizedData.forEach(summary => {
      summarizedCount++;
      const resultItem = new ResultItem(summary);
      const studyType = summary.studyType.toLowerCase();
      
      if(studyType === 'case report/series'){
        caseReportResultsSection.appendChild(resultItem.renderDOM());
      } 
      else if(studyType === 'case reports/series'){
        caseReportResultsSection.appendChild(resultItem.renderDOM());
      }
      else if(studyType === 'clinical trial'){
        clinicalTrialResultsSection.appendChild(resultItem.renderDOM());
      }
      else if(studyType === 'observational'){
        observationalResultsSection.appendChild(resultItem.renderDOM());
      }
      else if(studyType === 'systematic review and/or meta-analysis'){
        systemicReviewResultsSection.appendChild(resultItem.renderDOM());
      }
      else {
        dom.appendChild(resultItem.renderDOM());
      }
    });

    const resultsHeader = document.createElement('h1');
    resultsHeader.id = 'results-header';
    resultsHeader.textContent = 'Summarized Search Results';
    const summarizedTotal = document.createElement('span');
    summarizedTotal.classList.add('header-counter');
    summarizedTotal.textContent = `Total results: ${summarizedCount}`;
    resultsHeader.appendChild(summarizedTotal);
    dom.prepend(resultsHeader);
    
    unsummarizedData.forEach(unsummarizedItem => {
      const unsummarizedResultItem = new UnsummarizedResultItem({ unsummarizedItem });
      unsummarizedResultsSection.appendChild(unsummarizedResultItem.renderDOM());
    });
  }

  renderHTML(){
    const { summarizedData, unsummarizedData } = this.props;
    let caseReportCount = 0;
    let clinicalTrialCount = 0;
    let observationalCount = 0;
    let systematicCount = 0;
    let unsummarizedCount = 0;

    summarizedData.forEach(summary => {
      const studyType = summary.studyType.toLowerCase();
      if(studyType === 'case report/series'){
        caseReportCount++;
      } 
      else if(studyType === 'case reports/series'){
        caseReportCount++;
      }
      else if(studyType === 'clinical trial'){
        clinicalTrialCount++;
      }
      else if(studyType === 'observational'){
        observationalCount++;
      }
      else if(studyType === 'systematic review and/or meta-analysis'){
        systematicCount++;
      }
    });

    // eslint-disable-next-line no-unused-vars
    unsummarizedData.forEach(UnsummarizedResultItem => {
      unsummarizedCount++;
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
        <h1 id='unsummarized-results-header'>Unsummarized Search Results<span class='header-counter'>Total results: ${unsummarizedCount}</span></h1>
        <div id='unsummarized-results-section'></div>
      </section>
    `;
  }
}

export default ResultsSection;
