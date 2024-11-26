import { joinURL } from 'ufo';

/* 
  Each endpoint will be processed by this eventHandler in order to proxy its path
*/
export default defineEventHandler(async (event) => {
	const { apiEndpoint } = useRuntimeConfig();

	const path = event.path.replace(/^\/api\//, ''); // /api/users -> /users
	const target = joinURL(apiEndpoint, path);

	return proxyRequest(event, target);
});
