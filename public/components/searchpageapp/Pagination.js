import Component from '..Component.js';

class Pagination extends Component {
  onRender(dom) {
    const prevButton = dom.querySelector('.prev-button');
    const nextButton = dom.querySelector('.next-button');

    if(!prevButton){
      return;
    }

    let page = 1;

    function updateControls() {
      const queryString = window.location.hash.slice(1);
      const searchParams = new URLSearchParams(queryString);
      const parsedPage = parseInt(searchParams.get('page'));
      if(isNaN(parsedPage)){
        page = 1;
      }
      else {
        page = parsedPage;
      }
    }

    updateControls();

    window.addEventListener('hashchange', () => {
      updateControls();
    });

    function updatePage(increment) {
      const queryString = window.location.hash.slice(1);
      const searchParams = new URLSearchParams(queryString);
      searchParams.set('page', page + increment);
      window.location.hash = searchParams.toString();
    }

    prevButton.addEventListener('click', () => {
      updatePage(-1);
    });

    nextButton.addEventListener('click', () => {
      updatePage(1);
    });
  }

  renderHTML() {
    const totalResults = this.props.totalResults;
    const queryString = window.location.hash.slice(1);
    const searchParams = new URLSearchParams(queryString);

    let page = 1;
    const parsedPage = parseInt(searchParams.get('page'));
    if(isNaN(parsedPage)){
      page = 1;
    }
    else {
      page = parsedPage;
    }

    if(!totalResults){
      return /*html*/ `
                <p class="no-results-notification">No results, please try another search</p>
            `;
    }

    const perPage = 25;
    const lastPage = Math.ceil(totalResults / perPage);
    const start = (page * perPage) - (perPage - 1);
    const end = Math.min(start + perPage - 1, totalResults);

    return /*html*/ `
        <section class="pagination">
            <p>Showing <span class="number-shown">${start} - ${end}</span> of <span class="number-total">${totalResults}</span></p>
            <div class="page-selector">
            <button class="prev-button" ${page === 1 ? 'disabled' : ''}>◀</button><p>Page <span class="page-shown">${page}</span> of <span class="page-total">${lastPage}</span></p><button class="next-button" ${page === lastPage ? 'disabled' : ''}>▶</button>
            </div>
        </section>
        `;
  }
}

export default Pagination;
