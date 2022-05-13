import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { CommandableHttpClient } from 'pip-services3-rpc-nodex';
import { QuoteV1 } from './QuoteV1';
import { IQuotesClientV1 } from './IQuotesClientV1';
export declare class QuotesHttpClientV1 extends CommandableHttpClient implements IQuotesClientV1 {
    constructor(config?: any);
    getQuotes(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<QuoteV1>>;
    getRandomQuote(correlationId: string, filter: FilterParams): Promise<QuoteV1>;
    getQuoteById(correlationId: string, quoteId: string): Promise<QuoteV1>;
    createQuote(correlationId: string, quote: QuoteV1): Promise<QuoteV1>;
    updateQuote(correlationId: string, quote: QuoteV1): Promise<QuoteV1>;
    deleteQuoteById(correlationId: string, quoteId: string): Promise<QuoteV1>;
}
