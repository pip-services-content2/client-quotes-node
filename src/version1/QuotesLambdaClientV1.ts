import { ConfigParams } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { CommandableLambdaClient } from 'pip-services3-aws-nodex';

import { QuoteV1 } from './QuoteV1';
import { IQuotesClientV1 } from './IQuotesClientV1';

export class QuotesLambdaClientV1 extends CommandableLambdaClient implements IQuotesClientV1 {       

    constructor(config?: any) {
        super('quotes');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
                
    public async getQuotes(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<QuoteV1>> {
        let timing = this.instrument(correlationId, 'quotes.get_quotes');

        try {
            return await this.callCommand(
                'get_quotes',
                correlationId,
                {
                    filter: filter,
                    paging: paging
                }
            );
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
            return await this.callCommand(
                'get_random_quote',
                correlationId,
                {
                    fitler: filter
                }
            );    
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
            return await this.callCommand(
                'get_quote_by_id',
                correlationId,
                {
                    quote_id: quoteId
                }
            );
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
            return await this.callCommand(
                'create_quote',
                correlationId,
                {
                    quote: quote
                }
            );
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
            return await this.callCommand(
                'update_quote',
                correlationId,
                {
                    quote: quote
                }
            );
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
            return await this.callCommand(
                'delete_quote_by_id',
                correlationId,
                {
                    quote_id: quoteId
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }
    
}
