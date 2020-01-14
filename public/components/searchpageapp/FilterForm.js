import Component from '../Component.js';

class FilterForm extends Component {
  onRender(dom){

    const form = dom.querySelector('form');
    const { array } = this.props;
    const summary = array[0];
    const fieldsArray = array.slice(1);
    fieldsArray.forEach(field => {
      const checkBox = document.createElement('input');
      checkBox.type = 'checkbox';
      checkBox.name = summary;
      checkBox.textContent = field;
      /// will this work?
      checkBox.value = field;
      form.appendChild(checkBox);

    });
  }

  renderHTML(){
    return /*html*/ `
        <form>

        </form>
        `;
  }
}

export default FilterForm;


