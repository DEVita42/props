const Welcome = (prop, ageProp) => {
  return (
    // if no prop is passed to the welcome components simply nothing is shown
    <div>
      <strong>Welcome, {prop.name}!</strong>
      <p>Your age is {ageProp.age}</p>
    </div>
  );
};

export default Welcome;
