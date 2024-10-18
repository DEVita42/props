const Age = ({age}) => {
    return (
     
      <div>
      {age > 18 && <p>Your age is {age}</p>}
      {age && <p>Your age is {age}</p>}
      {age > 18 && age < 65 && <p>Your age is {age}</p>}
      {name == "John" && age > 18 && age < 65 && <p>Your age is {age}</p>}
      {age > 18 ? (
        <p>Your age is {age}</p>
      ) : (
        <p>You are very young!</p>
      )}
      </div>
    );
  };
  
  export default Age;
  