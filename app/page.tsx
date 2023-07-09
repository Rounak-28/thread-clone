import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Post from '@/components/Post'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen w-screen bg-[#101010] text-white">
        <div className="header sticky top-0 w-14">
          <Header />
        </div>
        <div className="posts">
          <Post id="0" />
          <Post id="1" />
          <Post id="2" />
          <Post id="3" />
          <Post id="4" />
          <Post id="5" />
          <Post id="6" />
          <Post id="7" />
          <Post id="8" />
          <Post id="9" />
          <Post id="10" />
        </div>
        <div className="footer sticky bottom-0">
          <Footer />
        </div>
      </main>
  )
}
