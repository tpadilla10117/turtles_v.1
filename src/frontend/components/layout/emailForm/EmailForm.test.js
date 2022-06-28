import { shallow, mount } from 'enzyme';
import React from 'react';
import EmailForm from './EmailForm';

describe('The EmailForm.jsx component:', () => {
    let wrapper;
    const mockProps = {
        bannerImg: '',
        alt: ''
    };

    beforeEach( () => {

        wrapper = shallow(<EmailForm {...mockProps} alt='text' bannerImg='text.jpeg'/>)
        
    });

    it('renders the EmailForm.jsx component', () => {
        expect.assertions(2);

        expect(wrapper.length).toEqual(1);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders out the correct props', () => {
       const mockWrapper = mount(<EmailForm alt={mockProps.alt} bannerImg={mockProps.bannerImg} />);
       expect.assertions(2);
       expect(mockWrapper.props().alt).toEqual(mockProps.alt);
       expect(mockWrapper.props().bannerImg).toEqual(mockProps.bannerImg);
    })
})