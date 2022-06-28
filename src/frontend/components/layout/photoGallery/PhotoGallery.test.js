import { shallow, mount } from 'enzyme';
import React from 'react';
import PhotoGallery from './PhotoGallery';

describe('The PhotoGallery.jsx component:', () => {


    const mockPhotoProps = [
        {
            src: 'picture.jpeg',
            width: 2,
            height: 3,
            title: 'Amanda',
            caption: 'Turtles Swinging in the studio',
            alt: 'Turtles Swinging in the studio',
            thumbnail: 'Turtles Swinging in the studio',
            id: 1
        }
    ]

    it('renders the component', () => {
        expect.assertions(2);
        expect(shallow(<PhotoGallery photos={mockPhotoProps} />).length).toEqual(1);
        expect(shallow(<PhotoGallery photos={mockPhotoProps} />)).toMatchSnapshot();
    });

    /* it('renders the photos props correctly', () => {
        const mockWrapper = mount(<PhotoGallery photos={mockPhotoProps}/>);
        expect(mockWrapper.props().photos).toEqual(mockPhotoProps.photos);
    }) */

  /*   it('updates the plusSlides counter on button click', () => {
        const mockComponent = shallow(<PhotoGallery photos={mockPhotoProps}/>);
        mockComponent.find('[id="modal-next"]').simulate('click');
    }) */
})