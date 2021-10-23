import React from 'react';
import InfoTile, { CaptionTile, ProjectTile } from './components/tiles';
import Sidebar from './components/sidebar';
import { FlexList, Link, StringList } from './components/items';

import { faGithub } from '@fortawesome/free-brands-svg-icons';

const birthday = new Date('2004/6/30');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { projects: null };
  }

  componentDidMount() {
    fetch('https://api.github.com/users/srcjosh/repos').then(r => r.json()).then(projects => this.setState({ projects }));
  }

  render() {
    const today = new Date();

    let experience = today.getFullYear() - 2015;

    // calculate age (https://stackoverflow.com/a/10008175 for explanation)
    // NOTE: this isn't the most accurate but I'm ok with that, it serves its purpose well enough
    // eslint-disable-next-line
    let age = Math.floor((today - birthday) / 31_536_000_000);

    return (
      <MainPage>
        <InfoTile title='About'>
          <p>
            My name is Josh, I'm a developer from Canada. 
            I started programming about {experience} years ago <i>today</i> and since then I've gained a large understanding of a lot of different programming languages (see below).
          </p>

          <CaptionTile caption='languages I know, in no particular order'>
            <StringList items={[ 'HTML & CSS', 'Typescript/Javascript', 'Python', 'Rust', 'MySQL', 'PHP', 'React', 'Java', 'C/C++', 'C#' ]} />
          </CaptionTile>

          <p>
            Programming has been a full-time hobby for me ever since I started.
          </p>
        </InfoTile>

        <InfoTile title='Projects'>
          {!this.state.projects ? <span>Loading...</span> : 
            <FlexList>
              {
                this.state.projects.filter(project => !project.fork)
                   .map(project => <ProjectTile projName={project.name} projUrl={project.html_url}>{project.description}</ProjectTile> )
              }
            </FlexList>
          }
        </InfoTile>

        {/* <InfoTile title='Communities'>idk example</InfoTile> */}
        <InfoTile title='Links'>
          <FlexList gap='1em'>
            <Link url='https://github.com/srcjosh' icon={faGithub}>GitHub</Link>
          </FlexList>
        </InfoTile>
      </MainPage>
    );
  }
}

function MainPage(props) {
  return (
    <div className='main'>
      <Sidebar />
      <div className='main-content'>
        {props.children}
      </div>
    </div>
  );
}

export default App;
