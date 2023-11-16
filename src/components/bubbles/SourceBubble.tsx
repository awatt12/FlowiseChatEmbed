// Step 1: Define the SourceBubble component
type Props = {
  pageContent: string;
  metadata: object;
  onSourceClick?: () => void;
};

export const SourceBubble = (props: Props) => (
  <div
    data-modal-target="defaultModal" 
    data-modal-toggle="defaultModal"
    className="flex justify-start mb-2 items-start animate-fade-in host-container hover:brightness-90 active:brightness-75"
    onClick={() => props.onSourceClick?.()}
  >
    <span
      className="px-2 py-1 ml-1 whitespace-pre-wrap chatbot-host-bubble"
      data-testid="host-bubble"
      style={{
        "min-width": '80px',
        "max-width": '80%',
        "font-size": "13px",
        "border-radius": '15px',
        cursor: 'pointer',
        "background": "#E1EFFF",
        "word-wrap": "break-word",
        "overflow": "auto",
      }}
    >
      {props.pageContent}
    </span>
  </div>
);

// Step 2: Define the SourceBubblesContainer component
type BubbleArrayProps = {
  bubbles: Props[];
};

export const SourceBubblesContainer = ({ bubbles }: BubbleArrayProps) => (
  <div className="flex flex-col justify-start items-start">
    {bubbles.map((bubble, index) => (
      <SourceBubble key={index} {...bubble} />
    ))}
  </div>
);

// Step 3: Create an array of data for the bubbles
const bubblesData: Props[] = [
  // ... Populate with your actual data
];

// Step 4: Use the SourceBubblesContainer in your app's render method
const App = () => {
  // ... your other component logic

  return (
    <div>
      {/* ... other parts of your application */}
      <SourceBubblesContainer bubbles={bubblesData} />
      {/* ... other parts of your application */}
    </div>
  );
};

export default App;
