import Component from '../Component.js';
import Header from '../header/Header.js';
import DropDown from './DropDown.js';
import ResultsSection from './ResultsSection.js';
import  { naturalTherapies, conventionalTreatementTypes, sideEffects, yearPublished, studyDesigns, studyDesignFeatures, populationSizes, adverseEvents, tumorType, stage, outcomes, outcomeTypes, interactions, naturalTerapyTypes, conventionalTreatmentTypes } from './dropDownSeedData.js';

class Filter extends Component {
  onRender(dom) {
    const header = new Header(); 
    dom.prepend(header.renderDOM());
    const filterArrays = [      
      naturalTherapies, conventionalTreatementTypes, sideEffects, yearPublished, studyDesigns, studyDesignFeatures, populationSizes, adverseEvents, tumorType, stage, outcomes, outcomeTypes, interactions, naturalTerapyTypes, conventionalTreatmentTypes       
    ];

    const selectedOptionsArray = []; 
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.name = 'searchBar';
    dom.appendChild(searchInput);

    filterArrays.forEach(array => {
      const dropDown = new DropDown({ array, selectedOptionsArray }); 
      dom.appendChild(dropDown.renderDOM());
    });

    const searchButton = document.createElement('button');
    searchButton.textContent = 'Search';
    searchButton.addEventListener('click', async() => {
      const searchTextInput = searchInput.value;
      const searchObject = { 
        searchTextInput, 
        selectedOptionsArray
      };
      
      const searchResults = await fetch('/api/v1/summaries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(searchObject)
      });

      resultsSection.update(searchResults);
    });
    dom.appendChild(searchButton);

    const resultsSection = new ResultsSection();
    dom.appendChild(resultsSection.renderDOM());

    const loadResults = async() => {
      const initialResults = await fetch('/api/v1/summaries');
      resultsSection.update(initialResults);
    };

    loadResults();
    
    // eslint-disable-next-line no-console
    console.log('done done');
  }
    
  renderHTML(){
    return /*html*/`
        <div id='filter'>
        </div>
    `; 
  }}

export default Filter;
