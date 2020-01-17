import Component from '../Component.js';
import Header from '../header/Header.js';
import DropDown from './DropDown.js';
import Loading from '../loading/loading.js';
import ResultsSection from './ResultsSection.js';
import  { naturalTherapyAgents, conventionalTreatementAgents, sideEffects, yearPublished, studyTypes, studyDesignFeatures, populationSizes, adverseEvents, tumorType, stage, outcomeCategories, outcomeResults, interactions, naturalTherapyTypes, conventionalTreatmentTypes } from './dropDownSeedData.js';
import getName from '../util/get-name.js';

class SearchPageApp extends Component {
  onRender(dom) {
    const loading = new Loading({ loading: true });
    dom.appendChild(loading.renderDOM());

    getName()
      .then(name => {
        const header = new Header(name); 
        dom.prepend(header.renderDOM());
      });

    const filterArrays = [      
      yearPublished, studyTypes, populationSizes, tumorType, naturalTherapyTypes, naturalTherapyAgents, conventionalTreatmentTypes, conventionalTreatementAgents, outcomeCategories, outcomeResults, sideEffects, studyDesignFeatures,  adverseEvents,  stage, interactions
    ];

    let selectedOptionsArray = []; 

    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.id = 'text-input';
    searchInput.placeholder = 'Input search query here...';
    dom.appendChild(searchInput);

    const searchButton = document.createElement('button');
    searchButton.id = 'search-button';
    searchButton.textContent = 'Search';
    dom.appendChild(searchButton);

    const clearButton = document.createElement('button');
    clearButton.id = 'clear-button';
    clearButton.textContent = 'Reset search fields';
    dom.appendChild(clearButton);

    const filterDropDown = document.createElement('details');
    const filterDropDownSummary = document.createElement('summary');
    filterDropDownSummary.textContent = 'Filter Results By...';
    filterDropDown.appendChild(filterDropDownSummary);

    filterArrays.forEach(array => {
      const dropDown = new DropDown({ array, selectedOptionsArray }); 
      filterDropDown.appendChild(dropDown.renderDOM());
    });

    dom.appendChild(filterDropDown);

    clearButton.addEventListener('click', async() => {
      loading.update({ loading: true });

      selectedOptionsArray = [];
      searchInput.value = '';
      const filterBoxes = dom.querySelectorAll('input[type=checkbox]');
      
      filterBoxes.forEach(filterBox => {
        if(filterBox.nextElementSibling.textContent.slice(0, 3) === 'All'){
          filterBox.checked = true;
        } else {
          filterBox.checked = false;
        }
      });

      const searchObject = { searchTextInput : '', selectedOptionsArray: [] };

      const searchResults = await fetch('/api/v1/summaries/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(searchObject)
      });

      const data = await searchResults.json();

      resultsSection.update(data);
      loading.update({ loading: false });
    });

    searchButton.addEventListener('click', async() => {
      loading.update({ loading: true });
      
      const dropdowns = dom.querySelectorAll('details');
      dropdowns.forEach(dropdown => {
        dropdown.open = false;
      });
      

      const searchTextInput = searchInput.value;
      const searchObject = { searchTextInput, selectedOptionsArray };
      console.log(searchObject);
      
      const searchResults = await fetch('/api/v1/summaries/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(searchObject)
      });

      const data = await searchResults.json();

      resultsSection.update(data);
      loading.update({ loading: false });
    });

    let resultsSection;

    (async() => {
      const summaries = await fetch('/api/v1/summaries');
      const data = await summaries.json();
      resultsSection = new ResultsSection(data);
      dom.appendChild(resultsSection.renderDOM());
      loading.update({ loading: false });
    })();
  }
    
  renderHTML(){
    return /*html*/`
        <div id='filter'>
        </div>
    `; 
  }}

export default SearchPageApp;
