import Page from '../../../Page/Page';
import AboutMe from './Components/AboutMe/AboutMe';
import Avatar from './Components/Avatar/Avatar';
import ContactTable from './Components/ContactTable/ContactTable';
import TagLine from './Components/TagLine/TagLine';
import './HomePage.css';

const HomePage = ({
  active
}) => (
  <div>
    <Page
      active={active}
      header={
        <div>
          <Avatar />
          <TagLine />
        </div>
      }
    >
      <div className="homepage__content">
        <AboutMe />
        <ContactTable />
      </div>
    </Page>
  </div>
);

export default HomePage;
