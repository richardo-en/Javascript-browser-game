class Observer {
  constructor() {
    this.observer = [];
  }

  subscribe(observer) {
    this.observer.push(observer);
  }

  unsubscribe(observer) {
    let index = this.observer.indexOf(observer)
    this.observer.splice(index, 1);
  }

  notify(argument) {
    for (var index in this.observer) {
      var node = this.observer[index]
      if(argument == "stop"){
        node.stop();
      }else if(argument == "continue"){
        node.start()
        node.animateFrame();
      }else if(argument == "powerup"){
        node.powerup();
      }
    }
  }
}