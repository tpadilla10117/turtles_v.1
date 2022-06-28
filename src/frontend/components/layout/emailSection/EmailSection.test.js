import { shallow } from 'enzyme';
import React from 'react';
import EmailSection from './EmailSection';


describe('The EmailSection.jsx component:', () => {
    let wrapper;

    beforeEach( () => {
        const mockProps = {
            bannerImg: 'text.jpeg',
            alt: 'some text'
        };

        wrapper = shallow(<EmailSection content={mockProps}/>);
        
    })

    it('renders the EmailSection.jsx component', () => {

        expect.assertions(1);
        expect(wrapper).toMatchSnapshot();
    })

   /*  it('checks for the correct props', () => {
        expect(wrapper.props().content).toEqual('<EmailForm />')
    }) */
})