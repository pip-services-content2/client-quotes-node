# <img src="https://github.com/pip-services/pip-services/raw/master/design/Logo.png" alt="Pip.Services Logo" style="max-width:30%"> <br/> Quotes Microservice Client SDK for Node.js

This is a Node.js client SDK for [service-quotes](https://github.com/pip-services-content22/service-quotes-node) microservice.
It provides an easy to use abstraction over communication protocols:

* Direct client
* HTTP client
* AWS Lambda client (see https://aws.amazon.com/lambda)

<a name="links"></a> Quick Links:

* [Development Guide](doc/Development.md)
* [API Version 1](doc/NodeClientApiV1.md)

## Install

Add dependency to the client SDK into **package.json** file of your project
```javascript
{
    ...
    "dependencies": {
        ....
        "client-quotes-node": "^2.0.*",
        ...
    }
}
```

Then install the dependency using **npm** tool
```bash
# Install new dependencies
npm install

# Update already installed dependencies
npm update
```

## Use

Inside your code get the reference to the client SDK
```javascript
let sdk = new require('client-quotes-node');
```

Define client configuration parameters that match configuration of the microservice external API
```javascript
// Client configuration
let config = {
    connection: {
        protocol: 'http',
        host: 'localhost', 
        port: 8080
    }
};
```

Instantiate the client and open connection to the microservice
```javascript
// Create the client instance
let client = sdk.QuotesHttpClientV1(config);

// Connect to the microservice
try {
    await client.open(null);
    // Work with the microservice
    ...
} catch(err) {
    console.error('Connection to the microservice failed');
    console.error(err);
}
```

Now the client is ready to perform operations
```javascript
// Create a new quote
let quote = {
    text: { en: 'Get in hurry slowly' },
    author: { en: 'Russian proverb' },
    tags: ['time management'],
    status: 'completed'
};

let quote = await client.createQuote(
    null,
    quote
);
```

```javascript
// Get the list of quotes on 'time management' topic
let page = await client.getQuotes(
    null,
    {
        tags: 'time management',
        status: 'completed'
    },
    {
        total: true,
        skip: 0,
        take: 10
    }   
});
```    

## Acknowledgements

This client SDK was created and currently maintained by *Sergey Seroukhov*.

