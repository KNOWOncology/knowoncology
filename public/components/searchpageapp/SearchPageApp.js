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
            
            
            
    ];
    filterArrays.forEach(array => {
      const dropDown = new DropDown(array); 
      filterdiv.appendChild(dropDown.renderDOM());
    });
  }
    
    
    
  renderHTML(){
    console.log(naturalTherapies, conventionalTreatementTypes, sideEffects, yearPublished, studyDesigns, studyDesignFeatures, populationSizes, adverseEvents, tumorType, stage, outcomes, outcomeTypes, interactions, naturalTerapyTypes, conventionalTreatmentTypes);
    return /*html*/`
        <div> 
        <div id='filter'>
        
        </div>
        </div>
    `;
    
  }
  
}

export default Filter;
