import React from 'react';
import {shallow} from 'enzyme/shallow';
import {Weather} from '../Components/Weather'
import expectExport from 'expectExport';

describe('Test En Weather', () => {

    test('Vista Correctamente', () => {
        const wrapper = shallow (<Weather/>)

        expect(wrapper).toMatchSnapshot();
    })
})