"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesHttpClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
class QuotesHttpClientV1 extends pip_services3_rpc_nodex_1.CommandableHttpClient {
    constructor(config) {
        super('v1/quotes');
        if (config != null)
            this.configure(pip_services3_commons_nodex_1.ConfigParams.fromValue(config));
    }
    getQuotes(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'quotes.get_quotes');
            try {
                return yield this.callCommand('get_quotes', correlationId, {
                    filter: filter,
                    paging: paging
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    getRandomQuote(correlationId, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'quotes.get_random_quote');
            try {
                return yield this.callCommand('get_random_quote', correlationId, {
                    fitler: filter
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    getQuoteById(correlationId, quoteId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'quotes.get_quote_by_id');
            try {
                return yield this.callCommand('get_quote_by_id', correlationId, {
                    quote_id: quoteId
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    createQuote(correlationId, quote) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'quotes.create_quote');
            try {
                return yield this.callCommand('create_quote', correlationId, {
                    quote: quote
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    updateQuote(correlationId, quote) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'quotes.update_quote');
            try {
                return yield this.callCommand('update_quote', correlationId, {
                    quote: quote
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    deleteQuoteById(correlationId, quoteId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'quotes.delete_quote_by_id');
            try {
                return yield this.callCommand('delete_quote_by_id', correlationId, {
                    quote_id: quoteId
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
}
exports.QuotesHttpClientV1 = QuotesHttpClientV1;
//# sourceMappingURL=QuotesHttpClientV1.js.map