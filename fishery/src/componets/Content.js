import './Content.css';
function Content() {
    return (
        // console.log("In content file")
        <div className='content-header'>
            <h1>Welcome to fishery, the one stop app, for logigng<br>
            </br>you fish catching history</h1>
            <h2>Time: {new Date().toLocaleTimeString()}.</h2>
            <h2>Date: {new Date().toLocaleDateString()}</h2>
            <p id='about'>
            Introducing <strong>Fishery</strong>, the ultimate companion for anglers of all levels! This innovative fishing app is designed for enthusiasts who want to capture and cherish their fishing adventures effortlessly. With its user-friendly features and sleek interface, <strong>Fishery</strong> is the go-to app for anglers who seek a seamless way to document and share their prized catches.
            <br></br>
            At the core of <strong>Fishery</strong> is its intuitive interface, allowing users to log crucial details of their fishing experiences with just a few taps. The standout feature of the app is its ability to record specific information such as location, fish species, size, and weight. No more forgetting the details of that unforgettable catch – <strong>Fishery</strong> ensures every memorable moment is preserved in vivid detail.
            <br></br>
            Gone are the days of fumbling with pen and paper while juggling a fishing rod. With <strong>Fishery</strong>, users can effortlessly enter the lake or river name, ensuring a comprehensive overview of their favorite fishing spots over time. The app harnesses the power of geolocation technology, making it a breeze to tag and map each fishing hotspot accurately. Whether you're casting your line into a tranquil lake or a rushing river, <strong>Fishery</strong> is your digital fishing companion that keeps track of the specifics that matter most to anglers.
            <br></br>
            But <strong>Fishery</strong> is not just a personal logbook; it's a community of passionate anglers sharing their experiences. Users can connect with fellow fishing enthusiasts, exchange tips, and even discover new, exciting locations based on the collective wisdom of the <strong>Fishery</strong> community.
            <br></br>
            In conclusion, <strong>Fishery</strong> is not just an app; it's a lifestyle for those who live for the thrill of the catch. Whether you're a seasoned angler or just starting your fishing journey, make every cast count with <strong>Fishery</strong> – where every fish tale is worth telling. Download the app today and reel in the memories!
            </p>
            <h2><strong>!!!!Please remember that this is a indevelopment app, and it will grow over the coming years!!!!</strong></h2>
        </div>
    );
}
export default Content;