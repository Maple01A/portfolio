"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

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
            <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden relative shadow-md m-12">
              <Image
                src="/IMG_303911.jpg"
                alt="プロフィール写真"
                fill
                className="object-cover"
              />
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
                ユーザーが実際に使用するところまで考えて、直感的なインターフェースや機能に力を入れています。
              </p>
              <p>
                現在、愛媛大学の植物工場情報システム学研究室に在籍しているため、機械学習やデータセット作成の勉強も取り組んでいます。
                将来にはAIアプリの開発に挑戦してみたいと思います。
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-1 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-gray-800 font-bold mb-2">学歴</h3>
                <p className="text-m">大阪日本語教育センター </p>
                <p className="text-gray-500 text-xs">2021年4月入学- 2022年3月卒業</p>
                <p className="text-m">読売理工医療福祉専門学校 </p>
                <p className="text-gray-500 text-xs">2022年4月入学- 2024年3月卒業</p>
                <p className="text-m">愛媛大学農学部食料生産学科植物工場システムコース </p>
                <p className="text-gray-500 text-xs">2024年4月入学- 2027年3月卒業予定</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About