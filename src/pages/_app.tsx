import React from 'react';
import {AppProps} from 'next/app';
import {SWRConfig} from 'swr';
import {fetcher} from '../client/fetcher';

export default function App({Component, pageProps}: AppProps) {
	return (
		<SWRConfig value={{fetcher}}>
			<Component {...pageProps} />
		</SWRConfig>
	);
}
