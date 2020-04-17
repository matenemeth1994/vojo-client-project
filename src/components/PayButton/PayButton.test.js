import React from 'react';
import PayButton from './PayButton';
import { render } from '@testing-library/react';

describe('PayButton tests', () => {
	it('should render', () => {
		expect(render(<PayButton />)).toBeTruthy();
	});
});
