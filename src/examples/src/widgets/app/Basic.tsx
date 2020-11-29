import { create, tsx } from "@dojo/framework/core/vdom";
import Example from "../../Example";
import App from "../../../../app";

const factory = create();

export default factory(function Basic() {
	return (
		<Example>
			<div
				styles={{
					width: "414px",
					height: "736px",
					marginLeft: "auto",
					marginRight: "auto",
					border: "black solid 1px",
				}}
			>
				<App>app</App>
			</div>
		</Example>
	);
});
