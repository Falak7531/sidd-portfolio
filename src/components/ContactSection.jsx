import React, { useState } from 'react';

const RECIPIENT_EMAIL = 'siddh160605@gmail.com';

export default function ContactSection() {
  const [phone, setPhone] = useState('+91 ');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = (formData.get('name') || '').toString().trim();
    const phoneVal = (formData.get('phone') || '').toString().trim();
    const email = (formData.get('email_from') || '').toString().trim();
    const company = (formData.get('company') || '').toString().trim();
    const subject = (formData.get('subject') || '').toString().trim();
    const message = (formData.get('description') || '').toString().trim();

    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      phoneVal && phoneVal !== '+91' ? `Phone: ${phoneVal}` : null,
      company ? `Company: ${company}` : null,
      '',
      'Message:',
      message,
    ].filter((line) => line !== null);

    const mailtoUrl = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join('\n'))}`;

    window.location.href = mailtoUrl;
  };

  return (
    <section className="relative bg-[#0F0F0F] text-[#F8F8F8] pt-[64px] pb-[48px]">
      <div className="ref-container-small">
        <h2 className="h2-heading text-white text-center mb-2">Let&apos;s Connect</h2>
        <p className="text-center text-[1.125rem] font-light mb-4 text-[#F8F8F8]/80">
          Get in touch with your customers to provide them with better service. You can modify the
          form fields to gather more precise information.
        </p>

        <section className="pt-[16px] pb-[16px]">
          <div className="w-full px-[15px] mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap -mx-[15px]">
                {/* Your Name * */}
                <div className="w-full px-[15px] mb-4">
                  <div className="flex flex-wrap items-start -mx-[15px]">
                    <label
                      htmlFor="contact_name"
                      className="w-full sm:w-[200px] px-[15px] py-[0.375rem] text-[#F8F8F8]"
                    >
                      <span>Your Name</span>
                      <span className="text-[0.85em] font-normal text-[#5DD62C]"> *</span>
                    </label>
                    <div className="w-full sm:flex-1 px-[15px]">
                      <input
                        id="contact_name"
                        type="text"
                        name="name"
                        required
                        className="block w-full py-[0.375rem] px-[0.75rem] text-[1rem] font-normal leading-[1.5] text-[#0F0F0F] bg-[#F8F8F8] border border-neutral-300 rounded-[0.125rem] focus:border-[#5DD62C] focus:outline-none focus:ring-4 focus:ring-[rgba(93,214,44,0.25)]"
                      />
                    </div>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="w-full px-[15px] mb-4">
                  <div className="flex flex-wrap items-start -mx-[15px]">
                    <label
                      htmlFor="contact_phone"
                      className="w-full sm:w-[200px] px-[15px] py-[0.375rem] text-[#F8F8F8]"
                    >
                      <span>Phone Number</span>
                    </label>
                    <div className="w-full sm:flex-1 px-[15px]">
                      <input
                        id="contact_phone"
                        type="tel"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="block w-full py-[0.375rem] px-[0.75rem] text-[1rem] font-normal leading-[1.5] text-[#0F0F0F] bg-[#F8F8F8] border border-neutral-300 rounded-[0.125rem] focus:border-[#5DD62C] focus:outline-none focus:ring-4 focus:ring-[rgba(93,214,44,0.25)]"
                      />
                    </div>
                  </div>
                </div>

                {/* Your Email * */}
                <div className="w-full px-[15px] mb-4">
                  <div className="flex flex-wrap items-start -mx-[15px]">
                    <label
                      htmlFor="contact_email"
                      className="w-full sm:w-[200px] px-[15px] py-[0.375rem] text-[#F8F8F8]"
                    >
                      <span>Your Email</span>
                      <span className="text-[0.85em] font-normal text-[#5DD62C]"> *</span>
                    </label>
                    <div className="w-full sm:flex-1 px-[15px]">
                      <input
                        id="contact_email"
                        type="email"
                        name="email_from"
                        required
                        className="block w-full py-[0.375rem] px-[0.75rem] text-[1rem] font-normal leading-[1.5] text-[#0F0F0F] bg-[#F8F8F8] border border-neutral-300 rounded-[0.125rem] focus:border-[#5DD62C] focus:outline-none focus:ring-4 focus:ring-[rgba(93,214,44,0.25)]"
                      />
                    </div>
                  </div>
                </div>

                {/* Your Company */}
                <div className="w-full px-[15px] mb-4">
                  <div className="flex flex-wrap items-start -mx-[15px]">
                    <label
                      htmlFor="contact_company"
                      className="w-full sm:w-[200px] px-[15px] py-[0.375rem] text-[#F8F8F8]"
                    >
                      <span>Your Company</span>
                    </label>
                    <div className="w-full sm:flex-1 px-[15px]">
                      <input
                        id="contact_company"
                        type="text"
                        name="company"
                        className="block w-full py-[0.375rem] px-[0.75rem] text-[1rem] font-normal leading-[1.5] text-[#0F0F0F] bg-[#F8F8F8] border border-neutral-300 rounded-[0.125rem] focus:border-[#5DD62C] focus:outline-none focus:ring-4 focus:ring-[rgba(93,214,44,0.25)]"
                      />
                    </div>
                  </div>
                </div>

                {/* Subject * */}
                <div className="w-full px-[15px] mb-4">
                  <div className="flex flex-wrap items-start -mx-[15px]">
                    <label
                      htmlFor="contact_subject"
                      className="w-full sm:w-[200px] px-[15px] py-[0.375rem] text-[#F8F8F8]"
                    >
                      <span>Subject</span>
                      <span className="text-[0.85em] font-normal text-[#5DD62C]"> *</span>
                    </label>
                    <div className="w-full sm:flex-1 px-[15px]">
                      <input
                        id="contact_subject"
                        type="text"
                        name="subject"
                        required
                        className="block w-full py-[0.375rem] px-[0.75rem] text-[1rem] font-normal leading-[1.5] text-[#0F0F0F] bg-[#F8F8F8] border border-neutral-300 rounded-[0.125rem] focus:border-[#5DD62C] focus:outline-none focus:ring-4 focus:ring-[rgba(93,214,44,0.25)]"
                      />
                    </div>
                  </div>
                </div>

                {/* Your Question * */}
                <div className="w-full px-[15px] mb-4">
                  <div className="flex flex-wrap items-start -mx-[15px]">
                    <label
                      htmlFor="contact_question"
                      className="w-full sm:w-[200px] px-[15px] py-[0.375rem] text-[#F8F8F8]"
                    >
                      <span>Your Question</span>
                      <span className="text-[0.85em] font-normal text-[#5DD62C]"> *</span>
                    </label>
                    <div className="w-full sm:flex-1 px-[15px]">
                      <textarea
                        id="contact_question"
                        name="description"
                        rows="3"
                        required
                        className="block w-full py-[0.375rem] px-[0.75rem] text-[1rem] font-normal leading-[1.5] text-[#0F0F0F] bg-[#F8F8F8] border border-neutral-300 rounded-[0.125rem] focus:border-[#5DD62C] focus:outline-none focus:ring-4 focus:ring-[rgba(93,214,44,0.25)] resize-y"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="w-full px-[15px] mb-0 py-2 text-right">
                  <button
                    type="submit"
                    className="inline-block py-[0.5rem] px-[1.25rem] text-[1rem] font-semibold leading-[1.5] text-[#0F0F0F] hover:text-[#F8F8F8] bg-[#5DD62C] hover:bg-[#337418] border border-[#5DD62C] hover:border-[#337418] rounded-[0.125rem] transition-colors shadow-md cursor-pointer"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </section>
  );
}