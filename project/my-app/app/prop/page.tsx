import React from "react";

interface GreetingProps extends JobProps  {
  name: string;
};
type JobProps = {
  job: string;
};

const Greeting: React.FC<GreetingProps> = ({ name }) => <h1>Hello, {name}</h1>;

const Greetingdata: React.FC<JobProps> = ({ job }) => <h1>Hello, {job}</h1>;

const App: React.FC = () => {
  return (
    <>
      <Greeting job="IT" name="Alice" />
      <Greetingdata job="it" />
    </>
  );
};

const Propsdata: React.FC = () => (
  <>
    <h2>Propsdata Component</h2>
    <App />
  </>
);

export default Propsdata;
