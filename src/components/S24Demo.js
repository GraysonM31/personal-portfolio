import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function DemoWebsite() {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6} xl={5}>
          <Card className="rounded p-4 mb-4">
            <Card.Body>
              <h4>Website Demo</h4>
              <p className="paragraph">
                This is a demonstration of the bear incident and tracking application that I developed to replace a legacy system. The application is designed to be user-friendly and efficient in tracking bear incidents.
              </p>
              <a href="http://birta-v2.azurewebsites.net" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Visit Website
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} xl={7}>
          <Card className="rounded p-4 mb-4">
            <Card.Body>
              <h3>Application Features</h3>
              <p className="paragraph">
                The application includes the following features:
                <ul>
                  <li><strong>Incident Reporting:</strong> Users can report bear incidents with detailed information.</li>
                  <li><strong>Real-time Tracking:</strong> Track bear movements and incidents in real-time.</li>
                  <li><strong>Data Analysis:</strong> Analyze incident data to identify patterns and trends.</li>
                  <li><strong>User Management:</strong> Manage user roles and permissions within the application.</li>
                </ul>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default DemoWebsite;