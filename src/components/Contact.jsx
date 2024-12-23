const Contact = () => {
    return (
      <section className="bg-gray-900 text-gray-100 min-h-screen flex flex-col items-center justify-center py-16">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-3xl font-extrabold text-indigo-500 mb-6">Contact Me</h1>
          <p className="text-lg mb-4">
            Feel free to reach out to me for any inquiries, collaborations, or just a friendly chat!
          </p>
          <p className="text-gray-300 mb-4">
            You can email me at <span className="font-semibold text-indigo-400">preshitazankat@gmail.com</span>
          </p>
          <p className="text-gray-300 mb-4">
            Or call me at <span className="font-semibold text-indigo-400">+91 9328593735</span>
          </p>
          <p className="text-gray-300">
            I look forward to connecting with you!
          </p>
        </div>
      </section>
    );
  };
  
  export default Contact;
  