import { TestComponent, TestComponent2 } from "@/components/TestComponent";


const test = () => {
  return (
    <div className="main-content">
      <span>página test</span>
      <TestComponent name='Mateo' lastName='Lopez' email='lon@d.com' age={25} />
      <TestComponent2>
        <span> hello mom</span>
      </TestComponent2>
    </div>
  );
};

export default test;
