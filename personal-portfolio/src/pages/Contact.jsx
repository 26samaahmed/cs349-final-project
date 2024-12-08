function Contact() {
  return (
    <div>
      <div className="rounded-md m-10 w-auto">
        <form className="bg-white p-10 rounded-md">
        <div className="flex space-x-4 mb-4">
          <input type="text" id="name" name="name" className="w-full p-2 mb-4 bg-[#FF9494] placeholder-white rounded-sm text-xl" placeholder="First Name" required />
          <input type="text" id="name" name="name" className="w-full p-2 mb-4 bg-[#FF9494] placeholder-white rounded-sm text-xl" placeholder="Last Name" required />
          <input type="email" id="email" name="email" className="w-full p-2 mb-4 bg-[#FF9494] placeholder-white rounded-sm text-xl" placeholder="Email" required />
        </div>
          <textarea id="message" name="message" className="w-full p-2 mb-4 bg-[#FF9494] placeholder-white rounded-sm text-xl h-64" placeholder="Your Message" required></textarea>
          <button type="submit" className="bg-[#C72D2D] text-white p-4 rounded-lg text-xl">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
