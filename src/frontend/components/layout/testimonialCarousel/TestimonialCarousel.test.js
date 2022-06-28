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

    it('renders the comoponent', () => {
        expect.assertions(2);
        expect(shallow(<TestimonialCarousel carouselData={mockPhotoProps}/>).length).toEqual(1);
        expect(shallow(<TestimonialCarousel carouselData={mockPhotoProps} />)).toMatchSnapshot();
    })

    it('renders one article tag', () => {
        const wrapper = shallow(<TestimonialCarousel carouselData={mockPhotoProps} />);
        expect(wrapper.find('article').length).toEqual(1);
    })

    it('should update state on click', () => {
        const nextSlide = jest.fn();
        const mockComponentWrapper = mount(<TestimonialCarousel carouselData={mockPhotoProps} />);

        const handleClick = jest.spyOn(React, "useState");
        handleClick.mockImplementation(slide => [slide, nextSlide]);

        mockComponentWrapper.find("#testimonialCarousel-forwardarrow").simulate("click");
        expect(nextSlide).toBeCalled();
    })
})