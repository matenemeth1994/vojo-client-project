import React from "react";
import PrivateRoutes from "./PrivateRoutes";
import PaymentPage from "../PaymentPage";
import { render } from "@testing-library/react";

describe('PrivateRouting tests', () => {
	it('should render', () => {
		expect(render(<PrivateRoutes children={<PaymentPage/>} user={true} />)).toBeTruthy();
	});
});
