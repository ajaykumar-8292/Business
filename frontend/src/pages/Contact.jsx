import { useState } from "react";


import contact from"../assets/contact.jpg";


function Contact() {

const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    alert(data.message);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    console.error(error);
    alert("Backend server connect nahi hua");
  }
};






  return (
  <main>
    <div className=" bg-cover bg-center bg-no-repeat w-full h-50 md:h-80 object-cover "
     style={{ backgroundImage: `url(${contact})` }}
     
    >
      
<h1 className="text-[rgb(228,164,91)] text-5xl font-bold  md:ml-130 md:pt-30 pt-10 pl-25  " >Contact us</h1>
<p className="text-white    md:ml-150  ml-15 mt-5 text-3xl ">Get Many More Features</p>
    </div>

    <div className="flex  pt-5 bg-gray-800 ">
      <h2 className="text-2xl text-white md:ml-5 pl-5"> Contact US</h2>
      <span className=" text-[rgb(228,164,91)] md:ml-300 ml-45 md:pb-10 pb-5">Home/contact</span>
    </div>
    <hr className="text-white"></hr>


<div className="flex flex-col md:flex-row bg-gray-800">

    <div className="h-200  md:h-200 bg-gray-800 pt-5 md:pt-10 pb-5 md:pb-20 md:w-1/2 pl-2 md:pl-30   w-full">


<form   onSubmit={handleSubmit}
 className=" mx-auto shadow-[0_0_3px_rgba(255,255,255,0.5)]  h-180 pt-10 pb- pl-10 pr-10 rounded-sm   bg-gray-800">
  <div class="mb-5 bg-gray-800 text-white">


    <label htmlFor="name-alternative" class="block mb-2.5 text-3xl font-medium text-heading  text-white">Enter Your Name</label>
    <input type="name"  name="name"  value={formData.name}    onChange={handleChange} id="name-alternative" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow placeholder:text-body  text-white rounded-lg " placeholder=" Enter Your Name"  required />
  </div>

   <div className="mb-5  bg-gray-800">
    <label htmlFor="email-alternative" class="block mb-2.5 text-3xl font-medium text-heading text-white ">Enter Your Email</label>
    <input type="email"   name="email"  value={formData.email}    onChange={handleChange}  id="email-alternative" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow placeholder:text-body text-white rounded-lg " placeholder=" Enter Your Email"  required />
  </div>

  <div className="mb-5  bg-gray-800">
    <label htmlFor="number-alternative" class="block mb-2.5 text-3xl font-medium text-heading text-white ">Enter Your Phone Number</label>
    <input type="phone"   name="phone"  value={formData.phone}    onChange={handleChange}    id=" number-alternative" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow placeholder:text-body text-white rounded-lg " placeholder=" Enter Your Phone Number"  required />
  </div>

  <div className="mb-5  bg-gray-800">
    <label htmlFor="subject-alternative" class="block mb-2.5 text-3xl font-medium text-heading text-white ">Enter Subject</label>
    <input type="text"   name="subject"  value={formData.subjecy}    onChange={handleChange}id="subject-alternative" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow placeholder:text-body text-white rounded-lg " placeholder=" Enter Your Subject"  required />
  </div>


<div className="mb-5  bg-gray-800">
    <label htmlFor="message-alternative" class="block mb-2.5 text-3xl font-medium text-heading text-white ">Enter Message</label>
    <input type="text"   name="message"  value={formData.message}    onChange={handleChange} id="text-alternative" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow placeholder:text-body   text-white rounded-lg " placeholder=" Enter Your Message"  required />
  </div>


  
  <div className="flex items-start mb-5 text-white bg-gray-800">
    <label htmlFor="remember-alternative" class="flex items-center h-5 ">
      <input id="remember-alternative" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft text-white " required />
      <p class="ms-2 text-sm font-medium text-heading select-none text-white">I agree with the <a href="#" class="text-fg-brand hover:underline text-white">terms and conditions</a>.</p>
    </label>
  </div>
  <button type="submit" className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none text-white">Submit</button>
</form>
</div>


<div className=" md:w-1/2  pt-5 md:pt-30 pl-15 md:pl-30 pb-5  bg-gray-800 w-full">
<h1 className="font-bold text-3xl text-white">  Address Info</h1>
<span className="mt-20 text-white">Party Zone Apartment  Webnest Office No 201,<br />  New Jaganpura patna-27  </span><br />
<span className="text-white">Phone No +91 7070843946</span><br />
<span className="text-white"> E-mail:info@webnast.in</span><br />
<span className="text-white">Wbesite:www:webnast.in </span><br />
</div>



</div>
  </main>
  );
}

export default Contact;