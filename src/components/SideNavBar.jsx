// import logo from '../assets/Concrete-Logo.png';

function SideNavBar({ show, logo }) {
	return (
		<div className={show ? 'side-nav active' : 'side-nav'}>
			<img src={logo} alt="Logo" className="logo" />
			<ul>
				<li>
					<a href="https://www.concrete.k12.wa.us/sports/">Home</a>
				</li>
				<li>
					<a href="https://concretehslions.com/teams/3446004/basketball/varsity/schedule">
						Schedule
					</a>
				</li>
				<li>
					<a href="https://www.concrete.k12.wa.us/hs-calendar-grid/">
						Calendar
					</a>
				</li>
				<li>
					<a href="https://www.maxpreps.com/wa/concrete/concrete-lions/basketball/standings/">
						Standings
					</a>
				</li>
			</ul>
		</div>
	);
}

export default SideNavBar;
