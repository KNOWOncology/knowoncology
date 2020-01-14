import Component from '../Component.js';

class FilterForm extends Component {
  onRender(dom){

    const form = dom.querySelector('#cool');
    const array = this.props;    
    const summary = array[0];
    const fieldsArray = array.slice(1);
    fieldsArray.forEach(field => {
      const checkBox = document.createElement('input');
      checkBox.type = 'checkbox';
      checkBox.name = field;
      checkBox.id = field;

      const label = document.createElement('label');
      label.htmlFor = field; 
      label.textContent = field; 
      form.appendChild(checkBox);
      form.appendChild(label);

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


