function Hello({ name, age }) {
  // ACTUAL JS CODE FOR THE HTML ELEMENT
  // return React.createElement("h1", null, "Hello, World!");

  return (
    <h1>
      Hello, {name}! You are {age} years old.
    </h1>
  );
}

export default Hello;
