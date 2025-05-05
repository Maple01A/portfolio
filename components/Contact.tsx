"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // ここで実際のフォーム送信処理を実装
    // 例: サーバーへのAPIリクエスト
    
    // 送信シミュレーション
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      
      // 成功メッセージを数秒後に非表示
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    }, 1500)
  }
  
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-700 text-transparent bg-clip-text">
              お問い合わせ
            </span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            ご質問などがあれば、お気軽にお問い合わせください。
            できるだけ早くご返信いたします。
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-green-100 border border-green-500 text-green-700 p-4 rounded-lg text-center"
            >
              <p className="font-medium">送信が完了しました。ありがとうございます！</p>
              <p className="text-sm mt-1">内容を確認次第、ご連絡いたします。</p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">お名前</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="名前を入力してください"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">メールアドレス</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="メールアドレスを入力してください"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">メッセージ</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="お問い合わせ内容を入力してください"
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium transition-colors hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? '送信中...' : '送信する'}
                </button>
              </div>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact