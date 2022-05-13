import { IStringIdentifiable } from 'pip-services3-commons-nodex';
import { MultiString } from 'pip-services3-commons-nodex';
export declare class QuoteV1 implements IStringIdentifiable {
    constructor(text: any, author: any, status?: string, tags?: string[], allTags?: string[]);
    id: string;
    text: MultiString;
    author: MultiString;
    status: string;
    tags: string[];
    all_tags: string[];
}
