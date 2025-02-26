import React, { Component } from 'react';

export default class Sponsors extends Component {

    render() {

        if(this.props.currentTier.sponsors.length === 0)
        {
            return(
                <div/>
            );
        }
        else{
            return (
                <article key={this.props.currentTier.tierID} className="tier">
                    <h3>{this.props.currentTier.name}</h3>
                    <br/>
                    {
                        this.props.currentTier.sponsors.map((sponsor) =>
                        <div className-="sponsorDiv">
                        <a alt="sponsor image link" key={sponsor.id} href={sponsor.url}>
                            <img alt="sponsor" src={sponsor.image} width={sponsor.width} height={sponsor.height}/>
                            <br/>
                            <p>{sponsor.companyName}</p>
                        </a>
                        <br/>
                        </div>
                    )
                    }

                </article>
            )
        }
    }
}