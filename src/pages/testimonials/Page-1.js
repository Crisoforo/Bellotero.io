import React, { Component } from "react";
import API from "../../utils/API";

class Testimonial extends Component {
  state = {
    title: [],
    reviews: []
  };
  componentDidMount() {
    API.getContent().then(res => {
      const title = res.data.slider.title;
      this.setState({ title });
      this.setState({ reviews: res.data.slider.reviews });
    });
  }
  render() {
    return (
      <div className="testimonial">
        <div className="Rectangle">
          {this.state.title ? (
            <h3 className="Our-customers-love-u">{this.state.title}</h3>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        {this.state.reviews.map((person, i) => (
          <div key={`some-comment-${i}`}>
            {person.name ? (
              <p className="Pete-Zahut">{person.name}</p>
            ) : (
              <p>Loading...</p>
            )}
            {person.position ? (
              <p className="Chef-Maniak">{person.position}</p>
            ) : (
              <p>Loading...</p>
            )}
            {person.comment ? (
              <div className="comment">
                <q className="Its-funny-what-mem">{person.comment}</q>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        ))}
        <div className="Rectangle-Copy-6">
          <button className="btn" onClick={this.handleClick}>
            1/4
          </button>
        </div>
      </div>
    );
  }
}

export default Testimonial;
