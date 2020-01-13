import Component from '../Component.js';
import Header from '../header/Header.js';

class App extends Component {
  onRender(dom){
    const header = new Header();
    dom.prepend(header.renderDOM());
  }

  renderHTML(){
    const name = this.props;

    return /*html*/`
    <div>
        <main>
         <h1>Welcome to KNOW</h1>
         <h2>The Knowledge in Naturopathic Oncology Website</h2>
         <p id="greeting"><strong>KNOW</strong> is a dynamic clinical and educational tool that combines detailed summaries of up-to-date- research in integrative oncology with current best practices from experienced naturopathic physicians.</p>
         <p><strong>KNOW</strong> is designed to help you quickly access pertinent information to make evidence-informed decisions.</p>
        </main>
        <video src="https://www.youtube.com/watch?v=xbnRwQgSSM0&feature=emb_title"></video>
    </div>
`;
  }
}

export default App;
