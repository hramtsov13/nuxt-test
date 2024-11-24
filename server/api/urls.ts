export default defineSitemapEventHandler(async () => {
	const data = await Promise.all([
		{
			_path: '/yourDynamicRoute-1/',
			modifiedAt: new Date(),
		},
		{
			_path: '/yourDynamicRoute-2/',
			modifiedAt: new Date(),
		},
	]);

	return data.map((item) => ({ loc: item._path, lastmod: new Date() }));
});
