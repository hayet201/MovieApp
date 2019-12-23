import React, { Component } from 'react';
class Film extends Component {

   
    render() {
        return (<div>
            <div className="list">
                <div className="movies">
                    {this.props.listMovie.filter((el) => el.name.toUpperCase().includes(this.props.searchInput.toUpperCase()) && el.rating <= this.props.searchStar).map(el => {
                        return (
                            <div key={el.id} className='movie'>
                                <p>{"".padEnd(el.rating, "★")}</p>
                                <img src={el.image} alt="im-movie"/>
                                <p>{el.name}</p>
                            </div>)}
                            )}
                        
                
                </div>

            
            </div>
           
        </div>
        );
    }
}
export default Film;