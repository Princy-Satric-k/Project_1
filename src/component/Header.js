// import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
// import { getposts } from "../services";
const Header = () => {
  //   const { isLoading, error, data } = useQuery("fetching", () =>
  //     axios("https://jsonplaceholder.typicode.com/users")
  //   );

  // const { data, isLoading, error } = useQuery({
  //   queryKey: ["users"],
  //   queryFn: getposts,
  // });
  // if (error) return <h1>Error: {error.message}</h1>;
  // if (isLoading) return <h1>Loading.....</h1>;
  // console.log(data);
  return (
    <div>
      <Navbar expand="lg" className="color">
        <Container>
          <Navbar.Brand className="text-white">ABI</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/home" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="/login" className="text-white">
                Login
              </Nav.Link>
              <Nav.Link href="/register" className="text-white">
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="d-flex flex-column justify-content-center align-items-center vh-100 backcolor">
        <h3 className="text-primary mb-4">
          Welcome to my page to learn react-query
        </h3>
        {/* {data.map((item) => (
          <h6 className="text-primary" key={item.id}>
            {item.email}
          </h6>
        ))} */}
      </div>
    </div>
  );
};

export default Header;
