import React from 'react'
import Link from "next/link";
import Image from "next/image";

const ArticleList = () => {
  return (
    <div>
        <article>
            <Link href="#">
            <Image
                src="/images/IMG_3083.jpeg" 
                alt=""
                width={580}
                height={300}
            />
            </Link>
            <div>
                <a href="#">動物</a>
                <a href="#">猫の日常を投稿</a>
                <p>By nori, Published on 2024/06/29</p>
                <a href="#">朝の静かな時間、ぴーこは窓辺に移動し、外の景色を眺めるのが日課で、優雅にヒゲをひくつかせる。
                            ぴーこは台所に向かい、朝食の準備が始まるのを待ち、チュールを嬉しそうに食べ始め、水も一緒に飲んで、しばらくすると満足そうな顔をしてリビングに戻る。
                </a>
                <Link href="#">続きを読む</Link>
            </div>
        </article>
    </div>
  )
}

export   default ArticleList