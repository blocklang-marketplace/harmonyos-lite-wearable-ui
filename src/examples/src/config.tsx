import tests from "./tests";
import defaultTheme from "../../theme/default";
import BasicApp from "./widgets/app/Basic";
import BasicPage from "./widgets/page/Basic";

export default {
	name: "小程序组件库",
	home: "README.md",
	tests,
	themes: [{ label: "default", theme: defaultTheme }],
	readmePath: (widget: string) => `src/${widget}/README.md`,
	widgetPath: (widget: string, filename: string) => `src/${widget}/${filename || "index"}.tsx`,
	examplePath: (widget: string, filename: string) => `src/examples/src/widgets/${widget}/${filename || "index"}.tsx`,
	widgets: {
		app: {
			filename: "index",
			overview: {
				example: {
					filename: "Basic",
					module: BasicApp,
				},
			},
		},
		page: {
			filename: "index",
			overview: {
				example: {
					filename: "Basic",
					module: BasicPage,
				},
			},
		},
	},
};
