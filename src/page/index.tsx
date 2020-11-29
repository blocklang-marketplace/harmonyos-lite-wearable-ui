import { tsx, create } from "@dojo/framework/core/vdom";

// 定义部件的属性
export interface PageProperties {
	onInit?(): void;
	onReady?(): void;
	onShow?(): void;
	onHide?(): void;
	onDestroy?(): void;
}

const factory = create().properties<PageProperties>();

// 定义部件
export default factory(function Page({ children, properties }) {
	return <div>{children()}</div>;
});
