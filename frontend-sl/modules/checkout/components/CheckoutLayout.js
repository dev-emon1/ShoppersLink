const CheckoutLayout = ({ left, right }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
      <div className="lg:col-span-2 space-y-4">{left}</div>
      <aside className="lg:col-span-1 sticky top-24 h-fit">{right}</aside>
    </div>
  );
};
export default CheckoutLayout;
