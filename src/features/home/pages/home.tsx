import { Link } from "@tanstack/react-router";

export const HomePage = () => {
  return (
    <>
      <p>ini adalah halaman home</p>
      <Link to="/counter">ke halaman counter</Link>
    </>
  );
};
