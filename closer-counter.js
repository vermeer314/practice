function createCounter() {
  let count = 0;

  return {
    increase() {
      count++;
      return count;
    },
    decrease() {
      if (count === 0) return 0;
      count--;
      return count;
    },
    reset() {
      count = 0;
      return count;
    },
    print() {
      console.log(count);
    },
    value() {
      return count;
    },
  };
}

const counter = createCounter();
const counter2 = createCounter();

counter.increase();
counter.increase();
counter.increase();
counter.print(); //3

counter2.increase();
counter2.increase();
counter2.print(); //2

counter.decrease();
counter.decrease();
counter.print(); //1

counter2.decrease();
counter2.print(); //1

counter.reset();
counter.print(); //0
counter2.print(); //1
