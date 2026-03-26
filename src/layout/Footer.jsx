function Footer() {
	return (
		<footer className="max-md:hidden" style={{
			width: '100%',
			marginTop: 'auto',
			borderTop: '1px solid rgba(0,0,0,0.08)',
			padding: '1.25rem 1.5rem',
			textAlign: 'center',
		}}>
			<p style={{ fontSize: '0.72rem', color: '#9ca3af', margin: 0 }}>
				© {new Date().getFullYear()} Concrete Lions Athletics · Powered by{' '}
				<a
					href="https://dreauxdigital.com/"
					target="_blank"
					rel="noreferrer"
					style={{ color: '#9ca3af', textDecoration: 'none', fontWeight: 600 }}
				>
					Dreaux Digital
				</a>
			</p>
		</footer>
	);
}

export default Footer;
