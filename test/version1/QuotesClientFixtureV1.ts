const assert = require('chai').assert;

import { PagingParams, MultiString } from 'pip-services3-commons-nodex';

import { QuoteV1 } from '../../src/version1/QuoteV1';
import { QuoteStatusV1 } from '../../src/version1/QuoteStatusV1';
import { IQuotesClientV1 } from '../../src/version1/IQuotesClientV1';

let QUOTE1: QuoteV1 = {
    id: '1',
    text: new MultiString({ en: 'Text 1' }),
    author: new MultiString({ en: 'Author 1' }),
    status: QuoteStatusV1.Completed,
    tags: [],
    all_tags: []
};
let QUOTE2: QuoteV1 = {
    id: '2',
    text: new MultiString({ en: 'Text 2' }),
    author: new MultiString({ en: 'Author 2' }),
    status: QuoteStatusV1.Completed,
    tags: ['TAG 1'],
    all_tags: ['tag1']
};

export class QuotesClientFixtureV1 {
    private _client: IQuotesClientV1;
    
    constructor(client: IQuotesClientV1) {
        this._client = client;
    }
        
    public async testCrudOperations() {
        let quote1, quote2;

        // Create one quote
        let quote = await this._client.createQuote(null, QUOTE1);

        assert.isObject(quote);
        assert.equal(quote.id, QUOTE1.id);
        // assert.equal(quote.text.get('en'), QUOTE1.text.get('en'));
        // assert.equal(quote.author.get('en'), QUOTE1.author.get('en'));

        quote1 = quote;

        // Create another quote
        quote = await this._client.createQuote(null, QUOTE2);

        assert.isObject(quote);
        assert.equal(quote.id, QUOTE2.id);
        // assert.equal(quote.text.get('en'), QUOTE1.text.get('en'));
        // assert.equal(quote.author.get('en'), QUOTE1.author.get('en'));

        quote2 = quote;

        // Get all quotes
        let quotes = await this._client.getQuotes(
            null,
            null,
            new PagingParams(0, 5, false)
        );

        assert.isObject(quotes);
        assert.isTrue(quotes.data.length >= 2);

        // Get random quote
        quote = await this._client.getRandomQuote(null, null);

        assert.isObject(quote);

        // Update the quote
        quote1.text.en = 'Updated Content 1';

        quote = await this._client.updateQuote(null, quote1);

        assert.isObject(quote);
        assert.equal(quote.id, quote1.id);
        // assert.equal(quote.text.get('en'), 'Updated Content 1');
        // assert.equal(quote.author.get('en'), QUOTE1.author.get('en'));

        // Delete quote
        await this._client.deleteQuoteById(null, quote1.id);

        // Try to get delete quote
        quote = await this._client.getQuoteById(null, quote1.id);
        
        assert.isNull(quote || null);
    }
}
