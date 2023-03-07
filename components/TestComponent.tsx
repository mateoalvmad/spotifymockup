interface TestComponentProps {
    name: string;
    lastName: string;
    email: string;
    age: number;
}

const TestComponent = ({name, lastName, email, age}:TestComponentProps) => {
  return (
    <div>
      <span>Nombre: {name}</span>
      <span>Apellido: {lastName} </span>
      <span>Correo: {email}</span>
      <span>Edad: {age}</span>
    </div>
  );
};

interface TestComponentProps2 {
    children: JSX.Element;
}

const TestComponent2  = ({children}:TestComponentProps2)=> {
return (
    <div>
        <h1>Hello son</h1>
        {children}
        <h2>Howaryu</h2>
    </div>
);
}

export { TestComponent, TestComponent2 };
