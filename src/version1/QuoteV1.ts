import { IdGenerator } from 'pip-services3-commons-nodex';
import { IStringIdentifiable } from 'pip-services3-commons-nodex';
import { MultiString } from 'pip-services3-commons-nodex';
import { QuoteStatusV1 } from './QuoteStatusV1';

export class QuoteV1 implements IStringIdentifiable {

    public constructor(text: any, author: any, 
        status?: string, tags?: string[], allTags?: string[]) {
        
        this.id = IdGenerator.nextLong();
        this.text = typeof text == 'string' ? { en: text } : text;
        this.author = typeof author == 'string' ? { en: author } : author;
        this.status = status || QuoteStatusV1.New;
        this.tags = tags || [];
        this.all_tags = allTags || [];
    }

    public id: string;
    public text: MultiString;
    public author: MultiString;
    public status: string;
    public tags: string[];
    public all_tags: string[];

}