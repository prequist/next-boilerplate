import React from 'react';
import {AppProps} from 'next/app';
import {SWRConfig} from 'swr';
import {APIResponse, HttpException} from 'nextkit';

export default function App({Component, pageProps}: AppProps) {
	return (
		<SWRConfig
			value={{
				async fetcher<T>(url: string) {
					const request = await fetch(url);
					const body = (await request.json()) as APIResponse<T>;

					if (!body.success) {
						throw new HttpException(request.status, body.message);
					}

					return body.data;
				},
			}}
		>
			<Component {...pageProps} />
		</SWRConfig>
	);
}
