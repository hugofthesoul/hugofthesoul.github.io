import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class VideoCountTuner extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      selectedVideoCount: 5
    };
  }

  onSelectedVideoCountChange = (item) => {
    this.setState({ selectedVideoCount: item },
                  () => this.props.onSelectedVideoCountChange(item));
  }

  render(){
    return (
      <div>
        <Container>
          <Row>
            <Col md={6}>
              <label>{this.state.selectedVideoCount}</label>
            </Col>
            <Col md={6}>
              <input type="range" min="1" max="20" step="1"
                     value={this.state.selectedVideoCount}
                     onChange={changeEvent => this.onSelectedVideoCountChange(changeEvent.target.value)} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default VideoCountTuner;
