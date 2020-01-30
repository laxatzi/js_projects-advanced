// The Challenge

/*
   Write a class "eventEmitter" that has three methods: "on", "emit", and "removeListener".

      - "on('eventName', callbackFn)" - a function that takes an 'eventName' and a "callbackFn", should save the callbackFn to be called when the event with 'eventName' is emitted.

      - "emit('eventName', date)" - a function that takes an 'eventName' and 'data' object, should call the 'callbackFn' s associated with the event and pass them the 'data' object.

      - "removeListener('eventName', callbackFn)" - a function that takes 'eventName' and 'callbackFn',  should remove the 'callbackFn' from the event.

      For example we should be able to do as follows:
*/

let superBowl = new eventEmmiter();
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

//Great opportunity to use ES6 classes. 


