import Component from '../Component.js';
import { dictionary } from './resultsSectionSetArray.js';
 
class DropDown extends Component {
  onRender(dom) {
    const { array, selectedOptionsArray } = this.props;
    
    let checkBoxCount = 0;
    const summary = array[0];
    const fieldsArray = array.slice(1);
    fieldsArray.forEach(field => {
      const checkBox = document.createElement('input');
      checkBox.type = 'checkbox';
      checkBox.name = summary + ': ' + field;
      checkBox.id = summary + ': ' + field;

      if(field.slice(0, 3) === 'All') {
        checkBox.checked = true;
      }

      const label = document.createElement('label');
      label.htmlFor = summary + ': ' + field; 
      label.textContent = field; 
      dom.appendChild(checkBox);
      dom.appendChild(label);
    
      checkBox.addEventListener('change', () => {
        if(!selectedOptionsArray.includes(`${dictionary[summary]}:${field}`)) {     
          selectedOptionsArray.push(`${dictionary[summary]}:${field}`);
          checkBoxCount++;
          checkBox.parentNode.childNodes[3].checked = false;
        }
        else {
          selectedOptionsArray.splice(selectedOptionsArray.indexOf(`${dictionary[summary]}:${field}`), 1);
          checkBoxCount--;
          if(checkBoxCount === 0) {checkBox.parentNode.childNodes[3].checked = true;
          }}}); 
          
          
    });
  }

  renderHTML() {
    const { array } = this.props;
    const summary = array[0];
    return /*html*/`
    <details>
        <summary class='filter-summary'>${summary}</summary>
    </details>
    `;        
  }
}

export default DropDown; 
