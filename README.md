js-schema library packaged for Meteor
=================

Meteor package adding [js-schema](https://github.com/molnarg/js-schema)@0.7.0 library to `client` and `server`.

## Usage

### Simple validation

    var Duck = schema({              // A duck
      swim : Function,               //  - can swim
      quack : Function,              //  - can quack
      age : Number.min(0).max(5),    //  - is 0 to 5 years old
      color : ['yellow', 'brown']    //  - has either yellow or brown color
    });

    // Simple checks
    console.log( Duck(myDuck) ); // true
    console.log( Duck(myCat)  ); // false


### Validation with errors:

    Duck.errors({
      swim: function() {},
      quack: function() {},
      age: 6,
      color: 'green'
    });

    // output :
    // {
    //   age: 'number = 6 is bigger than required maximum = 5',
    //   color: 'string = green is not reference to string = yellow AND
    //           string = green is not reference to string = brown'
    // }