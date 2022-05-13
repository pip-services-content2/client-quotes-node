# Client API (version 1) <br/> Quotes Microservices Client SDK for Node.js

Node.js client API for Quotes microservice is a thin layer on the top of
communication protocols. It hides details related to specific protocol implementation
and provides high-level API to access the microservice for simple and productive development.

* [Installation](#install)
* [Getting started](#get_started)
* [QuoteV1 class](#class1)
* [IQuoteClientV1 interface](#interface)
    - [getQuotes()](#operation1)
    - [getRandomQuote()](#operation2)
    - [getQuoteById()](#operation3)
    - [createQuote()](#operation4)
    - [updateQuote()](#operation5)
    - [deleteQuoteById()](#operation6)
* [QuotesDirectClientV1 class](#client_direct)
* [QuotesHttpClientV1 class](#client_http)
* [QuotesLambdaClientV1 class](#client_lambda)

## <a name="install"></a> Installation

To work with the client SDK add dependency into package.json file:

```javascript
{
    ...
    "dependencies": {
        ....
        "client-quotes-node": "^1.1.0",
        ...
    }
}
```

Then download the dependency using **npm**:

```javascript
# Installing dependencies
npm install

# Updating dependencies
npm update
```

## <a name="get_started"></a> Getting started

This is a simple example on how to work with the microservice using REST client:

```javascript
// Get Client SDK for Version 1 
let sdk = new require('client-quotes-node');

// Client configuration
let config = {
    connection: {
        protocol: 'http',
        host: 'localhost', 
        port: 8080
    }
};

// Create the client instance
let client = sdk.QuotesHttpClientV1(config);

// Open client connection to the microservice
await client.open(null);

console.log('Opened connection');
    
// Create a new quote
let quote = {
    text: { en: 'Get in hurry slowly' },
    author: { en: 'Russian proverb' },
    tags: ['time management'],
    status: 'completed'
};

let quote = await client.createQuote(null, quote);
            
console.log('Create quote is');
console.log(quote);
            
// Get the list of quotes on 'time management' topic
let page = await client.getQuotes(
    {
        tags: 'time management',
        status: 'completed'
    },
    {
        paging: true,
        skip: 0,
        take: 10
    }
);
console.log('Quotes on time management are');
console.log(page.data);
                    
// Close connection
await client.close(correlationId, ); 
```

### <a name="class1"></a> QuoteV1 class

Represents an inspirational quote

**Properties:**
- id: string - unique quote id
- text: MultiString - quote text in different languages
- author: MultiString - name of the quote author in different languages
- status: string - editing status of the quote: 'new', 'writing', 'translating', 'completed' (default: 'new')
- tags: string[] - (optional) search tags that represent topics associated with the quote
- all_tags: string[] - (read only) explicit and hash tags in normalized format for searching  

## <a name="interface"></a> IQuotesClientV1 interface

If you are using Typescript, you can use IQuotesClient as a common interface across all client implementations. 
If you are using plain Javascript, you shall not worry about IQuotesClient interface. You can just expect that
all methods defined in this interface are implemented by all client classes.

```javascript
interface IQuotesClientV1 {
    getQuotes(correlationId, filter, paging);
    getRandomQuote(correlationId, filter);
    getQuoteById(correlationId, quoteId);
    createQuote(correlationId, quote);
    updateQuote(correlationId, quote);
    deleteQuoteById(correlationId, quoteId);
}
```

### <a name="operation1"></a> getQuotes(correlationId, filter, paging)

Retrieves a collection of quotes according to specified criteria

**Arguments:** 
- correlationId: string - (optional) unique id that identifies distributed transaction
- filter: any - filter parameters
  - tags: string[] - (optional) list tags with topic names
  - status: string - (optional) quote editing status
  - author: string - (optional) author name in any language 
  - except_ids: string[] - (optional) quote ids to exclude 
- paging: any - paging parameters
  - skip: int - (optional) start of page (default: 0). Operation returns paged result
  - take: int - (optional) page length (max: 100). Operation returns paged result
  - paging: bool - (optional) true to enable paging and return total count
- returns: DataPage<QuoteV1> - retrieved quotes in page format

### <a name="operation2"></a> getRandomQuote(correlationId, filter)

Retrieves a random quote from filtered resultset

**Arguments:** 
- correlationId: string - (optional) unique id that identifies distributed transaction
- filter: any - filter parameters
  - tags: string[] - (optional) list tags with topic names
  - status: string - (optional) quote editing status
  - author: string - (optional) author name in any language
  - except_ids: string[] - (optional) quote ids to exclude 
- returns: QuoteV1 - random quote, null if object wasn't found 

### <a name="operation3"></a> getQuoteById(correlationId, quoteId)

Retrieves a single quote specified by its unique id

**Arguments:** 
- correlationId: string - (optional) unique id that identifies distributed transaction
- quoteId: string - unique Quote id
- returns: QuoteV1 - retrieved quote, null if object wasn't found 

### <a name="operation4"></a> createQuote(correlationId, quote)

Creates a new quote

**Arguments:** 
- correlationId: string - (optional) unique id that identifies distributed transaction
- quote: QuoteV1 - Quote object to be created. If object id is not defined it is assigned automatically.
- returns: QuoteV1 - created quote object

### <a name="operation5"></a> updateQuote(correlationId, quote)

Updates quote specified by its unique id

**Arguments:** 
- correlationId: string - (optional) unique id that identifies distributed transaction
- quote: QuoteV1 - quote object with new values. Partial updates are supported
- callback: (err, quoteV1) => void - callback function
  - err: Error - occured error or null for success
  - quote: Quote - updated quote object 

### <a name="operation6"></a> deleteQuoteById(correlationId, quoteId)

Deletes quote specified by its unique id

**Arguments:** 
- correlationId: string - (optional) unique id that identifies distributed transaction
- quoteId: string - unique quote id
 
## <a name="client_direct"></a> QuotesDirectClientV1 class

QuotesDirectClientV1 is a direct client to call controller inside microservice container

```javascript
class QuotesDirectClientV1 extends DirectClient implements IQuotesClientV1 {
    constructor(config: any = null);
    configure(config);
    setReferences(references);
    open(correlationId);
    close(correlationId);
    getQuotes(correlationId, filter, paging);
    getRandomQuote(correlationId, filter);
    getQuoteById(correlationId, quoteId);
    createQuote(correlationId, quote);
    updateQuote(correlationId, quoteId, quote);
    deleteQuoteById(correlationId, quoteId);
}
```

**Constructor config properties:** 
- ...

## <a name="client_http"></a> QuotesHttpClientV1 class

QuotesHttpClientV1 is a client that implements HTTP protocol

```javascript
class QuotesHttpClientV1 extends CommandableHttpClient implements IQuotesClientV1 {
    constructor(config: any = null);
    configure(config);
    setReferences(references);
    open(correlationId);
    close(correlationId);
    getQuotes(correlationId, filter, paging);
    getRandomQuote(correlationId, filter);
    getQuoteById(correlationId, quoteId);
    createQuote(correlationId, quote);
    updateQuote(correlationId, quote);
    deleteQuoteById(correlationId, quoteId,);
}
```

**Constructor config properties:** 
- connection: object - HTTP transport configuration options
  - type: string - HTTP protocol - 'http' or 'https' (default is 'http')
  - host: string - IP address/hostname binding (default is '0.0.0.0')
  - port: number - HTTP port number

## <a name="client_lambda"></a> QuotesLambdaClientV1 class

QuotesLambdaClientV1 is a client that calls AWS Lamba functions

```javascript
class QuotesLambdaClientV1 extends LambdaClient implements IQuotesClientV1 {
    constructor(config: any = null);        
    configure(config);
    setReferences(references);
    open(correlationId);
    close(correlationId);
    getQuotes(correlationId, filter, paging);
    getRandomQuote(correlationId, filter);
    getQuoteById(correlationId, quoteId);
    createQuote(correlationId, quote);
    updateQuote(correlationId, quote);
    deleteQuoteById(correlationId, quoteId);
}
```

**Constructor config properties:** 
- connection: object - AWS Lambda connection properties
  - protocol: "aws"
  - region: string - AWS availability region like "us-east-1"
  - function: string - unique function name or arn like "arn:aws:lambda:us-east-1:268549927901:function:pip-services-template-node"
- credential: object - AWS Lambda access keys and additional parameters
  - access\_key\_id: string - AWS access key id
  - secret\_access\_key: string - AWS secret access key
- options: object
  - timeout: number - communication timeout in milliseconds (default: 30,000)
  