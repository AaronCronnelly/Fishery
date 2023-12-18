function Content() {
    return (
        // console.log("In content file")
        <div>
            <h1>In content</h1>
            <h2>Time: {new Date().toLocaleTimeString()}.</h2>
            <h2>Date: {new Date().toLocaleDateString()}</h2>
        </div>
    );
}
export default Content;