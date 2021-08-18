import useSWR from 'swr';
import {HttpException, InferAPIResponseType} from 'nextkit';

export function createAPIHook<T>(url: `/api/${string}`) {
	return () => useSWR<InferAPIResponseType<T>, HttpException>(url);
}
