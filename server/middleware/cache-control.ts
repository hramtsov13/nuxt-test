export default defineEventHandler((event) => {
	const res = event.node.res;

	const year = 31536000;
	const hour = 60 * 60;

	const url = event.node.req.url;

	// Many other file formats can be added, it is up to you (jpg|jpeg|gif|css|png|js|ico|svg|mjs)
	const maXage = url?.match(/(.+)\.(woff|woff2|ttf)/) ? year : hour;

	res.setHeader('Cache-Control', `public max-age=${maXage} s-maxage=${maXage} immutable`);
});
