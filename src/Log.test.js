import ReactDOM from 'react-dom';
import React from 'react';
import renderer from 'react-test-renderer';

import Log from './Log';
describe('<Log />', () => {
  //smoke testing
  it ('render without crashing', ()=> {
      const div =document.createElement('div');
      ReactDOM.render(<Log name="David" action="has left" />,div);

      ReactDOM.unmountComponentAtNode(div);
  });
  //snapshot testing
  it ('renders this UI as expected', ()=>{
      const tree = renderer.create(<Log name="David" action="has left" />).toJSON();
      expect(tree).toMatchSnapshot();     
  });
});