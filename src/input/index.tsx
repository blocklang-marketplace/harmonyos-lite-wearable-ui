import { create, tsx } from "@dojo/framework/core/vdom";
import { CheckEvent, SwipeEvent } from "../interfaces";
import toStyle from "css-to-style";
import * as css from "./Input.m.css";

export interface InputProperties {
	type: "button" | "checkbox" | "radio";
	checked: boolean;
	name?: string;
	value?: string;
	style?: string;
	class?: string;
	onchange?: (checkEvent: CheckEvent) => void;
	onclick?: () => void;
	onlongpress?: () => void;
	onswipe?: (swipeEvent: SwipeEvent) => void;
}

const factory = create().properties<InputProperties>();

export default factory(function index({ properties }) {
	const { type = "button", checked = false, name = "", value = "", class: classes = "", style = "" } = properties();

	const defaultClasses = type === "button" ? css.button : css.checkbox;

	const objStyle = toStyle(style);
	const arrClass = classes.split(",").map((item) => item.trim());
	return (
		<input
			type={type}
			checked={checked}
			name={name}
			value={value}
			styles={objStyle}
			classes={[defaultClasses, ...arrClass]}
		/>
	);
});
