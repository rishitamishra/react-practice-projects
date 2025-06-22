const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Full Name" className="w-full px-4 py-2 border rounded-lg" />
        <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-lg" />
        <input type="tel" placeholder="Phone Number" className="w-full px-4 py-2 border rounded-lg" />
        <textarea placeholder="Message" className="w-full px-4 py-2 border rounded-lg"></textarea>
        <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg">Submit</button>
      </form>
    </div>
  );
};

export default Contact;