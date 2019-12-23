import React, { Component } from 'react'
import './App.css';
import Film from './Film'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{
        id: 0, name: "The challenge", rating: '1',
        image: "https://img-4.linternaute.com/T3Zn85R5YYgVr7bt7M_nskphlUA=/1240x/df5bb230f3f3408a9e8085121b3c1de8/ccmcms-linternaute/37765.jpg"
      },
      {
        id: 1, name: "in The Name of the King", rating: '2',
        image: "https://www.dvdplanetstore.pk/wp-content/uploads/2018/03/5055002532269.jpg"
      },
      {
        id: 2, name: "Dachera", rating: '5',
        image: "https://static.wilout.com/e6f49b280b84db7df5a0f22953d33d69-background-1554803470207.jpg"
      },
        {
          id: 3, name: "Inception", rating: '4',
          image: "https://images-na.ssl-images-amazon.com/images/I/51TfUWh5N9L._AC_SY445_.jpg"
        },
        {
          id: 4, name: "joker", rating: '3',
          image: "data:image/jpeg;base64,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"
        }


      ],
      searchInput: "",
      searchStar: 5,
      display:false
    }
  }

  addItem = () => {
  
    let newitem = { id: Math.random(), name: this.state.name, rating: this.state.rating, image:this.state.image }
    this.setState({
       list: [...this.state.list, newitem] , 
      display : ! this.state.display
      
      })
      console.log(this.state.list)
    }
 
  setName = (e) => {
    this.setState({
      searchInput: e.target.value
    })
  }
  setStar = (e) => {
    this.setState({
      searchStar: e
    })
  }
  render() {
    return (<div>
      <div >
        <div className="search">
              <input className="search-text" type="text" onChange={(e) => this.setName(e)} />
              <div className="star">
                    <span onClick={(e) => this.setStar(1)}>★</span>
                    <span onClick={(e) => this.setStar(2)}>★</span>
                    <span onClick={(e) => this.setStar(3)}>★</span>
                    <span onClick={(e) => this.setStar(4)}>★</span>
                    <span onClick={(e) => this.setStar(5)}>★</span>
              </div>
        </div>

      </div>   
      <div >
        <Film listMovie={this.state.list} searchStar={this.state.searchStar} searchInput={this.state.searchInput} 
        />
      </div>

      <div  className={this.state.display ? 'display' : 'none'}>
        <input className="input1" type="text" placeholder="Name"  onChange={(e) =>this.setState({name:e.target.value})} />
        <input className="input2" type="number" placeholder="Rating" onChange={(e) => this.setState({rating: e.target.value })}/>
        <input className="input3" type="text" placeholder="IMG"  onChange={(e) => this.setState({image: e.target.value })} />

        <button className="btn" onClick={this.addItem}> ADD</button>

      </div>
      <span className="newitem" onClick={() => this.setState({ display: !this.state.display })}>+</span>


    </div>
    );
  }
}

export default App;

