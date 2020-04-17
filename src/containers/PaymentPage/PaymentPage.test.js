import React from 'react';
import PaymentPage from './PaymentPage';

import { render } from '@testing-library/react';

describe('PaymentPage tests', () => {
	it('should render', () => {
		expect(render(<PaymentPage />)).toBeTruthy();
	});
});
