import Component from '../Component.js';
 
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
        if(!selectedOptionsArray.includes(checkBox.name)) {
          selectedOptionsArray.push(checkBox.name);
          checkBoxCount++;
          checkBox.parentNode.childNodes[3].checked = false;
        }
        else {
          selectedOptionsArray.splice(selectedOptionsArray.indexOf(checkBox.name), 1);
          checkBoxCount--;
          if(checkBoxCount === 0) {
            checkBox.parentNode.childNodes[3].checked = true;
          }


        }
        // if(checkBox !== checkBox.parentNode.childNodes[3]) {

        // }
        // console.log(checkBox.parentNode.childNodes[3].checked);
        console.log(selectedOptionsArray);
        
      }); 
    });
  }


  renderHTML() {
    const { array } = this.props;
    const summary = array[0];
    return /*html*/`


    <details>
        <summary>${summary}</summary>

    </details>


    `;        
  }
}

export default DropDown; 
