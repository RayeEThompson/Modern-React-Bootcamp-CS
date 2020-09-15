/**
 * Class Component Style
 */
class Hello extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello there!</h1>
				<h1>Hello there!</h1>
				<h1>Hello there!</h1>
			</div>
		);
	}
}
/**
 * Functional Component Style via Arrow Function
 */
// const Hello = () => {
// 	return (
// 		<div>
// 				<h1>Hello there!</h1>
// 				<h1>Hello there!</h1>
// 				<h1>Hello there!</h1>
// 		</div>
// 	)
// }

ReactDOM.render(<Hello />, document.getElementById('root'));
