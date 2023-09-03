import { NavBar, Welcome, Footer, Transactions, Services, Loader } from "./components"
export default function App() {
  return (
    <div className="min-h-screen">
      <div className="gredient-bg-welcome">
        <NavBar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  )
}