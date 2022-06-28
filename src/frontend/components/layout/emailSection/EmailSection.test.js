import { shallow } from 'enzyme';
import React from 'react';
import EmailSection from './EmailSection';


describe('The EmailSection.jsx component:', () => {
    let wrapper;

    const mockProps = {
        content: {}
    };
 
    beforeEach( () => {

        wrapper = shallow(<EmailSection content={mockProps}/>);
        
    })

    it('renders the EmailSection.jsx component', () => {

        expect.assertions(1);
        expect(wrapper).toMatchSnapshot();
    })

})