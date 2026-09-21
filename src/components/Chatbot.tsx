import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const qaDatabase = [
  { keywords: ['service', 'offer', 'do', 'what'], answer: 'Digital Coyotes offers a range of services including Branding & Social Media, SEO, Web Design & Development, Social & Google Ads, and custom Web3 & AI Development.' },
  { keywords: ['contact', 'email', 'phone', 'reach'], answer: 'You can reach out to us by visiting our Contact Us page, where you can leave a message and we will get back to you shortly!' },
  { keywords: ['about', 'who', 'company', 'history'], answer: 'Digital Coyotes was founded in 2021 in Mumbai. With 8+ years of industry expertise, we have collaborated with 10+ international brands to drive digital success.' },
  { keywords: ['portfolio', 'work', 'client', 'project'], answer: 'We have worked with amazing clients. Check out our Our Clients page to view our dynamic portfolio of web redesigns, digital campaigns, and identity designs.' },
  { keywords: ['hello', 'hi', 'hey'], answer: 'Hello! How can I help you learn more about Digital Coyotes today?' },
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([
    { text: 'Hi there! I am the Digital Coyotes assistant. How can I help you today?', isBot: true }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { text: userMessage, isBot: false }]);
    setInput('');

    // Simulate typing delay
    setTimeout(() => {
      const lowercaseInput = userMessage.toLowerCase();
      let foundAnswer = "I'm not quite sure about that. Try asking about our services, history, or how to contact us!";
      
      for (const qa of qaDatabase) {
        if (qa.keywords.some(keyword => lowercaseInput.includes(keyword))) {
          foundAnswer = qa.answer;
          break;
        }
      }

      setMessages(prev => [...prev, { text: foundAnswer, isBot: true }]);
    }, 600);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 bg-[#ff5a1f] text-white rounded-full shadow-2xl hover:scale-110 transition-transform z-[999] ${isOpen ? 'hidden' : 'flex'}`}
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 w-80 md:w-96 bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden z-[999] flex flex-col h-[500px] max-h-[80vh]"
          >
            {/* Header */}
            <div className="bg-[#0a0a0a] text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-[#ff5a1f]" />
                <span className="font-semibold">Coyote Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50 flex flex-col gap-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-3 max-w-[85%] ${msg.isBot ? 'self-start' : 'self-end flex-row-reverse'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.isBot ? 'bg-[#ff5a1f] text-white' : 'bg-gray-200 text-gray-700'}`}>
                    {msg.isBot ? <Bot className="w-5 h-5" /> : <User className="w-5 h-5" />}
                  </div>
                  <div className={`p-3 rounded-2xl text-sm leading-relaxed ${msg.isBot ? 'bg-white border border-gray-200 text-gray-800 rounded-tl-none' : 'bg-[#0a0a0a] text-white rounded-tr-none'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-200 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about our services..."
                className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ff5a1f]/50"
              />
              <button
                type="submit"
                className="p-2 bg-[#ff5a1f] text-white rounded-full hover:bg-[#e04d19] transition-colors disabled:opacity-50"
                disabled={!input.trim()}
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
