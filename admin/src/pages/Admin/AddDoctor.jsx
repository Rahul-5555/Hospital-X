import { assets } from "../../assets/assets";
import { useContext, useState } from 'react';
import { AdminContext } from "../../context/AdminContext";
import { toast } from 'react-toastify';
import axios from "axios";

const AddDoctor = () => {

  const [docImg, setDocImg] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [experience, setExperience] = useState('1 Year');
  const [fees, setFees] = useState('');
  const [about, setAbout] = useState('');
  const [speciality, setSpeciality] = useState('General physician');
  const [degree, setDegree] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');

  const { backendUrl, aToken } = useContext(AdminContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (!docImg) {
        return toast.error('Image Not Selected.');
      }

      const formData = new FormData();
      formData.append('image', docImg);
      formData.append('name', name);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('experience', experience);
      formData.append('fees', Number(fees));
      formData.append('about', about);
      formData.append('speciality', speciality);
      formData.append('degree', degree);
      formData.append('address', JSON.stringify({ line1: address1, line2: address2 }));


      // Log all key-value pairs in the FormData
      formData.forEach((value, key) => {
        console.log(`${key} : ${value}`);
      });

      // end point
      const { data } = await axios.post(backendUrl + '/api/admin/add-doctor', formData, { headers: { aToken } })
      
      if(data.success){
        toast.success(data.message)
        setDocImg(false);
        setName('')
        setPassword('')
        setEmail('')
        setAddress1()
        setAddress2('')
        setDegree('')
        setAbout('')
        setFees('')
        
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className="m-5 w-full">
      <p className="mb-4 text-2xl font-bold">Add Doctor</p>

      <div className="bg-white mx-auto my-6 border rounded-xl w-full max-w-4xl max-h-[80vh] overflow-y-auto p-8 shadow-lg">
        {/* Upload Doctor Image */}
        <div className="flex items-center gap-4 mb-8 text-gray-700">
          <label htmlFor="doc-img" className="cursor-pointer flex items-center gap-3 hover:opacity-80 transition">
            <img
              className="w-24 h-24 bg-gray-200 border border-gray-300 rounded-full object-cover shadow-md"
              src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
              alt="Upload doctor image"
            />
            <p className="text-base font-semibold">Upload doctor <br /> picture</p>
          </label>
          <input onChange={(e) => setDocImg(e.target.files[0])} type="file" id="doc-img" hidden />
        </div>

        {/* Doctor Details Form */}
        <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-700">
          {/* Left Column */}
          <div className="w-full lg:flex-1 flex flex-col gap-6">
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-2">Doctor Name</label>
              <input onChange={(e) => setName(e.target.value)} value={name} className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none transition" type="text" placeholder="Enter name" required />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium mb-2">Doctor Email</label>
              <input onChange={(e) => setEmail(e.target.value)} value={email} className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none transition" type="email" placeholder="Enter email" required />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium mb-2">Doctor Password</label>
              <input onChange={(e) => setPassword(e.target.value)} value={password} className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none transition" type="password" placeholder="Enter password" required />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium mb-2">Experience</label>
              <select onChange={(e) => setExperience(e.target.value)} value={experience} className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none transition">
                {Array.from({ length: 10 }, (_, i) => (
                  <option key={i} value={`${i + 1} Year`}>{i + 1} Year</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium mb-2">Fees</label>
              <input onChange={(e) => setFees(e.target.value)} value={fees} className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none transition" type="number" placeholder="Enter fees" required />
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:flex-1 flex flex-col gap-6">
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-2">Speciality</label>
              <select onChange={(e) => setSpeciality(e.target.value)} value={speciality} className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none transition">
                <option value="General physician">General physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium mb-2">Education</label>
              <input onChange={(e) => setDegree(e.target.value)} value={degree} className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none transition" type="text" placeholder="Enter education" required />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium mb-2">Address</label>
              <input onChange={(e) => setAddress1(e.target.value)} value={address1} className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none transition" type="text" placeholder="Enter address 1" required />
              <input onChange={(e) => setAddress2(e.target.value)} value={address2} className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none transition mt-3" type="text" placeholder="Enter address 2" required />
            </div>
          </div>
        </div>

        {/* About Doctor */}
        <div className="mt-6">
          <label className="text-sm font-medium mb-2 block">About Doctor</label>
          <textarea onChange={(e) => setAbout(e.target.value)} value={about} className="w-full border border-gray-300 rounded-lg px-4 pt-2 focus:ring-2 focus:ring-blue-400 outline-none transition" placeholder="Write about the doctor" rows={5} required />
        </div>

        {/* Submit Button */}
        <div className="justify-center mt-4 ">
          <button type="submit" className="bg-[#5F6FFF]  px-10 py-3  text-white rounded-full ">
            Add Doctor
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddDoctor;
