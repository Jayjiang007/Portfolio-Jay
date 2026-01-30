
import React from 'react';

const Contact: React.FC = () => {
  const contacts = [
    {
      type: 'Email',
      value: 'hello@ultraview.design',
      description: '商业合作与设计咨询',
      icon: '✉️'
    },
    {
      type: 'WeChat',
      value: 'ultraview_design',
      qrCode: 'https://picsum.photos/seed/wechat/300/300',
      description: '扫码添加，即时沟通',
      icon: '💬'
    },
    {
      type: 'Lark / Feishu',
      value: 'feishu_ultra',
      qrCode: 'https://picsum.photos/seed/lark/300/300',
      description: '企业办公协作首选',
      icon: '🏢'
    }
  ];

  return (
    <div className="pt-40 pb-24 px-6 min-h-screen bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black">
      <div className="max-w-5xl mx-auto text-center mb-20">
        <h1 className="text-6xl md:text-8xl font-black mb-8 gradient-text">联系我</h1>
        <p className="text-xl text-white/60">期待与您共同打造下一场改变世界的演示。</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {contacts.map((contact, i) => (
          <div key={i} className="glass-card p-10 rounded-3xl border-white/5 text-center group hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-2">
            <div className="text-4xl mb-6 bg-white/5 w-16 h-16 flex items-center justify-center rounded-2xl mx-auto group-hover:scale-110 transition-transform duration-500">
              {contact.icon}
            </div>
            <h2 className="text-2xl font-black mb-2">{contact.type}</h2>
            <p className="text-white/40 text-sm mb-6">{contact.description}</p>
            <div className="py-3 px-4 bg-white/5 rounded-lg mb-8 font-mono text-purple-400 select-all">
              {contact.value}
            </div>
            {contact.qrCode && (
              <div className="bg-white p-2 rounded-xl inline-block shadow-2xl overflow-hidden">
                <img src={contact.qrCode} alt="QR Code" className="w-40 h-40 grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-32 text-center text-white/20 text-sm uppercase tracking-[0.5em]">
        Available for worldwide collaboration · 2024
      </div>
    </div>
  );
};

export default Contact;
