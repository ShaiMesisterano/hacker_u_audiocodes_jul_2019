const request = require('request');

class Gallery {
  constructor(endpoint, io, num, timer) {
    this.endpoint = endpoint;
    this.io = io;
    this.num = num;
    this.timer = timer;
    this.pictures = [];
    this.index = 0;
  }

  create() {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < this.num; i++) {
        request(this.endpoint, (err, response, body) => {
          if (err) reject(err);

          body = JSON.parse(body);
          this.pictures.push({
            url: body.message,
            counter: 0
          });
          if (this.pictures.length === this.num) {
            console.log("pictures", this.pictures);
            resolve(this.pictures);
          }
        });
      }
    });
  }

  async start() {
    const pictures = await this.create();
    console.log('emit file 1');
    this.io.emit("file", this.next());

    setInterval( () => {
      console.log('emit file next');
      this.io.emit('file', this.next())
    }, this.timer );
  }

  next() {
    //   this.index = this.index === this.num - 1 ? 0 : ++this.index;
    this.index = (this.index + 1) % this.num;
    this.emitCounter();
    return this.pictures[this.index];
  }

  emitCounter() {
    this.io.emit("counter", this.pictures[this.index].counter);
  }

  vote(msg) {
    let counter = this.pictures[this.index].counter;
    counter = msg.type === "adopt" ? ++counter : --counter;
    this.pictures[this.index].counter = counter;
    this.emitCounter();
  }
}
module.exports = Gallery;