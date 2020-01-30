//* Project introduced by coderbyte's newsletter , Developer: elisabeth gross

// The Challenge

/*
   Write a class "eventEmitter" that has three methods: "on", "emit", and "removeListener".

      - "on('eventName', callbackFn)" - a function that takes an 'eventName' and a "callbackFn", should save the callbackFn to be called when the event with 'eventName' is emitted.

      - "emit('eventName', date)" - a function that takes an 'eventName' and 'data' object, should call the 'callbackFn' s associated with the event and pass them the 'data' object.

      - "removeListener('eventName', callbackFn)" - a function that takes 'eventName' and 'callbackFn',  should remove the 'callbackFn' from the event.

      For example we should be able to do as follows:
*/

let superBowl = new EventEmmiter();
const cheer = function(eventData){
   console.lot('Raaaahhhh!!!! Go' + eventData.scoringTeam);
}
const jeer = function(eventData){
   console.log('BOOO' + eventData.scoringTeam);
}

superBowl.on('touchdown', cheer);
superBowl.on('touchdown', jeer);
superBowl.emit('touchdown', { scoringTeam: 'Patriots'}); // Both 'cheer' and 'jeer' should have been called with data
superBowl.removeListener('touchdown', jeer);
superBowl.emit('touchdown', { scoringTeam: 'Seahawks'});

// Solution

//Great opportunity to use ES6 classes. We start with a basic structure for the class 'eventEmitter' and initialize it with an obj 'event' that we will use to track our events.

class EventEmitter {
   constructor () {
      this.events = {};
   }
}

// ON
// start working on our methods. 'on' is the first
on (eventName, callbackFn) {
   if (!this.events[eventName])  {
     this.events[eventName] = []
   }
   this.events[eventName].push(callbackFn)
 }
//because functions are 'first class objects' in javascript, which basically means they can be stored in a variable, or an array, we can just push the callback function to an array stored at the key 'eventName' in our events object.

//EMIT
//This solution takes advantage of what is called 'closure' in javascript. A closure is essentially when a function has references to its surrounding state or its lexical environment. You can also think of this as a closure allowing you access to an outer function's scope from inside an inner function. Using global vars is a great example of closure.

emit (eventName, eventData){
    if(!this.events[eventName])return;
    this.events[eventName].forEach(fn=> fn(eventData));
}

//Here's another example of using closure to track how many times a function was called

function tracker(fn){
   let numTimesCalled = 0;
   return function(){
      numTimesCalled++;
      console.log('I was called', numTimesCalled);
      return fn();
   }
}

function hello(){
   console.log('Hello');
}

const trackedHello = tracker(hello);
//The inner function returned in 'tracker' close over the variable 'numTimesCalled' and maintains a reference to it for the life of the 'trackedHello' function. 

//REMOVELISTENER 
// The 'removeListener' method is the easiest of the three
removeListener(eventName, callbackFn){
   const index = this.events[eventName].indexOf(callbackFn);
   if(index === -1)return
   this.event[eventName].splice(index, 1);
}
