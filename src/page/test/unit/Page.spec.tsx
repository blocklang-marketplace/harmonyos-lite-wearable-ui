const { describe, it } = intern.getInterface("bdd");
import { tsx } from "@dojo/framework/core/vdom";
import renderer, { assertion, wrap } from "@dojo/framework/testing/renderer";

import Page from "../../index";

const WrappedDiv = wrap("div");
const baseAssertion = assertion(() => <WrappedDiv></WrappedDiv>);

describe("Page", () => {
	it("Should render using the default properties", () => {
		const r = renderer(() => <Page />);
		r.expect(baseAssertion);
	});
});
