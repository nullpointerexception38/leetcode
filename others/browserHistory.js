class BrowserHistory {
  constructor(homepage) {
    this.step = 0;
    this.urls = [homepage]
  }

  visit(url) {
    this.urls = [...this.urls.slice(0, this.step + 1), url];
    this.step += 1
  }

  back(steps) {
    if ((this.step - steps) < 0) {
      this.step = 0
    } else {
      this.step -= steps;
    }
    return this.urls[this.step]
  }

  forward(steps) {
    if (this.step + steps >= this.urls.length) {
      this.step = this.urls.length - 1
    } else {
      this.step += steps;
    }
    return this.urls[this.step]
  }
}

const b = new BrowserHistory('leetcode.com');

console.log(b)
console.log(b.visit('google.com'));
console.log(b.visit('facebook.com'));
console.log(b.visit('youtube.com'));
console.log(b.back(1));
console.log(b.back(1));
console.log(b.forward(1));
console.log(b.visit('linkedin.com'));
console.log(b.forward(2));
console.log(b.back(2));
console.log(b.back(7));
