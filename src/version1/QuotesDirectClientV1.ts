import { Descriptor } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams} from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { DirectClient } from 'pip-services3-rpc-nodex';

import { IQuotesClientV1 } from './IQuotesClientV1';
//import { IQuotesController } from 'service-quotes-nodex';
import { QuoteV1 } from './QuoteV1';

export class QuotesDirectClientV1 extends DirectClient<any> implements IQuotesClientV1 {
            
    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor("service-quotes", "controller", "*", "*", "*"))
    }

    public async getQuotes(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<QuoteV1>> {
        let timing = this.instrument(correlationId, 'quotes.get_quotes');
        
        try {
            return await this._controller.getQuotes(correlationId, filter, paging);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async getRandomQuote(correlationId: string, filter: FilterParams): Promise<QuoteV1> {
        let timing = this.instrument(correlationId, 'quotes.get_random_quote');
        
        try {
            return await this._controller.getRandomQuote(correlationId, filter);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async getQuoteById(correlationId: string, quoteId: string): Promise<QuoteV1> {
        let timing = this.instrument(correlationId, 'quotes.get_quote_by_id');
        
        try {
            return await this._controller.getQuoteById(correlationId, quoteId);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async createQuote(correlationId: string, quote: QuoteV1): Promise<QuoteV1> {
        let timing = this.instrument(correlationId, 'quotes.create_quote');
        
        try {
            return await this._controller.createQuote(correlationId, quote);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async updateQuote(correlationId: string, quote: QuoteV1): Promise<QuoteV1> {
        let timing = this.instrument(correlationId, 'quotes.update_quote');
        
        try {
            return await this._controller.updateQuote(correlationId, quote);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async deleteQuoteById(correlationId: string, quoteId: string): Promise<QuoteV1> {
        let timing = this.instrument(correlationId, 'quotes.delete_quote_by_id');
        
        try {
            return await this._controller.deleteQuoteById(correlationId, quoteId);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }
}