import Component from '../Component.js';
import Header from '../header/Header.js';

class App extends Component {
  onRender(dom){
    const header = new Header();
    dom.prepend(header.renderDOM());
  }

  renderHTML(){
    return /*html*/`
    <div>
        <main>
         <h1>Welcome to KNOW</h1>
         <h2>The Knowledge in Naturopathic Oncology Website</h2>
         <p id="greeting"><strong>KNOW</strong> is a dynamic clinical and educational tool that combines detailed summaries of up-to-date- research in integrative oncology with current best practices from experienced naturopathic physicians.</p>
         <p><strong>KNOW</strong> is designed to help you quickly access pertinent information to make evidence-informed decisions.</p>
        </main>
    </div>
`;
  }
}

export default App;
