import React, { useState , useEffect } from "react";
import Container from "../Container";
import { Button } from "../ui/button";
import { MdOutlineCancel } from "react-icons/md";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import axios from "axios";


const Suppliers = () => {
  const [loading , setLoading]=useState(false)
  const [supplier , setSupplier]=useState([])

    const fetchSuppliers = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/api/supplier", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("pos-token")}`,
        },
      });
      console.log(response.data.supplier);
      setSupplier(response.data.supplier);
     
    } catch (error) {
      console.error("Error fetching Suppliers:", error);
      setLoading(false);
    }
    finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchSuppliers();
  }, []);

  const [addEditModel, setAddEditModel] = useState(null);
  const [formdata, setFormData] = useState({
    supplierName: "",
    supplierEmail: "",
    supplierPhone: "",
    supplierAddress: "",
  });
  const handleForm = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/supplier/add",
        formdata,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("pos-token")}`,
          },
        }
      );
      if (response.data.success) {
        setAddEditModel(null);
        alert("Supplier added successfully!");
        fetchSuppliers();
        setFormData({
          supplierName: "",
          supplierEmail: "",
          supplierPhone: "",
          supplierAddress: "",
        }
      
      );
      } else {
        console.error("Error adding Supplier:", data);
        alert("Error adding Supplier. Please try again.");
      }
    } catch (error) {
      console.error("Error adding supplier:", error);
      alert("Error adding supplier. Please try again.");
    }
  };

  return (
    <>
      <Container>
        <h2 className="font-bold text-[#0C2B4E] text-4xl">
          Supplier Management
        </h2>
        <div className="flex justify-between py-5">
          <input
            type="text"
            placeholder="Search"
            className="w-[400px] rounded-xl  border-[#0C2B4E] border-2 py-3 px-2"
          />
          <Button
            type="submit"
            className=" bg-[#0C2B4E] hover:bg-[#45BA8C] duration-300"
            onClick={() => setAddEditModel(1)}
          >
            Add Supplier
          </Button>
        </div>
        {loading ? <div>Loading...</div>:(<table className="w-full border-collapse border border-gray-300 ">
                    <thead>
                      <tr className="bg-gray-100">
                        
                        <th className="border border-gray-300 p-2">Supplier Name</th>
                        <th className="border border-gray-300 p-2">Supplier Email</th>
                        <th className="border border-gray-300 p-2">Supllier Phone</th>
                        <th className="border border-gray-300 p-2">Supllier Address</th>
                        <th className="border border-gray-300 p-2">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* This map function will now work because categories is an array */}
                      {supplier.map((supplier, ) => (
                        <tr key={supplier._id}>
                          <td className="border border-gray-300 p-2">
                            {supplier.supplierName}
                          </td>
                          <td className="border border-gray-300 p-2">
                            {supplier.supplierEmail}
                          </td>
                          <td className="border border-gray-300 p-2">
                            {supplier.supplierPhone}
                          </td>
                          <td className="border border-gray-300 p-2">
                            {supplier.supplierAddress}
                          </td>
                          <td className="border border-gray-300 p-2">
                            <div className="flex justify-center items-center gap-2">
                              <Button
                                className="bg-[#0C2B4E] hover:bg-[#45BA8C] duration-300"
                                // onClick={() => handleEdit(category)}
                              >
                                Edit
                              </Button>
                              <Button
                                className="bg-[#0C2B4E] hover:bg-red-700 duration-300"
                                // onClick={() => handleDelete(category._id)}
                              >
                                Delete
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>)}

        {addEditModel && (
          <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center ">
            <div className="gap-4 mt-4 bg-white p-4 rounded w-[800px] relative">
              {" "}
              <button
                className="absolute top-1 right-1 text-xl cursor-pointer hover:text-red-700"
                onClick={() => setAddEditModel(null)}
              >
                <MdOutlineCancel />
              </button>
              <form
                className="flex flex-col gap-4 mt-2 bg-white p-4 rounded shadow-md "
                action=""
                onSubmit={handleSubmit}
              >
                <h2 className="font-bold text-[#0C2B4E] text-3xl">
                  Add Supplier
                </h2>
                <FieldSet>
                  <FieldGroup>
                    <Field>
                      <FieldLabel htmlFor="supplierName">
                        Supplier Name
                      </FieldLabel>
                      <Input
                        className={"border p-1 bg-white rounded px-4"}
                        id="supplierName"
                        type="text"
                        placeholder="ex: John Doe"
                        name="supplierName"
                        value={formdata.supplierName}
                        onChange={handleForm}
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="supplierEmail">
                        Supplier Email
                      </FieldLabel>
                      <Input
                        className={"border p-1 bg-white rounded px-4"}
                        id="supplierEmail"
                        type="email"
                        placeholder="ex:johndoe@gmail.com"
                        name="supplierEmail"
                        value={formdata.supplierEmail}
                        onChange={handleForm}
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="supplierDescription">
                        Supplier Number
                      </FieldLabel>
                      <Input
                        className={"border p-1 bg-white rounded px-4"}
                        id="supplierNumber"
                        type="text"
                        placeholder="01*********"
                        name="supplierPhone"
                        value={formdata.supplierPhone}
                        onChange={handleForm}
                      />
                      <FieldLabel htmlFor="supplierDescription">
                        Supplier Address
                      </FieldLabel>
                      <Input
                        className={"border p-1 bg-white rounded px-4"}
                        id="supplierAddress"
                        type="text"
                        placeholder="Address"
                        name="supplierAddress"
                        value={formdata.supplierAddress}
                        onChange={handleForm}
                      />
                    </Field>
                  </FieldGroup>
                </FieldSet>
                <Button
                  type="submit"
                  className=" bg-[#0C2B4E] hover:bg-[#45BA8C] duration-300"
                >
                  Add Supplier
                </Button>
              </form>
            </div>
          </div>
        )}
      </Container>
    </>
  );
};

export default Suppliers;
