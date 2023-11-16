type Props = {
    pageContent: string;
    metadata: object;
    onSourceClick?: () => void;
};
export declare const SourceBubble: (props: Props) => import("solid-js").JSX.Element;
type BubbleArrayProps = {
    bubbles: Props[];
};
export declare const SourceBubblesContainer: ({ bubbles }: BubbleArrayProps) => import("solid-js").JSX.Element;
declare const App: () => import("solid-js").JSX.Element;
export default App;
//# sourceMappingURL=SourceBubble.d.ts.map