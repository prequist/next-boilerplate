import {api} from 'nextkit';

export default api<{time: number}>({
	async GET() {
		return {time: Date.now()};
	},
});
