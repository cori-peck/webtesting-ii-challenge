import React from 'react';
import { render, waitForElement } from 'react-testing-library';

import Display from './Display';

describe('<Display />', () => {
    it('renders strikes', () => {
        const { getByText } = render(<Display />);

        getByText(/strikes/i);
    })

    it('renders balls', () => {
        const { getByText } = render(<Display />);

        getByText(/balls/i);
    })

    it('should keep strike count', async () => {
        const {getByText } = render(<Display strikes={1} />)

        await waitForElement( () => getByText(/Strikes: 1/) );
    })
})