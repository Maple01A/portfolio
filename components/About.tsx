"use client"

import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden relative shadow-md">
              {/* プロフィール画像が用意できたらコメントを解除 */}
              {/* <Image
                src="/profile.jpg"
                alt="プロフィール写真"
                fill
                className="object-cover"
              /> */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-500 text-lg">プロフィール画像</span>
              </div>
            </div>
            
            {/* 装飾要素 */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-10 z-0"></div>
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-10 z-0"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-700 text-transparent bg-clip-text">
                私について
              </span>
            </h2>
            
            <div className="space-y-4 text-gray-600">
              <p>
                2024年からフルスタック開発に専念し、新しいWeb技術を活用したアプリケーション開発に取り組んでいます。
                ユーザーが実際に使用するところまで考えて、直感的なインターフェースや機能を実装しました。
              </p>
              <p>
                現在、愛媛大学の植物工場情報システム学研究室に在籍しているため、機械学習やデータセット作成の勉強も取り組んでいます。
                将来にはAIをアプリに導入したプロジェクト開発に挑戦することを目指しています。
              </p>
              <p>
                新しい技術を学ぶことに情熱を持ち、アプリ開発技術だけではなく、他分野の技術もキャッチアップしています。
                また、コミュニケーションを大切にして、チームを大切にするエンジニアを目指しています。
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-1 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-gray-800 font-bold mb-2">学歴</h3>
                <p className="text-gray-600 text-sm">愛媛大学農学部食料生産学科植物工場システムコース </p>
                <p className="text-gray-500 text-xs">2024年 - 2027年に卒業予定</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About