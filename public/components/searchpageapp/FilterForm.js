import Component from '../Component.js';

class FilterForm extends Component {
  onRender(dom){

    const form = dom.querySelector('#cool');
    const { array, selectedOptionsArray } = this.props;

    const summary = array[0];
    const fieldsArray = array.slice(1);
    fieldsArray.forEach(field => {
      const checkBox = document.createElement('input');
      checkBox.type = 'checkbox';
      checkBox.name = summary + ': ' + field;
      checkBox.id = summary + ': ' + field;

      const label = document.createElement('label');
      label.htmlFor = summary + ': ' + field; 
      label.textContent = field; 
      form.appendChild(checkBox);
      form.appendChild(label);

      
      checkBox.addEventListener('change', () => {
        if(!selectedOptionsArray.includes(checkBox.name)) {
          selectedOptionsArray.push(checkBox.name);
        }
        else {
          selectedOptionsArray.splice(selectedOptionsArray.indexOf(checkBox.name), 1);
        }
        console.log('selectedOPTIONS!!!!', selectedOptionsArray);
        
      }); 

    });



  }

  renderHTML(){
    return /*html*/ `
    <span> 
        <div id='cool'>
        </div>
    </span>   
        `;
  }
}

export default FilterForm;


