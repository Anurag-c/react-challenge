import BlendedColor from "../components/BlendedColor";
import Color from "../components/Color";

function App() {
  return (
    <div>
      <h2>Testcase 1:</h2>
      <BlendedColor name="BlendedColor">
        <Color r={60} g={20} b={90} />
        <Color r={0} g={30} b={60} />

        <BlendedColor name="BlendedColor">
          <Color r={120} g={0} b={60} />
          <Color r={0} g={200} b={0} />
        </BlendedColor>
      </BlendedColor>

      <h2>Testcase 2:</h2>
      <BlendedColor name="BlendedColor">
        <Color r={20} g={90} b={60} />
        <Color r={30} g={0} b={80} />

        <BlendedColor name="BlendedColor">
          <Color r={20} g={30} b={50} />
          <Color r={100} g={200} b={70} />
          <BlendedColor name="BlendedColor">
            <Color r={120} g={0} b={60} />
            <Color r={0} g={200} b={0} />
            <BlendedColor name="BlendedColor">
              <Color r={20} g={80} b={100} />
              <Color r={100} g={0} b={100} />
            </BlendedColor>
          </BlendedColor>
        </BlendedColor>
      </BlendedColor>
    </div>
  );
}

export default App;
