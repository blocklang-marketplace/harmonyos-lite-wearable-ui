import { create, tsx } from "@dojo/framework/core/vdom";
import toStyle from "css-to-style";

export interface TextProperties {
	value?: string;
	style?: string;
	classes?: string;
}

const factory = create().properties<TextProperties>();

export default factory(function Text({ properties }) {
	const { value = "", classes = "", style = "" } = properties();

	const arrClass = classes.split(",").map((item) => item.trim());
	const objStyle = toStyle(style);

	return (
		<span classes={arrClass} styles={objStyle}>
			{value}
		</span>
	);
});
