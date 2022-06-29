import { shallow, mount } from 'enzyme';
import React from 'react';
import TestimonialCarousel from './TestimonialCarousel';

describe('The TestimonialCarousel.jsx component:', () => {

    const mockPhotoProps = [
        {
            src: 'picture.jpeg',
            title: 'Kianna B.',
            clientimg: 'picture.jpeg',
            subtitle: 'Student',
            caption: 'Turtles really is an amazing talent & teacher.  I have learned so much from here and would not be where I am today without her. Turtles really is an amazing talent & teacher.  I have learned so much from here and would not be where I am today without her',
            alt: 'Turtles Swinging in the studio',
            thumbnail: 'Turtles Swinging in the studio',
            buttonId: 1,
            id: 1
        }
    ]

    it('renders the component', () => {
        expect.assertions(2);
        expect(shallow(<TestimonialCarousel carouselData={mockPhotoProps}/>).length).toEqual(1);
        expect(shallow(<TestimonialCarousel carouselData={mockPhotoProps} />)).toMatchSnapshot();
    });

    it('renders one article tag', () => {
        const wrapper = shallow(<TestimonialCarousel carouselData={mockPhotoProps} />);
        expect.assertions(2);
        expect(wrapper.find('article').length).toEqual(1);
        expect(wrapper).not.toBeNull();
    });

    it('renders 2 SVG icons', () => {
        const wrapper = shallow(<TestimonialCarousel carouselData={mockPhotoProps} />);

        expect.assertions(2);
        expect(wrapper.find('.testimonialCarousel-forwardarrow').length).toEqual(1);
        expect(wrapper.find('.testimonialCarousel-backarrow').length).toEqual(1);
    });

    it('should ensure a function is passed to material UI icon onClick props', () => {
    /* Define a mock function: */
        const mockComponentWrapper = shallow(<TestimonialCarousel carouselData={mockPhotoProps} />);

    /* Define a mock function to validate whether calling it actually valls the useState hook: */
        expect.assertions(5);
        expect(mockComponentWrapper.length).toEqual(1);
        
        const container = mockComponentWrapper.find('.testimonialCarousel-forwardarrow');
        expect(container.length).toEqual(1)
        expect(container.prop('onClick')).toBeTruthy();

        const container2 = mockComponentWrapper.find('.testimonialCarousel-backarrow');
        expect(container2.length).toEqual(1)
        expect(container2.prop('onClick')).toBeTruthy();
    });

    it('checks to see if a current slide is active', () => {
        const mockComponentWrapper = mount(<TestimonialCarousel carouselData={mockPhotoProps} />);
        expect.assertions(4);
        expect(mockComponentWrapper.length).toEqual(1);

        const container = mockComponentWrapper.find('.testimonialCarousel-img-slider');
        expect(container.length).toEqual(1);

        const container2 = mockComponentWrapper.find('.testimonialCarousel-slide .active');
        
        expect(container2.length).toEqual(1);
        expect(container2.props().className).toEqual('testimonialCarousel-clientimg-parent active fadeInUp')
        
    })
})