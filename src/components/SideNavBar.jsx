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
					<a href="https://www.maxpreps.com/print/schedule.aspx?schoolid=749e9af8-8e9f-44e6-aca1-cd16a602ccfc&ssid=20ea215d-54ce-4502-8305-748bdc872d49&print=1">
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
