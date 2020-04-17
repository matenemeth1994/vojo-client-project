import React from 'react';
import OrderSummary from './OrderSummary';
import { render } from '@testing-library/react';

describe('OrderSummary tests', () => {
	it('should render', () => {
		expect(render(<OrderSummary />)).toBeTruthy();
	});
});
