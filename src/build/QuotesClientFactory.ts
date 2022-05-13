import { Descriptor } from 'pip-services3-commons-nodex';
import { Factory } from 'pip-services3-components-nodex';

import { QuotesDirectClientV1 } from '../version1/QuotesDirectClientV1';
import { QuotesHttpClientV1 } from '../version1/QuotesHttpClientV1';
import { QuotesLambdaClientV1 } from '../version1/QuotesLambdaClientV1';

export class QuotesClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('service-quotes', 'factory', 'default', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('service-quotes', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('service-quotes', 'client', 'http', 'default', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('service-quotes', 'client', 'lambda', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(QuotesClientFactory.DirectClientV1Descriptor, QuotesDirectClientV1);
		this.registerAsType(QuotesClientFactory.HttpClientV1Descriptor, QuotesHttpClientV1);
		this.registerAsType(QuotesClientFactory.LambdaClientV1Descriptor, QuotesLambdaClientV1);
	}
	
}
