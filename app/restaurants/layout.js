import Header from "../components/Header";

export default function Layout({ children }) {
  return (
    <div className="restaurants">
      <Header />
      {children}
    </div>
  );
}
