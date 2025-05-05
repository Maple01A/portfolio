"use client"

import React from 'react'
import Spotlight from './ui/Spotlight'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <Spotlight className='min-h-screen'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='py-20 md:py-36'>
          {/* ヒーローヘッダー */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='text-center mb-16'
          >
            <h1 className='text-5xl md:text-7xl font-bold text-gray-800 mb-6'>
              <span className='bg-gradient-to-r from-blue-600 to-purple-700 text-transparent bg-clip-text'>
                ポートフォリオ
              </span>
            </h1>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              ポートフォリオサイトです。私のスキルやプロジェクトを紹介しています。
            </p>
          </motion.div>

          {/* スキルアイコン */}
          <p className='text-lg text-gray-600 max-w-2xl mx-auto flex justify-center items-center'>
              このサイトで使用された技術。
            </p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='flex flex-wrap justify-center gap-6 mt-5'
          >
            {['React', 'Next.js', 'TypeScript', 'Tailwind CSS'].map((skill, index) => (
              <div key={index} className='bg-white shadow-md rounded-lg p-4 flex items-center gap-2'>
                <div className='h-6 w-6 bg-blue-500 rounded-full'></div>
                <span className='text-gray-800 font-medium'>{skill}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAボタン */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className='mt-16 flex justify-center space-x-4'
          >
            <a 
              href="#projects" 
              className='px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors'
            >
              プロジェクトを見る
            </a>
            <a 
              href="#contact" 
              className='px-8 py-3 bg-transparent border border-gray-300 hover:bg-gray-100 text-gray-800 rounded-full font-medium transition-colors'
            >
              お問い合わせ
            </a>
          </motion.div>

          {/* スクロールダウン表示 */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className='absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center'
          >
            <p className='text-gray-500 text-sm mb-2'>スクロールして詳細を見る</p>
            <div className='w-5 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2'>
              <motion.div 
                className='w-1 h-2 bg-gray-500 rounded-full'
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </Spotlight>
  )
}

export default Header