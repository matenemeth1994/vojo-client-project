import React from 'react';
import PaymentDetails from './PaymentDetails';

import { render } from '@testing-library/react';

describe('PaymentDetails tests', () => {
	it('should render', () => {
		expect(render(<PaymentDetails />)).toBeTruthy();
	});
});
