const TEAM_LOGOS = {
	// Concrete
	concrete: 'https://cdn.arbitersports.com/Shared/SchoolLogos/logo4935.png',

	// Football opponents
	quilcene: 'https://cdn.arbitersports.com/Shared/SchoolLogos/logo18747.png',
	'lummi nation':
		'https://cdn.arbitersports.com/Shared/SchoolLogos/logo13350.png',
	'charles wright acad.':
		'https://cdn.arbitersports.com/Shared/SchoolLogos/logo3937.png',
	'charles wright academy':
		'https://cdn.arbitersports.com/Shared/SchoolLogos/logo3937.png',
	'muckleshoot tribal school':
		'https://cdn.arbitersports.com/Shared/SchoolLogos/logo36731.png',
	'neah bay': 'https://cdn.arbitersports.com/Shared/SchoolLogos/logo15657.png',

	// Basketball opponents logos
	thorp: 'https://wpanetwork.com/lib/images/school_logos/logo23397.png',
	'clallam bay':
		'https://cdn.arbitersports.com/Shared/SchoolLogos/logo4372.png',
	'cedar park christian':
		'https://assets.arbitersports.com/logos/organization/70143',
	'lake quinault':
		'https://cdn.arbitersports.com/Shared/SchoolLogos/logo12190.png',
	crescent: 'https://cdn.arbitersports.com/Shared/SchoolLogos/logo5261.png',
	'providence classical christian':
		'https://assets.arbitersports.com/logos/organization/70116',
	'south whidbey':
		'https://cdn.arbitersports.com/Shared/SchoolLogos/logo21499.png',
	'evergreen lutheran':
		'https://assets.arbitersports.com/logos/organization/35325',
	'mount vernon christian':
		'https://cdn.arbitersports.com/Shared/SchoolLogos/logo15355.png',
	'lopez island':
		'https://cdn.arbitersports.com/Shared/SchoolLogos/logo13200.png',
	'tulalip heritage':
		'https://cdn.arbitersports.com/Shared/SchoolLogos/logo38358.png',
	'grace academy':
		'https://cdn.arbitersports.com/Shared/SchoolLogos/logo33449.png',
	taholah: 'https://cdn.arbitersports.com/Shared/SchoolLogos/logo22928.png',

	// Volleyball opponents
	'shoreline christian':
		'https://cdn.arbitersports.com/Shared/SchoolLogos/logo20964.png',
	'evangel classical school':
		'https://assets.arbitersports.com/logos/organization/177549',

	// Shared across multiple sports
	'la conner': 'https://assets.arbitersports.com/logos/organization/39788',
	darrington: 'https://cdn.arbitersports.com/Shared/SchoolLogos/logo5561.png',
	coupeville: 'https://cdn.arbitersports.com/Shared/SchoolLogos/logo5153.png',
	'orcas island':
		'https://cdn.arbitersports.com/Shared/SchoolLogos/logo17129.png',
	'friday harbor':
		'https://cdn.arbitersports.com/Shared/SchoolLogos/logo8070.png',

	// Softball/baseball opponents
	'granite falls':
		'https://cdn.arbitersports.com/Shared/SchoolLogos/logo8880.png',
};

export function getTeamLogo(teamName) {
	if (!teamName) return null;
	const normalized = teamName
		.toLowerCase()
		.replace(/\s*\([^)]*\)\s*/g, '') // remove "(2B)", "(1A)", "(Lynnwood)", etc.
		.trim();
	return TEAM_LOGOS[normalized] ?? null;
}
