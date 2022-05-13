"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesClientFactory = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_components_nodex_1 = require("pip-services3-components-nodex");
const QuotesDirectClientV1_1 = require("../version1/QuotesDirectClientV1");
const QuotesHttpClientV1_1 = require("../version1/QuotesHttpClientV1");
const QuotesLambdaClientV1_1 = require("../version1/QuotesLambdaClientV1");
class QuotesClientFactory extends pip_services3_components_nodex_1.Factory {
    constructor() {
        super();
        this.registerAsType(QuotesClientFactory.DirectClientV1Descriptor, QuotesDirectClientV1_1.QuotesDirectClientV1);
        this.registerAsType(QuotesClientFactory.HttpClientV1Descriptor, QuotesHttpClientV1_1.QuotesHttpClientV1);
        this.registerAsType(QuotesClientFactory.LambdaClientV1Descriptor, QuotesLambdaClientV1_1.QuotesLambdaClientV1);
    }
}
exports.QuotesClientFactory = QuotesClientFactory;
QuotesClientFactory.Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-quotes', 'factory', 'default', 'default', '1.0');
QuotesClientFactory.DirectClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-quotes', 'client', 'direct', 'default', '1.0');
QuotesClientFactory.HttpClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-quotes', 'client', 'http', 'default', '1.0');
QuotesClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-quotes', 'client', 'lambda', 'default', '1.0');
//# sourceMappingURL=QuotesClientFactory.js.map