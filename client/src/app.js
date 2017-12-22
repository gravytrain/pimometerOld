export class App {
  configureRouter(config, router) {
    config.title = 'Pimometer';
    config.map([
      { route: ['', 'temperature'], name: 'temperature',      moduleId: './temperature',      nav: true, title: 'Temperature' },
      { route: 'settings',         name: 'settings',        moduleId: './settings',        nav: true, title: 'Settings' },
      { route: 'journal',  name: 'journal', moduleId: './journal', nav: true, title: 'Food Journal' }
    ]);

    this.router = router;
  }
}
