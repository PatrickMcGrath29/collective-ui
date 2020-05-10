import Header from '../components/header'
import Footer from '../components/footer'

const defaultTemplate = (body) => {
  return (
    <main>
      <Header></Header>
      {body()}
      <Footer></Footer>
    </main>
  )
}

export default defaultTemplate
