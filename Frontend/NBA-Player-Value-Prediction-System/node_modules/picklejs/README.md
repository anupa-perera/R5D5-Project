Pickle.js
=========

JSON-based Javascript serializer.

## Install

    npm install picklejs

## Usage

    var pickle = require('picklejs')

    function User(name){
      this.name = name
    }

    var bob = new User('bob')

    var str = pickle.dump(bob) // => '{"type":"User","name":"bob"}'

    var bob = pickle.load('{"type":"User","name":"bob"}')
    console.log(bob instanceof User) // => true
    console.log(bob.name) // => 'bob'

## Notes

Pickle also automatically handles the serialization of Dates and RegExps. They get serialized as

    {"type":"Date","repr":"2013-08-23T02:02:54.868Z"}

and

    {"type":"RegExp","repr":"abc"}

Respectively.

