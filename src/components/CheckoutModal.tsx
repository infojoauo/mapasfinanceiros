import React, { useState } from 'react';
import { X, ShieldCheck, QrCode, CreditCard, Lock, CheckCircle2, ArrowRight, Copy, Check } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  planName: string;
  price: string;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  planName,
  price,
  onClose,
}) => {
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [copiedPix, setCopiedPix] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCompleted(true);
  };

  const handleCopyPix = () => {
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-[#D5CDC0] relative text-left my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#8C9E94] hover:text-[#182C22] p-1.5 rounded-full hover:bg-[#F3EFE6] transition-colors"
          aria-label="Fechar checkout"
        >
          <X className="w-5 h-5" />
        </button>

        {!isCompleted ? (
          <>
            <div className="mb-4">
              <span className="text-[11px] font-bold text-[#206E45] bg-[#EAF5EF] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Ambiente Criptografado & Seguro
              </span>
              <h3 className="text-xl font-bold text-[#14291F] font-serif mt-2">
                Finalizar Compra — {planName}
              </h3>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-black text-[#152B20]">
                  R$ {price}
                </span>
                <span className="text-xs text-[#526D60]">
                  à vista • Pagamento único
                </span>
              </div>
            </div>

            {/* Payment Method Switcher */}
            <div className="grid grid-cols-2 gap-2 mb-5">
              <button
                type="button"
                onClick={() => setPaymentMethod('pix')}
                className={`flex items-center justify-center gap-2 p-2.5 rounded-xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  paymentMethod === 'pix'
                    ? 'border-[#227B4E] bg-[#EAF6F0] text-[#16422C]'
                    : 'border-[#E0D9CC] bg-[#FAF8F3] text-[#55695E]'
                }`}
              >
                <QrCode className="w-4 h-4" />
                <span>PIX (Imediato)</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`flex items-center justify-center gap-2 p-2.5 rounded-xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  paymentMethod === 'card'
                    ? 'border-[#227B4E] bg-[#EAF6F0] text-[#16422C]'
                    : 'border-[#E0D9CC] bg-[#FAF8F3] text-[#55695E]'
                }`}
              >
                <CreditCard className="w-4 h-4" />
                <span>Cartão de Crédito</span>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-[#24382E] mb-1">
                  Nome Completo
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Carlos e Mariana Silva"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#D1C9BA] bg-[#FCFBF8] focus:outline-hidden focus:ring-2 focus:ring-[#227B4E]/30 focus:border-[#227B4E]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#24382E] mb-1">
                  E-mail para Receber o Acesso
                </label>
                <input
                  type="email"
                  required
                  placeholder="seuemail@exemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#D1C9BA] bg-[#FCFBF8] focus:outline-hidden focus:ring-2 focus:ring-[#227B4E]/30 focus:border-[#227B4E]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#24382E] mb-1">
                  WhatsApp (para envio de cópia instantânea)
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(11) 99999-9999"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#D1C9BA] bg-[#FCFBF8] focus:outline-hidden focus:ring-2 focus:ring-[#227B4E]/30 focus:border-[#227B4E]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#E5A83B] hover:bg-[#D4982B] active:scale-[0.99] text-[#14231B] font-bold text-base uppercase tracking-wide py-3.5 px-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer border-t border-[#FFF1C9]"
                >
                  <Lock className="w-4 h-4" />
                  <span>Pagar R$ {price} com Segurança</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#637C6F] pt-1">
                <ShieldCheck className="w-4 h-4 text-[#227B4E]" />
                <span>Garantia de 7 Dias • Acesso Imediato</span>
              </div>
            </form>
          </>
        ) : (
          /* Success / Access granted screen */
          <div className="text-center py-4 space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#E7F6EC] text-[#207449] flex items-center justify-center mx-auto shadow-xs">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-bold text-[#14291F] font-serif">
              Pedido Gerado com Sucesso!
            </h3>

            <p className="text-xs sm:text-sm text-[#4E6659]">
              Enviamos a confirmação e os links de acesso para <strong>{email || 'seu e-mail'}</strong> e para o WhatsApp <strong>{phone || 'cadastrado'}</strong>.
            </p>

            {paymentMethod === 'pix' && (
              <div className="bg-[#FAF8F3] border border-[#E5DECF] rounded-xl p-4 text-center space-y-3">
                <div className="w-32 h-32 bg-white border border-[#D4CBB9] rounded-lg mx-auto flex flex-col items-center justify-center p-2">
                  <QrCode className="w-24 h-24 text-[#1A3125]" />
                  <span className="text-[9px] text-[#7E968A]">QR Code PIX</span>
                </div>
                <button
                  onClick={handleCopyPix}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#183929] bg-[#E3EDE6] hover:bg-[#D4E3D8] px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  {copiedPix ? <Check className="w-3.5 h-3.5 text-[#227B4E]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPix ? 'Chave PIX Copiada!' : 'Copiar Código PIX'}</span>
                </button>
              </div>
            )}

            <button
              onClick={onClose}
              className="w-full bg-[#183929] hover:bg-[#122A1E] text-white font-semibold text-sm py-3 px-4 rounded-xl transition-colors cursor-pointer"
            >
              Fechar e Acessar Material
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
