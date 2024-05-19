import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const projects = [
  {
    name: 'Portfolio Analysis Project',
    description: 'Used Excel and Python for risk analysis of a seven-stock portfolio, with Power BI dashboards for strategic insights.',
    image: 'portfolio_analysis.jpg'
  },
  {
    name: 'Mock Census Data Analysis',
    description: 'Analyzed mock census data using SQL and Python, with Power BI dashboards to inform town development decisions.',
    image: 'mock_census.jpeg'
  },
  {
    name: 'Foundation Budgeting',
    description: 'Performed financial analysis and budgeting using Excel, evaluating cash flow and cost-saving opportunities.',
    image: 'foundation_budgeting.png'
  },
  {
    name: 'Off-Market Real Estate Seller Leads Ranking System',
    description: 'Developed an AI system to rank real estate leads using pandas and Logistic Regression, achieving 97.1% accuracy.',
    image: 'real_estate_leads.jpeg'
  }
];


const Projects = () => (
  <section id="projects" className="projects-section">
    <Container>
      <h2>Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} sm={12} md={6} lg={4}>
            <Card>
              <Card.Img variant="top" src={project.image} />
              <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Projects;
