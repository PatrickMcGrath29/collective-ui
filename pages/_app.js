import Header from '~/components/header'
import Footer from '~/components/footer'
import '~/assets/styles/main.scss'

const MyApp = ({ Component, pageProps }) => {
  return (
    <main>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}

export default MyApp
