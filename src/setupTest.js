import Enzyme from 'Enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {createSerializer} from 'enzyme-to-json'

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}))
Enzyme.configure({adapter:new Adapter()});
