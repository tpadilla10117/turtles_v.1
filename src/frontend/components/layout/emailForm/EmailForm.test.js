import { shallow } from 'enzyme';
import React from 'react';
import EmailForm from './EmailForm';

describe('The EmailForm.jsx component:', () => {
    let wrapper;

    beforeEach( () => {
        const mockProps = {
            bannerImg: '',
            alt: ''
        };

        wrapper = shallow(<EmailForm {...mockProps} alt='text' bannerImg='text.jpeg'/>)
        
    });

    it('renders the EmailForm.jsx component', () => {
        expect.assertions(2);

        expect(wrapper.length).toEqual(1);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders out the correct props', () => {

        expect(wrapper.props().alt).toEqual('text')
        /* expect(wrapper.props().alt).toEqual('text'); */
        
    })
})