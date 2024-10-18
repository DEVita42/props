import Age from "./Age";

const Welcome = ({prop, age}) => {
  return (
    // if no prop is passed to the welcome components simply nothing is shown
    <div>
      <strong>Welcome, {prop.name}!</strong>
      <Age age={age}/>
    </div>
  );
};

export default Welcome;
