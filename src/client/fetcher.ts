import {APIResponse} from 'nextkit';
import {NextkitClientException} from 'nextkit/client';

export async function fetcher<T>(url: string) {
	const request = await fetch(url);
	const body = (await request.json()) as APIResponse<T>;

	if (!body.success) {
		throw new NextkitClientException(request.status, body.message);
	}

	return body.data;
}
