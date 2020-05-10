import React, { Component } from 'react'

class FoundationSnippet extends Component {
  render() {
    const foundationDetailLink = `foundations/${this.props.id}`

    return (
      <div className="foundation-entry">
        <div className="foundation-entry__title">{this.props.name}</div>
        <div className="foundation-entry__description">
          {this.props.description}
        </div>
        <a href={foundationDetailLink}> Detail Page</a>
      </div>
    )
  }
}

class FoundationListing extends Component {
  constructor(props) {
    super(props)

    this.state = {
      foundations: null,
      isLoading: true,
    }
  }

  componentDidMount() {
    fetch('http://localhost:8000/foundations')
      .then((res) => res.json())
      .then((json) => {
        this.setState({ foundations: json, isLoading: false })
      })
  }

  render() {
    const { foundations, isLoading } = this.state

    if (isLoading) {
      return <div></div>
    }

    return (
      <div className="foundation-list">
        {foundations.map((foundation) => {
          return (
            <FoundationSnippet
              key={foundation.id}
              id={foundation.id}
              name={foundation.name}
              description={foundation.description}
              contentUpdates={foundation.contentupdates}
            ></FoundationSnippet>
          )
        })}
      </div>
    )
  }
}

const Home = () => {
  return <FoundationListing />
}

export default Home
