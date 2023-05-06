class Observer {
    constructor() {
      this.observers = [];
    }
  
    subscribe(observer) {
        this.observers.push(observer);
      }
    
      unsubscribe(observer) {
        const index = this.observers.indexOf(observer);
        this.observers.splice(index, 1);
      }
    
      notify(message) {
        this.observers.forEach((observer) => {
          observer.update(message);
        });
      }
  }