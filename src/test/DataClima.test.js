import React from 'react';
import {shallow} from 'enzyme/shallow';
import DataClima from '../Components/DataClima'

describe('Test En Weather', () => {

    test('Vista Correctamente', () => {
        const wrapper = shallow(<DataClima/>)

        expect(wrapper).toMatchSnapshot();
    })
})