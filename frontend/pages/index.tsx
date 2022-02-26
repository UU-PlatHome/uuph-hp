import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Home = () => {
  return (
    <>
      <Head>
        <title>UU-PlatHome | 宇大生必須のプラットフォーム</title>
      </Head>

      <header className="w-full pt-5 fixed z-50" style={{ height: 80 }}>
        <div className="flex wrapper justify-between items-center" style={{ height: 60 }}>
          <h1>
            <a href='https://uu-plathome.com'>
              <Image src='/Logo_black.svg' width='220' height='39' alt='UU-PlatHome' />
            </a>
          </h1>
          <nav className='text-sm mr-5 flex gap-7'>
            <a href='#about'>ABOUT</a>
            <a href='#service'>SERVICE</a>
            {/*<a href='#news'>NEWS</a>*/}
            <Link href='/contact'>
              <a>CONTACT</a>
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <div className='mainvisual pt-20 mb-10' style={{ height: 780 }}>
          mainvisual
        </div>

        <section id="about" className="w-full mb-28">
          <div className='inner-content relative' style={{ height: 510 }}>
            <div className='w-screen bg-main-b4 absolute' style={{ zIndex: 0, height: 510 }}>
              <div className="" style={{ maxWidth: 800, marginLeft: 100, height: 510 }}>
                <h2 className='mb-60'>
                  ABOUT<br /><span>“UU-PlatHome”とは？</span>
                </h2>
                <p className='leading-8'>UU-PlatHomeは、<br /><span className='line mplus-medium'>宇都宮大学生必須のWebサービス
                  “UU-Circles”</span><br /><span className='line mplus-medium'>メディアサイト “uu-yell”</span><br />を運営するメディア団体です。
                </p>
              </div>
            </div>
            <div className='absolute top-16 left-96' style={{}}>
              <Image src='/about_boy.png' width='250' height='250' alt='' />
            </div>
            <div className='absolute top-28 left-64' style={{}}>
              <Image src='/about_girl.png' width='250' height='250' alt='' />
            </div>
            <div className='flex gap-5 absolute top-1/2 right-0' style={{ transform: 'translateY(-50%)' }}>
              <Image src='/UUCircles_iPhone.png' width='160' height='308.55' alt='UU-Circles' />
              <Image src='/uuyell_iPhone.png' width='160' height='308.55' alt='uu-yell' />
            </div>
          </div>
        </section>

        <section id="service" className="w-full mb-28">
          <div className='inner-content relative' style={{ height: 800 }}>
            <div className='w-screen bg-main-b4 absolute right-0' style={{ zIndex: 0, height: 800 }}>
              <div className="absolute right-0" style={{ width: 800, marginRight: 100, height: 800 }}>
                <h2 className='mb-16 text-right'>
                  SERVICE<br /><span>運営サービス</span>
                </h2>

                <div className='flex container justify-between mb-20'>
                  <div className='' style={{ width: 460 }}>
                    <h3 className='mb-3 line_blue inline-block'>UU-Circles</h3>
                    <p className='text-sm leading-7 pl-8 mb-3'>「宇都宮大学の全てのサークルを知れる場所」を目標に運営を行っている Web サービス。</p>
                    <p className='text-sm leading-7 pl-8 mb-4'>各サークルオリジナルの『ビラ』一覧 や
                      毎日更新される『今日の新歓』、サークルが新歓の追加や情報を更新できる『サークル管理ページ』などの機能があります。</p>
                    <div className='text-center'>
                      <a href='https://uu-circles.com/' target='_blank' rel='noopener' className='linkbox'>UU-Circles</a>
                    </div>
                  </div>
                  <div className='my-auto'>
                    <Image src='/uucircles_thumbnail.png' width='300' height='156.27' />
                  </div>
                </div>

                <div className='flex container justify-between'>
                  <div className='my-auto'>
                    <Image src='/uuyell_thumbnail.png' width='300' height='156.27' />
                  </div>
                  <div className='' style={{ width: 460 }}>
                    <h3 className='mb-3 line_blue inline-block'>uu-yell</h3>
                    <p className='text-sm leading-7 pl-8 mb-3'>宇都宮大学の学生活動を応援する<br />プラットフォーム型メディアサイト。</p>
                    <p className='text-sm leading-7 pl-8 mb-4'>
                      uu-mailのとなりにブックマークしてもらえるくらい必須ツールにしたいという目標から「uu-mailのとなりに、uu-yell。」をキャッチコピーとして掲げています。</p>
                    <div className='text-center'>
                      <a href='https://media.uu-circles.com/' target='_blank' rel='noopener' className='linkbox'>uu-yell</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*<section id='news'>
          news
        </section>*/}

        <section id='u-lab' className='mb-28'>
          <div className='text-center py-10 inner-content rounded-3xl border-4 border-ulab'>
            <h2 className='mplus-medium text-lg text-fb mt-0 mb-7'>サイト制作について</h2>
            <p className='mb-8'>UU-Circles・uu-yellの開発は 学生団体U-lab が行いました！</p>
            <div className='w-fit text-center m-auto'>
              <a href='https://ulab-uu.com' target='_blank' rel='noopener' className='block mb-2'>
                <Image src='/U-lab_uu.jpg' width='250' height='145' alt='U-lab' />
                <p>U-lab HP</p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className='w-full' style={{ height: 300 }}>
        footer
      </footer>
    </>
  )
}

export default Home