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
                2023年からフロントエンド開発に専念し、モダンなWeb技術を活用したアプリケーション開発に取り組んでいます。
                ユーザー体験を第一に考えた直感的なインターフェースの設計と実装を得意としています。
              </p>
              <p>
                以前はバックエンド開発を担当していたため、フルスタック開発の経験も持っています。この経験を活かし、
                フロントエンドとバックエンドの連携を考慮した効率的な実装ができます。
              </p>
              <p>
                新しい技術を学ぶことに情熱を持ち、常に最新のフロントエンド技術トレンドをキャッチアップしています。
                チーム開発では円滑なコミュニケーションを大切にし、共同作業を通じて最高の成果物を生み出すことを目指しています。
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-gray-800 font-bold mb-2">学歴</h3>
                <p className="text-gray-600 text-sm">東京工科大学 情報工学部</p>
                <p className="text-gray-500 text-xs">2018年 - 2022年</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-gray-800 font-bold mb-2">勤務先</h3>
                <p className="text-gray-600 text-sm">株式会社テックソリューション</p>
                <p className="text-gray-500 text-xs">2022年 - 現在</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About