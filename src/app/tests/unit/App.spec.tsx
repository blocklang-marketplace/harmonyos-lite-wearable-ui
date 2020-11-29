const { describe, it } = intern.getInterface("bdd");
import { tsx } from "@dojo/framework/core/vdom";
import renderer, { assertion } from "@dojo/framework/testing/renderer";

import App from "../..";
import * as css from "../../../theme/default/app.m.css";
import * as c from "@blocklang/bootstrap-classes";

const baseAssertion = assertion(() => (
	<div classes={[null, css.root, "align-middle", c.text_muted, c.text_center]}>配置应用程序</div>
));

describe("App", () => {
	it("should render using default properties", () => {
		const r = renderer(() => <App />);
		r.expect(baseAssertion);
	});
});
