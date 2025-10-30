import type { AppProps } from 'next/app'
import '../src/index.css'
import '../src/App.css'
import '../src/components/Navigation.css'
import '../src/components/Hero.css'
import '../src/components/About.css'
import '../src/components/Reiki.css'
import '../src/components/Blog.css'
import '../src/components/Booking.css'
import '../src/components/Footer.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
