class Counter{
  static  counter:number=0;
    // constructor(counter:number){
    //     this.counter=counter
    // }
  static  increment():number{
       Counter.counter= Counter.counter+1
       return Counter.counter
    }
  static  decrement():number{
      return   Counter.counter= Counter.counter-1

    }
}


// const instance1=new Counter()
// const instance2=new Counter()
console.log(Counter.increment());
console.log(Counter.increment());
// console.log(instance1.increment());
// console.log(instance2.increment());