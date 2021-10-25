import '@testing-library/jest-dom'
import {shallow} from 'enzyme'

import Navbar from '../Components/Navbar'

describe('Test En Navbar', () => {

    test('Render', () => {
        const wrapper = shallow(<Navbar/>)
        expect(wrapper).toHaveLength(1)

    })
})