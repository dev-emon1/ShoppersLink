"use client";
const demo = [
  {
    id: "addr1",
    label: "Home",
    fullName: "John Doe",
    phone: "017xxxxxxxx",
    line1: "House 12, Road 3",
    city: "Dhaka",
    postcode: "1212",
  },
];
const AddressBook = ({ onSelect }) => {
  if (!demo.length) return null;
  return (
    <div className="flex gap-2 mb-3">
      {demo.map((a) => (
        <button
          key={a.id}
          onClick={() => onSelect(a)}
          className="px-3 py-1 rounded-lg border border-border text-sm hover:bg-gray-50"
        >
          Use {a.label} Address
        </button>
      ))}
    </div>
  );
};
export default AddressBook;
