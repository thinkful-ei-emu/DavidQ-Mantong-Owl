import React from 'react';
import ReactDOM from 'react-dom';
import ParticipantList from './ParticipantList';
import renderer from 'react-test-renderer';


describe('<ParticipantList />', () => {
    //smoke testing
    it ('render without crashing', ()=> {
        const div =document.createElement('div');
        ReactDOM.render(<ParticipantList participants={test_participants} />,div);

        ReactDOM.unmountComponentAtNode(div);
    });
    //snapshot testing
    it ('renders this UI as expected', ()=>{
        const tree = renderer.create(<ParticipantList participants={test_participants} />).toJSON();
        expect(tree).toMatchSnapshot();     
    });
});
const test_participants = [
  {
      id: 1,
      name: 'Koren Templeton',
      avatar:
          'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
      inSession: true,
      onStage: true
  },
  {
      id: 2,
      name: 'Caty Flucker',
      avatar:
          'https://robohash.org/doloredolorescupiditate.jpg?size=200x200&set=set1',
      inSession: true,
      onStage: false
  },
  {
      id: 3,
      name: 'Axe Kubicka',
      avatar: 'https://robohash.org/utlaborumfugit.jpg?size=200x200&set=set1',
      inSession: false,
      onStage: false
  },
  {
      id: 4,
      name: 'Frank Runciman',
      avatar:
          'https://robohash.org/etexercitationemassumenda.jpg?size=200x200&set=set1',
      inSession: true,
      onStage: false
  },
  {
      id: 5,
      name: 'Ashla Attwool',
      avatar:
          'https://robohash.org/iustodoloremqueinventore.jpg?size=200x200&set=set1',
      inSession: true,
      onStage: true
  }
];

