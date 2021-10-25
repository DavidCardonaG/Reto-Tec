import React from 'react';
import {shallow} from 'enzyme/shallow';
import Crud from '../Components/Crud'

describe('Test En Crud', () => {

    test('Snapchop', () => {
        const wrapper = shallow (<Crud/>)

        expect(wrapper).toMatchSnapshot();
    })
})