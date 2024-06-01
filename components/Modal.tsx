"use client"

import { FormEvent, useState } from 'react'
import Image from 'next/image'
import { addUserEmailToProduct } from '@/lib/actions'

interface Props {
  productId: string
}

const EmailForm = ({ productId }: Props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await addUserEmailToProduct(productId, email);

    setIsSubmitting(false)
    setEmail('')
  }

  return (
    <div className="form-container">
      <h4 className="form-head_text">
        Stay updated with product pricing alerts right in your inbox!
      </h4>

      <p className="text-sm text-gray-600 mt-2">
        Never miss a bargain again with our timely alerts!
      </p>

      <form className="flex flex-col mt-5" onSubmit={handleSubmit}>
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email address
        </label>
        <div className="input-container">
          <Image 
            src="/assets/icons/mail.svg"
            alt='mail'
            width={18}
            height={18}
          />

          <input 
            required
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className='input'
          />
        </div>

        <button type="submit" className="btn">
          {isSubmitting ? 'Submitting...' : 'Track'}
        </button>
      </form>
    </div>
  )
}

export default EmailForm
