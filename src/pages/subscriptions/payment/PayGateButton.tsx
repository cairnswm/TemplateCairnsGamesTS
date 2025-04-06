import React from 'react';

interface PayGateButtonProps {
  createOrder: () => void;
}

const PayGateButton: React.FC<PayGateButtonProps> = ({ createOrder }) => {
  if (!createOrder) {
    throw new Error("createOrder is required.");
  }

  const click = () => {
    createOrder();
  };

  return (
    <button
      className="w-full h-14 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
      onClick={click}
    >
      Pay with PayGate
    </button>
  );
};

export default PayGateButton;
