"use client";
import React from "react";
import { Layout, Row, Col } from "antd";
import CVGenerator from "../components/CVGenerator";
import "./page.css"; // Corrected the import statement for the CSS file
const { Header, Content } = Layout;

const HomePage: React.FC = () => {
  return (
    <Layout style={{ minHeight: "100vh", padding: 0 }}>
      {/* Set padding to 0 */}
      <Header style={{ color: "#fff", textAlign: "center" }}>
        <h1 style={{ margin: 0 }}>CV Generator</h1>
      </Header>
      <Content style={{ padding: "40px 0" }}>
        {/* Add padding to create space */}
        <Row
          justify="center"
          align="center"
          style={{
            minHeight: "calc(100vh - 64px)",
            display: "flex",
            justifyContent: "center",
          }}>
          {/* Content is centered within the div */}
          <Col xs={48} md={24} style={{ width: "100%", padding: "0 20px" }}>
            {/* Set the width and add left-right padding */}
            <CVGenerator />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default HomePage;