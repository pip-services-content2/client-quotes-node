import { DataPage } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { QuoteV1 } from './QuoteV1';
export interface IQuotesClientV1 {
    getQuotes(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<QuoteV1>>;
    getRandomQuote(correlationId: string, filter: FilterParams): Promise<QuoteV1>;
    getQuoteById(correlationId: string, quote_id: string): Promise<QuoteV1>;
    createQuote(correlationId: string, quote: QuoteV1): Promise<QuoteV1>;
    updateQuote(correlationId: string, quote: QuoteV1): Promise<QuoteV1>;
    deleteQuoteById(correlationId: string, quote_id: string): Promise<QuoteV1>;
}
