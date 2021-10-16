import SocialMedia from './SocialMedia/SocialMedia';
import './TagLine.css';

const TagLine = () => (
  <div className="homepage__title">
    <h2 className="homepage__name">Hello, I'm Jessie</h2>
    <div className="homepage__position">I am a web developer</div>
    <div className="homepage__socialMedias">
      <SocialMedia iconName="twitter" />
      <SocialMedia iconName="facebook-f" />
      <SocialMedia iconName="instagram" />
    </div>
  </div>
);

export default TagLine;
