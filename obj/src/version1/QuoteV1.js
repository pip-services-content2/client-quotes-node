"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const QuoteStatusV1_1 = require("./QuoteStatusV1");
class QuoteV1 {
    constructor(text, author, status, tags, allTags) {
        this.id = pip_services3_commons_nodex_1.IdGenerator.nextLong();
        this.text = typeof text == 'string' ? { en: text } : text;
        this.author = typeof author == 'string' ? { en: author } : author;
        this.status = status || QuoteStatusV1_1.QuoteStatusV1.New;
        this.tags = tags || [];
        this.all_tags = allTags || [];
    }
}
exports.QuoteV1 = QuoteV1;
//# sourceMappingURL=QuoteV1.js.map