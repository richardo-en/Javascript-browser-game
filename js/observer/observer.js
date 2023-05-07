class Observer {
    constructor(player) {
      this.observer = player;
    }
  
    subscribe(observer) {
        this.observer.push(observer);
      }
    
      unsubscribe(observer) {
        this.observer = null;
      }
    
      notify(message) {
        this.observer.update(message);
      }
  }