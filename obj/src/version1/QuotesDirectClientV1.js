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
exports.QuotesDirectClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
class QuotesDirectClientV1 extends pip_services3_rpc_nodex_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_nodex_1.Descriptor("service-quotes", "controller", "*", "*", "*"));
    }
    getQuotes(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'quotes.get_quotes');
            try {
                return yield this._controller.getQuotes(correlationId, filter, paging);
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
                return yield this._controller.getRandomQuote(correlationId, filter);
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
                return yield this._controller.getQuoteById(correlationId, quoteId);
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
                return yield this._controller.createQuote(correlationId, quote);
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
                return yield this._controller.updateQuote(correlationId, quote);
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
                return yield this._controller.deleteQuoteById(correlationId, quoteId);
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
exports.QuotesDirectClientV1 = QuotesDirectClientV1;
//# sourceMappingURL=QuotesDirectClientV1.js.map