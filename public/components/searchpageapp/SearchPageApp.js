import Component from '../Component.js';
import Header from '../header/Header.js';
import DropDown from './DropDown.js';
import  { naturalTherapies, conventionalTreatementTypes, sideEffects, yearPublished, studyDesigns, studyDesignFeatures, populationSizes, adverseEvents, tumorType, stage, outcomes, outcomeTypes, interactions, naturalTerapyTypes, conventionalTreatmentTypes } from './dropDownSeedData.js';


///// submit button, clear all, [search box]

class Filter extends Component {
  onRender(dom) {
    const header = new Header(); 
    dom.prepend(header.renderDOM());
    const filterdiv = dom.querySelector('#filter');
    const filterArrays = [      
      naturalTherapies, conventionalTreatementTypes, sideEffects, yearPublished, studyDesigns, studyDesignFeatures, populationSizes, adverseEvents, tumorType, stage, outcomes, outcomeTypes, interactions, naturalTerapyTypes, conventionalTreatmentTypes       
    ];

    const selectedOptionsArray = []; 

    filterArrays.forEach(array => {
      const dropDown = new DropDown({ array, selectedOptionsArray }); 
      filterdiv.appendChild(dropDown.renderDOM());
    });

    const searchButton = dom.querySelector('#search');
    searchButton.addEventListener('click', () => {
      const checkboxes = dom.querySelectorAll('input[checked=true]');
      console.log(checkboxes);
    });

    console.log('done');
  }
    
    
    
  renderHTML(){
    
    return /*html*/`
        <div> 
        <div id='filter'>
        </div>
        <button id='search'>SEARCH</button>
        </div>
    `;
    
  }
  
}

export default Filter;
