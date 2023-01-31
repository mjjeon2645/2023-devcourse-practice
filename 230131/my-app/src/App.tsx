type AppProps = {
	name?: string;
};

export default function App({name = 'world'}: AppProps) {
	return (
		<p>Hello, {name}!</p>
	);
}
