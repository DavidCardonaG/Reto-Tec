import '@testing-library/jest-dom'
import {shallow} from 'enzyme'

import ListCitys from '../Components/ListCitys'

describe('Listar CIty', () => {

    test('Render', () => {
        const wrapper = shallow(<ListCitys/>)
        expect(wrapper).toHaveLength(1)

    })
})