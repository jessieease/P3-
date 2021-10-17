import Page from '../../../Page/Page';
import PageTitle from '../../../PageTitle/PageTitle';
import docker from '../../../assets/docker.png';
import kubernetes from '../../../assets/kubernetes.png';
import frontend from '../../../assets/frontend.png';
import backend from '../../../assets/backend.png';
import cloud from '../../../assets/cloud.png';
import './ServicesPage.css';

const ServicesPage = ({
  active
}) => (
  <Page
    active={active}
    title="Services"
    header={<PageTitle>Services</PageTitle>}
  >
    <div className="servicesPage__services">
      <h3 className="services__title">
        My
        <span className="services__titleHightLight">Skills Set</span>
      </h3>
      <div className="services">
        <div className="serviceItem">
          <div className="serviceItem__imageContainer">
            <img alt="Front end" src={frontend} className="serviceItem__image"></img>
          </div>
          <h4 className="serviceItem__name">Front End</h4>
          <div className="serviceItem__description">
            HTML5, CSS3, styled-components, styled-system, JavaScript(Vanilla/ES6), Bootstrap, FlexBox, TypeScript, ReactJS(NextJS), Responsive web design, RESTful API, JWT
          </div>
        </div>
        <div className="serviceItem">
          <div className="serviceItem__imageContainer">
            <img alt="Backend" src={backend} className="serviceItem__image"></img>
          </div>
          <h4 className="serviceItem__name">Back End</h4>
          <div className="serviceItem__description">
            NodeJS, Java Spring Boot and Spring Security, SQL include MySQL, PostgreSQL, NoSQL include MangoDB</div>
        </div>
        <div className="serviceItem">
          <div className="serviceItem__imageContainer">
            <img alt="Cloud Service" src={cloud} className="serviceItem__image"></img>
          </div>
          <h4 className="serviceItem__name">Cloud Services</h4>
          <div className="serviceItem__description">AWS EC2, AWS S3, AWS Lambda, AWS Api Gateway, AWS DynamoDB</div>
        </div>
      </div>
    </div>
    <div className="servicesPage__clients">
      <h3 className="services__title">
        DevOps Tools
      </h3>
      <div className="clients">
        <img alt="Docker" src={docker} className="clientItem"></img>
        <img alt="Kubernetes" src={kubernetes} className="clientItem"></img>
      </div>
    </div>
  </Page>
);

export default ServicesPage;
