class Router {
  nowPage = '';

  constructor({ pages }) {
    this.app = document.getElementById('app');
    
    window.onhashchange = () => {
      this.pages = pages;
      this.nowPage = window.location.hash.replace('#', '');
      
      console.log(`> nowPage: ${this.nowPage}`);
      const page = this.pages.find((page) => page.path === this.nowPage);
      // console.log(`> page: ${page}`);
      const Page = page.page;
      const currentPage = new Page({ router: this });
      
      this.app.innerHTML = '';
      this.app.innerHTML += currentPage.render();
      currentPage.mount();
    };
  }

  push(pageName) {
    window.location.hash = pageName;
  }
}

module.exports = Router;