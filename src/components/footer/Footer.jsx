import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons } from '../../utils/icons';
import { LuPhone } from 'react-icons/lu';
import { MdOutlineEmail } from 'react-icons/md';
import { CiGlobe } from 'react-icons/ci';

import './footer.css';

function Footer() {
	return (
		<div className="footer">
			<a href="tel:+1234567890">
				<LuPhone />
			</a>
			<a href="mailto:example@example.com">
				<MdOutlineEmail />
			</a>
			<a href="https://www.concrete.k12.wa.us/">
				<CiGlobe />
			</a>
		</div>
	);
}

export default Footer;
