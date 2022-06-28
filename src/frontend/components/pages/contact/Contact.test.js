import { shallow } from 'enzyme';
import React from 'react';
import Contact from './Contact';

describe('The Contact.js component:', () => {
    it('renders the Contact.js component', () => {
        expect.assertions(2);
        expect(shallow(<Contact />).length).toEqual(1);
        expect(shallow(<Contact />)).toMatchSnapshot();
    })
})