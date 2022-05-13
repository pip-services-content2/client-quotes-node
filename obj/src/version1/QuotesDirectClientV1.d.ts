import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { DirectClient } from 'pip-services3-rpc-nodex';
import { IQuotesClientV1 } from './IQuotesClientV1';
import { QuoteV1 } from './QuoteV1';
export declare class QuotesDirectClientV1 extends DirectClient<any> implements IQuotesClientV1 {
    constructor();
    getQuotes(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<QuoteV1>>;
    getRandomQuote(correlationId: string, filter: FilterParams): Promise<QuoteV1>;
    getQuoteById(correlationId: string, quoteId: string): Promise<QuoteV1>;
    createQuote(correlationId: string, quote: QuoteV1): Promise<QuoteV1>;
    updateQuote(correlationId: string, quote: QuoteV1): Promise<QuoteV1>;
    deleteQuoteById(correlationId: string, quoteId: string): Promise<QuoteV1>;
}
