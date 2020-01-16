import Component from '../Component.js';
import Header from '../header/Header.js';
import DropDown from './DropDown.js';
import Loading from '../loading/loading.js';
import ResultsSection from './ResultsSection.js';
import  { naturalTherapyAgents, conventionalTreatementAgents, sideEffects, yearPublished, studyTypes, studyDesignFeatures, populationSizes, adverseEvents, tumorType, stage, outcomeCategories, outcomeResults, interactions, naturalTherapyTypes, conventionalTreatmentTypes } from './dropDownSeedData.js';

class Filter extends Component {
  onRender(dom) {
    const header = new Header(); 
    dom.prepend(header.renderDOM());
    const filterArrays = [      
      yearPublished, studyTypes, populationSizes, tumorType, naturalTherapyTypes, naturalTherapyAgents, conventionalTreatmentTypes, conventionalTreatementAgents, outcomeCategories, outcomeResults, sideEffects, studyDesignFeatures,  adverseEvents,  stage, interactions,        
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

    const loading = new Loading({ loading: true });
    
    const searchButton = document.createElement('button');
    searchButton.textContent = 'Search';
    searchButton.addEventListener('click', async() => {
      dom.appendChild(loading.renderDOM());
      
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
      console.log('loader here and gone');
      resultsSection.update(searchResults);
      loading.update({ loading: false });
    });

    dom.appendChild(searchButton);

    let resultsSection;

    const loadResults = async() => {
      const summaries = await fetch('/api/v1/summaries');
      const data = await summaries.json();
      resultsSection = new ResultsSection(data);
      dom.appendChild(resultsSection.renderDOM());
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
