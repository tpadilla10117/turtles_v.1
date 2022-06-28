import { shallow } from 'enzyme';
import React from 'react';
import About from './About'; 

describe('The About.js component:', () => {

    it('expect to render the About.js component', () => {
        expect.assertions(2);
        expect(shallow(<About />)).toMatchSnapshot();
        expect(shallow(<About />).length).toEqual(1);
    });
});