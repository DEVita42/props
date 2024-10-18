import Age from "./Age";

const Welcome = ({name, age}) => {
  return (
    // if no prop is passed to the welcome components simply nothing is shown
    <div>
      <strong>Welcome, {name}!</strong>
      <Age age={age}/>
    </div>
  );
};

export default Welcome;
