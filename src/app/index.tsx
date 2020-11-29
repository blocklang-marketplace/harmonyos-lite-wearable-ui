import { tsx, create } from "@dojo/framework/core/vdom";
import theme from "@dojo/framework/core/middleware/theme";
import * as css from "../theme/default/app.m.css";
import * as c from "@blocklang/bootstrap-classes";

// 定义部件的属性
export interface AppProperties {
	vendor?: string;
	onCreate?(): void;
	onDestroy?(): void;
}

const factory = create({ theme }).properties<AppProperties>();

/**
 * 当前的设计是： App 部件不作为 Page 的父部件，而是独立于 Page 部件之外的配置专用的部件，即不做显示用。
 *
 * 因为 Harmony OS Lite Wearable 不支持通过 App 设置全局样式
 */
export default factory(function App({ middleware: { theme } }) {
	const themedCss = theme.classes(css);
	return (
		<div classes={[theme.variant(), themedCss.root, "align-middle", c.text_muted, c.text_center]}>配置应用程序</div>
	);
});
