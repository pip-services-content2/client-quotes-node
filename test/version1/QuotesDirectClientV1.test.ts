import { Descriptor } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { QuotesMemoryPersistence } from 'service-quotes-node';
import { QuotesController } from 'service-quotes-node';
import { QuotesDirectClientV1 } from '../../src/version1/QuotesDirectClientV1';
import { QuotesClientFixtureV1 } from './QuotesClientFixtureV1';

suite('QuotesDirectClientV1', ()=> {
    let client: QuotesDirectClientV1;
    let fixture: QuotesClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let persistence = new QuotesMemoryPersistence();
        let controller = new QuotesController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-quotes', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-quotes', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new QuotesDirectClientV1();
        client.setReferences(references);

        fixture = new QuotesClientFixtureV1(client);

        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});
