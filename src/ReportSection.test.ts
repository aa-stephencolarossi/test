import ReportSection from './ReportSection';

test('test generating full name', () => {
	const section = new ReportSection({
		title: 'Google Analytics',
		name: 'All Channels',
	});

	expect(section.getFullName()).toBe('Google Analytics - All Channels');
});
