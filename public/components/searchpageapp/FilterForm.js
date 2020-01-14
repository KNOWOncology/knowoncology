import Component from '../Component.js';

class FilterForm extends Component {
  onRender(dom){

    const form = dom.querySelector('form');
    const array = this.props;    
    const summary = array[0];
    const fieldsArray = array.slice(1);
    fieldsArray.forEach(field => {
      const checkBox = document.createElement('input');
      checkBox.type = 'checkbox';
      checkBox.name = summary;
      checkBox.id = field;
      const label = document.createElement('label');
      label.for = field; 
      label.textContent = field; 
      form.appendChild(checkBox);
      form.appendChild(label);

    });
  }

  renderHTML(){
    return /*html*/ `
    <div>   
        <form>
        </form>
    </div>    
        `;
  }
}

export default FilterForm;


