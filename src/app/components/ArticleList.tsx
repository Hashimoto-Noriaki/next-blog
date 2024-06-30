import React from 'react'
import Link from "next/link";
import Image from "next/image";

const ArticleList = () => {
  return (
    <div>
      <article className="shadow my-4 flex flex-col">
        <Link href="#" className="hover:opacity-75">
        <Image
            src="/images/IMG_3083.jpeg" 
            alt=""
            width={580}
            height={300}
        />
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
            <Link href="#" className="text-green-700 pb-4 font-bold">動物</Link>
            <Link href="#" className="text-slate-900 text-3xl font-bold hover-text-gray-700 pb-4">猫の日常を投稿</Link>
            <p className="text-sm pb-3 text-slate-900">By nori, Published on 2024/06/29</p>
            <Link href="#" className="text-slate-900 pb-6">朝の静かな時間、ぴーこは窓辺に移動し、外の景色を眺めるのが日課で、優雅にヒゲをひくつかせる。
                        ぴーこは台所に向かい、朝食の準備が始まるのを待ち、チュールを嬉しそうに食べ始め、水も一緒に飲んで、しばらくすると満足そうな顔をしてリビングに戻る。
            </Link>
            <Link href="#">続きを読む</Link>
        </div>
      </article>

      <article className="shadow my-4 flex flex-col">
        <Link href="#" className="hover:opacity-75">
        <Image
            src="/images/IMG_3083.jpeg" 
            alt=""
            width={580}
            height={300}
        />
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
            <Link href="#" className="text-green-700 pb-4 font-bold">動物</Link>
            <Link href="#" className="text-slate-900 text-3xl font-bold hover-text-gray-700 pb-4">猫の日常を投稿</Link>
            <p className="text-sm pb-3 text-slate-900">By nori, Published on 2024/06/29</p>
            <Link href="#" className="text-slate-900 pb-6">朝の静かな時間、ぴーこは窓辺に移動し、外の景色を眺めるのが日課で、優雅にヒゲをひくつかせる。
                        ぴーこは台所に向かい、朝食の準備が始まるのを待ち、チュールを嬉しそうに食べ始め、水も一緒に飲んで、しばらくすると満足そうな顔をしてリビングに戻る。
            </Link>
            <Link href="#">続きを読む</Link>
        </div>
      </article>

      <article className="shadow my-4 flex flex-col">
          <Link href="#" className="hover:opacity-75">
          <Image
              src="/images/IMG_3083.jpeg" 
              alt=""
              width={580}
              height={300}
          />
          </Link>
          <div className="bg-white flex flex-col justify-start p-6">
              <Link href="#" className="text-green-700 pb-4 font-bold">動物</Link>
              <Link href="#" className="text-slate-900 text-3xl font-bold hover-text-gray-700 pb-4">猫の日常を投稿</Link>
              <p className="text-sm pb-3 text-slate-900">By nori, Published on 2024/06/29</p>
              <Link href="#" className="text-slate-900 pb-6">朝の静かな時間、ぴーこは窓辺に移動し、外の景色を眺めるのが日課で、優雅にヒゲをひくつかせる。
                          ぴーこは台所に向かい、朝食の準備が始まるのを待ち、チュールを嬉しそうに食べ始め、水も一緒に飲んで、しばらくすると満足そうな顔をしてリビングに戻る。
              </Link>
              <Link href="#">続きを読む</Link>
          </div>
      </article>
    </div>
  )
}

export   default ArticleList