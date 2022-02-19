import useSWR from 'swr';
import {InferAPIResponse} from 'nextkit';
import {NextkitClientException} from 'nextkit/client';

export type URLGetter<Args extends string[]> = (
	...args: Args
) => `/api/${string}`;

export function endpoint<T>() {
	return <Args extends string[]>(url: URLGetter<Args>) =>
		(...args: Args) =>
			useSWR<InferAPIResponse<T, 'GET'>, NextkitClientException>(url(...args));
}
