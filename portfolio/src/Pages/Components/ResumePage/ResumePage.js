import Page from '../../../Page/Page';
import PageTitle from '../../../PageTitle/PageTitle';
import Education from './Components/Education/Education';
import Experience from './Components/Experience/Experience';
import './ResumePage.css'

const ResumePage = ({
  active
}) => (
  <Page 
    active={active}
    title="Resume"
    header={<PageTitle>Resume</PageTitle>}
  >
    <div className="resumePage__sub">
      <Experience />
      <Education />
    </div>
    <div className="resumePage__sub">
      <div>
        <h3 className="resumeSub__title">Design <span className="resumeSub__titleHighlight">Skills</span></h3>
        <div className="skill">
          <h4 className="skill__title">API Design</h4>
          <div className="skill__level skill__level--apiDesign"></div>
        </div>
        <div className="skill">
          <h4 className="skill__title">Web Design</h4>
          <div className="skill__level skill__level--webDesign"></div>
        </div>
        <div className="skill">
          <h4 className="skill__title">Database Design</h4>
          <div className="skill__level skill__level--databaseDesign"></div>
        </div>
      </div>
      <div>
        <h3 className="resumeSub__title">Coding <span className="resumeSub__titleHighlight">Skills</span></h3>
        <div className="skill">
          <h4 className="skill__title">HTML</h4>
          <div className="skill__level skill__level--htmlDesign"></div>
        </div>
        <div className="skill">
          <h4 className="skill__title">CSS</h4>
          <div className="skill__level skill__level--cssDesign"></div>
        </div>
        <div className="skill">
          <h4 className="skill__title">JavaScript</h4>
          <div className="skill__level skill__level--jsDesign"></div>
        </div>
      </div>
    </div>
  </Page>
);

export default ResumePage;
