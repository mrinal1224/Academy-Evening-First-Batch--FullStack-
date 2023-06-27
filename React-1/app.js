{
  /* <div id='parent'>
  <div id='child'>
    <h1 id='greeting> Hello from react </h1>
    <h2 id='greeting2'> Hello from react Heading 2 </h2>
  </div>
</div>; */
}

let greeting = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "greeting" } , "Hello from React"),
    React.createElement("h2", { id: "greeting2"}, "Hello from React Heading 2"),
  ])
);

console.log(greeting);

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(greeting);

//JSX
