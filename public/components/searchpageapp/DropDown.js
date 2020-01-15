import Component from '../Component.js';
import FilterForm from './FilterForm.js';

 
class DropDown extends Component {
  onRender(dom) {
    const details = dom.querySelector('details');
    const { array, selectedOptionsArray } = this.props;
     
    const filterForm = new FilterForm({ selectedOptionsArray, array }); 
    details.appendChild(filterForm.renderDOM());

  }

  renderHTML() {
    const { array } = this.props;
    const summary = array[0];
    return /*html*/`
<div>
    <details>
        <summary>${summary}</summary>
    
    </details>
</div>

    `;        
  }
}

export default DropDown; 
