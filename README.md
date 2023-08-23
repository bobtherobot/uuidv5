# uuidv5

UUIDv5 Generator 
- zero dependancies, pure javascript

Pilfered from:
https://github.com/uuidjs/uuid
- tree-shaken to only include uuid "v5" implementation
- simplified interface

REF: RFC-4122 - A Universally Unique IDentifier (UUID) URN Namespace
https://datatracker.ietf.org/doc/html/rfc4122


# Usage:

    // uuidv5(value [, namespace])

    var uuid = uuidv5("something"); // uses "nil" by default

# Formatting

    var uuid = uuidv5("something", "url");
    var uuid = uuidv5("something", "DNS");
    var uuid = uuidv5("something", "oid");
    var uuid = uuidv5("something", "x500");
    var uuid = uuidv5("something", "NIL"); // default


# Using in Browser:

(see example "test-browser.html")

    <html>
        <head>
            <script src="uuidv5.min.js"></script>
        
            <script>
            var uuid = uuidv5("something", "url");
            console.log("uuid", uuid)
            </script>
        
        </head>
        <body>
            <h1> look in console - - > </h1>
        </body>
    <html>

# Using in NodeJS

(see example "test-node.js")

    var uuidv5 = require("./uuidv5.js");

    console.log( uuidv5("something", "url") );
    console.log( uuidv5("something", "dns") );
    console.log( uuidv5("something", "oid") );
    console.log( uuidv5("something", "x500") );
    console.log( uuidv5("something", "nil") );