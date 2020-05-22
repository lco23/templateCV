import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  {/* <div className="item-wrap"> */}
                    {/* <a href="#modal-01"> */}
                    
                    <a className="liens" href= {item.url} target="_blank">
                      <img src={`${item.imgurl}`} className="description-box"/>
                
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <p id="titlePortfolio">{item.title}</p>
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                          
                        </div>
                      </div>
                      </a>
                    {/* </a> */}
                  {/* </div> */}
                 
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}