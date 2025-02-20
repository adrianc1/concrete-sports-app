import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons } from '../utils/icons';

function Footer() {
	return (
		<div className="footer">
			<a href="tel:+1234567890">
				<FontAwesomeIcon icon={icons.phone} />
			</a>
			<a href="mailto:example@example.com">
				<FontAwesomeIcon icon={icons.envelope} />
			</a>
			<a href="https://www.concrete.k12.wa.us/">
				<FontAwesomeIcon icon={icons.globe} />
			</a>
		</div>
	);
}

export default Footer;
