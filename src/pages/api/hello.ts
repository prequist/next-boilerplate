import {NextApiHandler} from 'next';

const handler: NextApiHandler = async function (req, res) {
	res.json({
		success: true,
		time: Date.now(),
	});
};

export default handler;
