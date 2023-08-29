const heading1 = React.createElement(
  "h1",
  { id: "head1" },
  "This is Heading One"
);
const heading2 = React.createElement(
  "h1",
  { id: "head2" },
  "This is Heading Two"
);

const navbar = React.createElement("div", { id: "navbar" }, [
  heading1,
  heading2,
]);

const onesection = React.createElement(
  "h2",
  { id: "sectiononeID" },
  "This is section one......"
);

const container = React.createElement("div", { id: "container" }, [
  navbar,
  onesection,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
