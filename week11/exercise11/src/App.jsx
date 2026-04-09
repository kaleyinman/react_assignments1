
import './App.css'

function SimpleCard({ title, content }) {
  return (
    <div className="simple-card">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}
function Footer() {
  return (
    <footer className="app-footer">
      <p>© 2026 My React App. All rights reserved.</p>
    </footer>
  );
}
function App() {
  return (
    <div>
      <h2>Hi Chat</h2>
      {/* SimpleCard component with 2 props */}
      <SimpleCard
        title="Kaley's First Card"
        content="This is a simple card component with title and content."
      />
      <SimpleCard
        title="Kaley's Second Card"
        content="I am reusing this component multiple times with different props. Yippee!"
      />

      {/* Footer component */}
      <Footer />
    </div>
  );
}
export default App;