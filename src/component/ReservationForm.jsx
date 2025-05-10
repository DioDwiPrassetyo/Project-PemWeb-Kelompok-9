import { useState } from "react";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    date: "", time: "", guests: "", firstName: "", lastName: "", email: "", phone: "", comment: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedDate = new Date(formData.date);
    const year = selectedDate.getFullYear();
    const selectedTime = formData.time;
    
    if (year < 2025) {
      alert("Tanggal harus mulai dari tahun 2025.");
      return;
    }
    
    if (selectedTime < "10:00" || selectedTime > "22:00") {
      alert("Waktu harus antara pukul 10 pagi dan 10 malam.");
      return;
    }

    alert("Reservation submitted!");
  };

  return (
    <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg w-[500px] h-[680px] flex flex-col justify-center">
      <h2 className="text-3xl font-semibold text-[#093035] mb-3 text-left font-[Poppins] tracking-wide relative top-[-4px]">Reservation</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        
        {/* Date & Time */}
        <div className="flex gap-4">
          <div className="w-full">
            <label className="block text-gray-700 text-sm font-semibold mb-1">Date</label>
            <input type="date" name="date" value={formData.date} onChange={handleChange} className="input w-full border border-gray-300 rounded-md p-2" required min="2025-01-01" />
          </div>
          <div className="w-full">
            <label className="block text-gray-700 text-sm font-semibold mb-1">Time</label>
            <input type="time" name="time" value={formData.time} onChange={handleChange} className="input w-full border border-gray-300 rounded-md p-2" required min="10:00" max="22:00" />
          </div>
        </div>

        {/* Guests */}
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-1">Number of Guests</label>
          <input type="number" name="guests" value={formData.guests} onChange={handleChange} className="input w-full border border-gray-300 rounded-md p-2" required min="0" />
        </div>

        {/* First Name & Last Name */}
        <div className="flex gap-4">
          <div className="w-full">
            <label className="block text-gray-700 text-sm font-semibold mb-1">First Name</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="input w-full border border-gray-300 rounded-md p-2" required />
          </div>
          <div className="w-full">
            <label className="block text-gray-700 text-sm font-semibold mb-1">Last Name</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="input w-full border border-gray-300 rounded-md p-2" required />
          </div>
        </div>

        {/* Email & Phone */}
        <div className="flex gap-4">
          <div className="w-full">
            <label className="block text-gray-700 text-sm font-semibold mb-1">Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="input w-full border border-gray-300 rounded-md p-2" required />
          </div>
          <div className="w-full">
            <label className="block text-gray-700 text-sm font-semibold mb-1">Phone Number</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="input w-full border border-gray-300 rounded-md p-2" required />
          </div>
        </div>

        {/* Comment */}
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-1">Comment</label>
          <textarea name="comment" value={formData.comment} onChange={handleChange} className="input w-full h-20 border border-gray-300 rounded-md p-2" />
        </div>

        {/* Submit Button */}
        <button type="submit" 
        className="bg-[#393E46] text-[#D4AF37] font-medium font-[Poppins] py-3 px-3 rounded-lg hover:bg-[#2F343A] transition text-lg">
          BOOK NOW
        </button>

      </form>
    </div>
  );
};

export default ReservationForm;
