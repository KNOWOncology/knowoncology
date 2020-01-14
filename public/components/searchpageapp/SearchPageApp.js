import Component from '../../components/Component';
import Header from '../header/Header';
import DropDown from './DropDown';



class Filter extends Component {
  onRender(dom) {
    const header = new Header(); 
    dom.prepend(header.renderDOM());
    const filterdiv = dom.querySelector('#filter');
    const filter = new Filter(); 
    filterdiv.appendChild(filter.renderDOM());
    const dropDown = new DropDown();
    
  }

  renderHTML(){
    return /*html*/`
     <div> 
        <div id='filter'>

        </div>
    </div>
    `;
      
  }

}

export default Filter;
