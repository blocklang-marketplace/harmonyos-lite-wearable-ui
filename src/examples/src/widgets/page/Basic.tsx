import { create, tsx } from "@dojo/framework/core/vdom";
import Example from "../../Example";
import Page from "../../../../page";

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
				<Page>page</Page>
			</div>
		</Example>
	);
});
