const GreetingMessage = ({ name }) => {
    return(
        <>
        <h1>Hello, {name}!</h1>
        <button onClick={() => alert(`Welcome to the screen, ${name}`)}>Say Hello</button>
        </>
    ) 
};

export default GreetingMessage;
