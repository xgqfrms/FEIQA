# PubSub

> publish/subscribe (PubSub) pattern

http://bdadam.com/blog/a-simple-pubsub-module-in-javascript.html

https://github.com/bdadam/PubSub

```js

// PubSub is the global mediator object

PubSub.subscribe('anEvent', function(eventName, eventData) {
    console.log(eventName); // "anEvent"
    console.log(eventData.something); // 1
    console.log(eventData.someOtherThing); // 2
});

PubSub.publish('anEvent', {
    something: 1,
    someOtherThing: 2
});

```

```js

// What the button does
$("#addProductButton").click(function() {
    PubSub.publish("productAdded", {
        product: {
            id: 1234,
            name: 'A Super Product',
            price: 9900 // in cents
        },
        user: {
            country: "DE",
            loggedIn: true,
            membershipStatus: "premium"
        }
    });
});

// Total price module increases the displayed total price when a product is added
PubSub.subscribe('productAdded', function(eventData) {
    increaseTotalPrice(eventData.product.price);
});

// Play the sound when Mario collects a coin
PubSub.subscribe('productAdded', function() {
    playSound('mario-coin');
});

// Tracking module
PubSub.subscribe('productAdded', function(eventData) {
    _gaq.push([
        '_trackEvent',
        'Products',
        'Buy',
        eventData.product.name,
        eventData.product.price
    ]);
});

```


```js

require(['pubsub'], function(PubSub) {
    console.log(typeof PubSub.publish); // "function"
    console.log(typeof PubSub.subscribe); // "function"
    console.log(typeof PubSub.unsubscribe); // "function"

    /*
        Please note: when using require js,
        the PubSub module doesn't register itself as a global object
    */
    console.log(typeof window.PubSub);
    // "undefined"
});

```

