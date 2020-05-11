import React, { Component } from 'react'
import { useRouter } from 'next/router'

class FoundationDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: null,
      data: null,
    }
  }

  setId = () => {
    const id = useRouter().query.id
    this.setState({ id: id })
  }

  componentDidMount() {
    fetch(`http://localhost:8000/foundations/1`)
      .then((res) => res.json)
      .then((json) => {
        this.setState({ data: json })
      })
  }

  render() {
    const foundationData = this.state.data
    return <div> {foundationData} </div>
  }
}

const Foundation = () => {
  return <FoundationDetail />
}

export default Foundation
