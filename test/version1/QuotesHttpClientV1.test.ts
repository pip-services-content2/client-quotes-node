import { Descriptor } from 'pip-services3-commons-nodex';
import { ConfigParams } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { QuotesMemoryPersistence } from 'service-quotes-node';
import { QuotesController } from 'service-quotes-node';
import { QuotesHttpServiceV1 } from 'service-quotes-node';
import { QuotesHttpClientV1 } from '../../src/version1/QuotesHttpClientV1';
import { QuotesClientFixtureV1 } from './QuotesClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('QuotesRestClientV1', ()=> {
    let service: QuotesHttpServiceV1;
    let client: QuotesHttpClientV1;
    let fixture: QuotesClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let persistence = new QuotesMemoryPersistence();
        let controller = new QuotesController();

        service = new QuotesHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-quotes', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-quotes', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('service-quotes', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new QuotesHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new QuotesClientFixtureV1(client);

        await service.open(null);
        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
        await service.close(null);
    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});
