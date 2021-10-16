import './SocialMedia.css';

const SocialMedia = ({
  iconName,
}) => (
  <i className={`fab fa-${iconName} homepage__socialMediaItem`}></i>
);

export default SocialMedia;
