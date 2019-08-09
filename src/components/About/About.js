import React from 'react';
import './About.scss';

class About extends React.Component {
  render(){
    return (
      <section className="about-container">
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec vestibulum nunc. Maecenas congue erat quis odio euismod convallis. Donec libero dui, pharetra vel porta eget, molestie at mi. Vestibulum dignissim posuere libero at aliquam. Cras ipsum tellus, dignissim eget lectus non, porta consequat arcu. Quisque vulputate, dolor feugiat mattis fermentum, justo lacus facilisis magna, id eleifend massa est vitae enim. Phasellus ipsum nulla, pulvinar ut pulvinar non, ultrices eu dolor. Ut at libero non turpis vehicula vestibulum quis sed orci. Proin sit amet nisi et ipsum venenatis scelerisque vel quis velit. Aliquam at elit et justo aliquet pellentesque. Maecenas luctus suscipit ipsum, eget luctus justo ullamcorper in.</p>
      </section>
    );
  }
}

export default About;