import Machine from './Machines/Machine';
import './App.css';

function App() {
    return (
        <main>
            <h1>Apple machines</h1>
            <section>
                <div>You discover a new machine.</div>
                <div>On its conveyor belt are <strong>2</strong> apples.</div>
                <div>Press <strong>Go</strong> and see what the machine does.</div>
            </section>
            <Machine label="+3" conveyorRight={10} itemsIn={5} />
        </main>
    );
}

export default App;
