import {useTime} from '../client/hooks/api/time';

export default function Home() {
	const {data: {time} = {time: Date.now()}} = useTime();
	return <div>{time}</div>;
}
