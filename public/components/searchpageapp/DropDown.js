import Component from '../Component.js';
import FilterForm from './FilterForm.js';

 
class DropDown extends Component {
  onRender(dom) {
    const summary = dom.querySelector('summary');
    const props = this.props;
    console.log(props);
    
  
    const filterForm = new FilterForm(props); 
    summary.appendChild(filterForm.renderDOM());
  }

  renderHTML() {
    const array = this.props;
    const summary = array[0];
    return /*html*/`
<details>
    <summary>${summary}</summary>
    
</details>

    `;        
  }
}

export default DropDown; 
