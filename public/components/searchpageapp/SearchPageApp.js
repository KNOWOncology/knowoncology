import Component from '../../components/Component';
import Header from '../header/Header';
import DropDown from './DropDown';



class Filter extends Component {
  onRender(dom) {
    const header = new Header(); 
    dom.prepend(header.renderDOM());
    const filterdiv = dom.querySelector('#filter');
    const filterArrays = [
      ['Year Published', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001', '2000', '1999', '1998', '1997', '1996', '1995', '1994', '1993', '1992', '1991', '1989', '1988', '1987', '1984', '1981', '1974', '1969']
    ];
    filterArrays.forEach(array => {
      const props = { array };
      const dropDown = new DropDown(props); 
      filterdiv.appendChild(dropDown.renderDOM());
    });

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
