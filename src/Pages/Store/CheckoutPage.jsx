import React, { useState } from 'react';
import { X, Plus, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

const CheckoutPage = () => {
  const [selectedPayment, setSelectedPayment] = useState('axis');
  const [showOrderSummary, setShowOrderSummary] = useState(true);
  const [debitCardExpanded, setDebitCardExpanded] = useState(true);
  const [address, setAddress] = useState('12, Delhi, India');
  const [editingAddress, setEditingAddress] = useState(false);
  const [newCard, setNewCard] = useState('');
  const [cardList, setCardList] = useState(["axis", "hdfc"]);
  const [promoCode, setPromoCode] = useState('');
  const [showPromoInput, setShowPromoInput] = useState(false);
  const [selectedUPI, setSelectedUPI] = useState('');
  const [uploadedImg, setUploadedImg] = useState(null);

  const handleAddCard = () => {
    if (newCard.trim()) {
      setCardList([...cardList, newCard.trim().toLowerCase()]);
      setNewCard('');
    }
  };

  const handleImgUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedImg(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Left Side - Payment Methods */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-500 rounded-sm flex items-center justify-center">
                <span className="text-xs">✓</span>
              </div>
              <span className="text-gray-300">Cart</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-blue-500 bg-blue-500 rounded-sm"></div>
              <span className="text-blue-400">Checkout</span>
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-6">Payment Method</h2>

          {/* Google Pay / UPI */}
          <div className="bg-gray-800 rounded-lg p-4 mb-4">
            <div className="mb-2">UPI Options</div>
            {['Google Pay', 'PhonePe', 'Paytm', 'BHIM'].map(app => (
              <div
                key={app}
                onClick={() => setSelectedUPI(app)}
                className={`cursor-pointer mb-2 px-3 py-2 rounded bg-gray-700 ${selectedUPI === app ? 'ring-2 ring-blue-500' : ''}`}
              >{app}</div>
            ))}
          </div>

          {/* Debit Card Dropdown */}
          <div className="bg-gray-800 rounded-lg mb-4">
            <div
              className="p-4 flex items-center justify-between cursor-pointer"
              onClick={() => setDebitCardExpanded(!debitCardExpanded)}
            >
              <span>Debit Card</span>
              {debitCardExpanded ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
            </div>
            {debitCardExpanded && (
              <div className="px-4 pb-4 space-y-3">
                {cardList.map(card => (
                  <div
                    key={card}
                    className={`bg-gray-700 rounded-lg p-3 cursor-pointer ${selectedPayment === card ? 'ring-2 ring-blue-500' : ''}`}
                    onClick={() => setSelectedPayment(card)}
                  >
                    <div className="text-sm font-medium capitalize">{card} Bank</div>
                  </div>
                ))}
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="New Bank Name"
                    className="bg-gray-600 text-white px-2 py-1 rounded w-full"
                    value={newCard}
                    onChange={e => setNewCard(e.target.value)}
                  />
                  <button onClick={handleAddCard} className="bg-blue-500 px-3 py-1 rounded text-sm">Add</button>
                </div>
              </div>
            )}
          </div>

          {/* Add New Method */}
          <button className="w-full bg-gray-800 rounded-lg p-4 flex items-center justify-center space-x-2 text-blue-400 hover:bg-gray-750 transition-colors">
            <Plus className="w-4 h-4" />
            <span>Add New Method</span>
          </button>
        </div>

        {/* Right Side - Order Summary */}
        <div className="space-y-6">
          {showOrderSummary && (
            <div className="bg-gray-800 rounded-xl p-6 relative">
              <button className="absolute top-4 right-4 text-gray-400 hover:text-white" onClick={() => setShowOrderSummary(false)}>
                <X className="w-5 h-5" />
              </button>

              {/* Product */}
              <div className="flex items-center space-x-4 mb-6">
                {uploadedImg ? (
                  <img src={uploadedImg} alt="Product" className="w-16 h-16 object-cover rounded-lg" />
                ) : (
                  <div className="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400">
                    IMG
                  </div>
                )}
                <div className="flex-1">
                  <div className="text-gray-300 text-sm">Product Name</div>
                  <div className="text-xl font-semibold">$100</div>
                </div>
                <input type="file" onChange={handleImgUpload} className="text-xs" />
              </div>

              {/* Offers */}
              <div className="mb-6">
                <div className="flex items-center justify-between bg-gray-700 rounded-lg p-3">
                  <span className="text-gray-300">Offers</span>
                  <button onClick={() => setShowPromoInput(!showPromoInput)} className="text-blue-400 text-sm hover:text-blue-300">
                    Add Code
                  </button>
                </div>
                {showPromoInput && (
                  <input
                    type="text"
                    placeholder="Enter Promo Code"
                    value={promoCode}
                    onChange={e => setPromoCode(e.target.value)}
                    className="mt-2 bg-gray-600 px-3 py-2 rounded w-full"
                  />
                )}
              </div>

              {/* Payment Details */}
              <div className="mb-6">
                <h3 className="text-gray-300 font-medium mb-4">Payment Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Order</span>
                    <span>$100.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Delivery</span>
                    <span>$2.00</span>
                  </div>
                  <hr className="border-gray-600" />
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>$102.00</span>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="mb-6">
                {editingAddress ? (
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={address}
                      onChange={e => setAddress(e.target.value)}
                      className="bg-gray-600 text-white px-2 py-1 rounded w-full"
                    />
                    <button onClick={() => setEditingAddress(false)} className="bg-blue-500 px-3 py-1 rounded text-sm">Save</button>
                  </div>
                ) : (
                  <div className="bg-gray-700 rounded-lg p-3 flex items-center justify-between">
                    <span className="text-sm">{address}</span>
                    <ChevronDown className="w-4 h-4 text-gray-400 cursor-pointer" onClick={() => setEditingAddress(true)} />
                  </div>
                )}
              </div>

              {/* Pay Now Button */}
              <button className="w-full bg-blue-500 hover:bg-blue-600 rounded-lg py-3 font-semibold transition-colors">
                Pay Now
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default CheckoutPage;
