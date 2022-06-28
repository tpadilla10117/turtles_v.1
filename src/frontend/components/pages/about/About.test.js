import { shallow } from 'enzyme';
import React from 'react';
import About from './About';
import { HeroCarousel } from '../../utils'; 

describe('The About.js component:', () => {

    it('expect to render the About.js component', () => {
        expect.assertions(2);
        expect(shallow(<About />)).toMatchSnapshot();
        expect(shallow(<About />).length).toEqual(1);
    });


    it('expect to render the HeroCarousel', () => {
        const mockHeroCarouselData = [
            {
                title: 'xxx',
                caption: 'some text',
                alt: 'an alternative xxx',
                thumbnail: 'xxx',
                buttonId: 1,
                id: 1
            }
        ];

        expect.assertions(2);

        expect(shallow(<HeroCarousel imgData={mockHeroCarouselData} />)).toMatchSnapshot();

        expect(shallow(<HeroCarousel imgData={mockHeroCarouselData} />).length).toEqual(1);
    });
});