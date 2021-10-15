import Page from '../../../Page/Page';
import AboutMe from './Components/AboutMe/AboutMe';
import './HomePage.css';

const HomePage = ({
  active
}) => (
  <div>
    <Page
      active={active}
      header={
        <div>
          <AboutMe />
        </div>
      }
    >
      <div className="homepage__content">
        content here
      </div>

    </Page>
  </div>
);

export default HomePage;
