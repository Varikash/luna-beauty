'use client';

import React, { useState } from 'react';
import './footer-form.css';

interface FooterFormProps {
  className?: string;
}

const FooterForm: React.FC<FooterFormProps> = ({ className }) => {
  // Состояния для формы
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });

  // Состояния для фокуса полей (для анимации плейсхолдеров)
  const [focused, setFocused] = useState({
    name: false,
    phone: false
  });

  // Состояния для ошибок валидации
  const [errors, setErrors] = useState({
    name: '',
    phone: ''
  });

  // Состояние для отправки формы
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // Обработчик изменения полей формы
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Очищаем ошибку при вводе
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFocus = (field: 'name' | 'phone') => {
    setFocused(prev => ({
      ...prev,
      [field]: true
    }));
  };

  const handleBlur = (field: 'name' | 'phone') => {
    if (!formData[field]) {
      setFocused(prev => ({
        ...prev,
        [field]: false
      }));
    }

    // Валидация при потере фокуса
    validateField(field, formData[field]);
  };

  // Функция валидации полей
  const validateField = (field: 'name' | 'phone', value: string) => {
    let error = '';

    if (field === 'name') {
      if (!value.trim()) {
        error = 'Name is required';
      } else if (value.trim().length < 2) {
        error = 'Name must be at least 2 characters';
      }
    } else if (field === 'phone') {
      if (!value.trim()) {
        error = 'Phone number is required';
      } else if (!/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(value)) {
        error = 'Please enter a valid phone number';
      }
    }

    setErrors(prev => ({
      ...prev,
      [field]: error
    }));

    return !error;
  };

  // Обработчик отправки формы
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Валидация всех полей
    const isNameValid = validateField('name', formData.name);
    const isPhoneValid = validateField('phone', formData.phone);

    if (!isNameValid || !isPhoneValid) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Здесь будет логика отправки формы
      // Например, с использованием fetch или axios

      // Имитация отправки для примера
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Успешная отправка
      setSubmitStatus('success');
      setFormData({ name: '', phone: '' });
      setFocused({ name: false, phone: false });

      // Сбрасываем статус через 3 секунды
      setTimeout(() => {
        setSubmitStatus('');
      }, 3000);
    } catch (error) {
      setSubmitStatus('error');

      // Сбрасываем статус через 3 секунды
      setTimeout(() => {
        setSubmitStatus('');
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={`subscription-form ${className || ''}`} onSubmit={handleSubmit}>
      <div className="subscription-form-field-container">
        <div className={`subscription-form-field ${focused.name || formData.name ? 'focused' : ''} ${errors.name ? 'error' : ''}`}>
          <label
            htmlFor="name"
            className="subscription-form-label"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onFocus={() => handleFocus('name')}
            onBlur={() => handleBlur('name')}
            className="subscription-form-input uppercase"
          />
          {errors.name && <p className="subscription-form-error">{errors.name}</p>}
        </div>

        <div className={`subscription-form-field ${focused.phone || formData.phone ? 'focused' : ''} ${errors.phone ? 'error' : ''}`}>
          <label
            htmlFor="phone"
            className="subscription-form-label"
          >
            Your phone number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onFocus={() => handleFocus('phone')}
            onBlur={() => handleBlur('phone')}
            className="subscription-form-input"
          />
          {errors.phone && <p className="subscription-form-error">{errors.phone}</p>}
        </div>
      </div>

      <button
        type="submit"
        className={`subscription-form-submit ${isSubmitting ? 'submitting' : ''}`}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send request'}
      </button>

      {submitStatus === 'success' && (
        <p className="subscription-form-success">Thank you for subscribing!</p>
      )}

      {submitStatus === 'error' && (
        <p className="subscription-form-submit-error">Something went wrong. Please try again.</p>
      )}
    </form>
  );
};

export default FooterForm;
