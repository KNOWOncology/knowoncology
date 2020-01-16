import Component from '../Component.js';
import Header from '../header/Header.js';
import DropDown from './DropDown.js';
import  { naturalTherapies, conventionalTreatementTypes, sideEffects, yearPublished, studyDesigns, studyDesignFeatures, populationSizes, adverseEvents, tumorType, stage, outcomes, outcomeTypes, interactions, naturalTerapyTypes, conventionalTreatmentTypes } from './dropDownSeedData.js';
import Loading from '../loading/loading.js';

///// submit button, clear all, [search box]

class Filter extends Component {
  onRender(dom) {
    const header = new Header(); 
    dom.prepend(header.renderDOM());
    const filterArrays = [      
      naturalTherapies, conventionalTreatementTypes, sideEffects, yearPublished, studyDesigns, studyDesignFeatures, populationSizes, adverseEvents, tumorType, stage, outcomes, outcomeTypes, interactions, naturalTerapyTypes, conventionalTreatmentTypes       
    ];

    const selectedOptionsArray = []; 
    ////// send back as object with unique keys for each set of values. 
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
      
      await fetch('/api/v1/summaries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(searchObject)
        
      })
        .then(loading.update({ loading: false }));
      console.log('loader here and gone');
    });

    dom.appendChild(searchButton);

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
