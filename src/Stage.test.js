import ReactDOM from 'react-dom';
import React from 'react';
import renderer from 'react-test-renderer';

import Stage from './Stage'
describe('<Stage/>', () => {
  //smoke testing
  it ('render without crashing', ()=> {
      const div =document.createElement('div');
      ReactDOM.render(<Stage/>,div);

      ReactDOM.unmountComponentAtNode(div);
  });
  //snapshot testing
  it ('renders this UI as expected', ()=>{
      const tree = renderer.create(<Stage />).toJSON();
      expect(tree).toMatchSnapshot();     
  });
});