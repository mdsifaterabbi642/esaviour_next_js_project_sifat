"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ContactAdminPage = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const [country, setCountry] = useState([]);
  const [address, setAddress] = useState([]);
  const [phone, setPhone] = useState([]);
  const [email, setEmail] = useState([]);
  const [targetIndex, setTargetIndex] = useState();
  //state variables for adding new contact details
  const [addCountry, setAddCountry] = useState("");
  const [addAddress, setAddAddress] = useState("");
  const [addPhone, setAddPhone] = useState("");
  const [addEmail, setAddEmail] = useState("");
  //status state variables
  const [isContactAdded, setIsContactAdded] = useState(false);
  const [actionUpdateOrEdit, setActionUpdateOrEdit] = useState("");
  const [isContactDeleted, setIsContactDeleted] = useState(false);

  useEffect(() => {
    const getContactData = async () => {
      const res = await fetch("http://localhost:3000/api/contact", {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch Contact data");
      }
      const myJsonData = await res.json();
      setData(myJsonData);
      //adding default values to the form through state variable
      setCountry(myJsonData[0]?.contactInfo.map((item, index) => item.country));
      setAddress(myJsonData[0]?.contactInfo.map((item, index) => item.address));
      setPhone(myJsonData[0]?.contactInfo.map((item, index) => item.phone));
      setEmail(myJsonData[0]?.contactInfo.map((item, index) => item.email));
    };
    getContactData();
    setIsClient(true);
  }, []);

  useEffect(() => {
    const getContactData = async () => {
      const res = await fetch("http://localhost:3000/api/contact", {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch Contact data");
      }
      const myJsonData = await res.json();
      setData(myJsonData);
      //adding default values to the form through state variable
      setCountry(myJsonData[0]?.contactInfo.map((item, index) => item.country));
      setAddress(myJsonData[0]?.contactInfo.map((item, index) => item.address));
      setPhone(myJsonData[0]?.contactInfo.map((item, index) => item.phone));
      setEmail(myJsonData[0]?.contactInfo.map((item, index) => item.email));
    };
    getContactData();
    setIsClient(true);
  }, [isContactAdded, isContactDeleted]);

  //console.log("Data: ", data);
  const contactUpdateDelete = async (e) => {
    e.preventDefault();
    // console.log("Clicked contactUpdateDelete function");
    // console.log(country);
    // console.log(address);
    // console.log(phone);
    // console.log(email);
    // console.log(targetIndex);

    if (actionUpdateOrEdit === "update") {
      const confirm = window.prompt(
        "type `update contact info` to update or type `cancel` to cancel the operation: "
      );
      if (confirm === "update contact info") {
        console.log("You choose to update contact information");

        const newCountry = country[targetIndex];
        const newAddress = address[targetIndex];
        const newPhone = phone[targetIndex];
        const newEmail = email[targetIndex];

        const res = await fetch(`http://localhost:3000/api/contact`, {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            country: newCountry,
            address: newAddress,
            phone: newPhone,
            email: newEmail,
            targetIndex: targetIndex,
          }),
        });

        if (!res.ok) {
          throw new Error(
            "Error occurrent in Patch api in /admin/contact page"
          );
        }
        if (res.ok) {
          router.push("/admin/contact");
          router.refresh();
          window.alert("Contact details updated successfully");
        }
      } else if (confirm === "cancel") {
        console.log("You cancelled the operation");
      } else {
        console.log("Invalid request");
      }
    }
    if (actionUpdateOrEdit === "delete") {
      const decision = window.prompt(
        "Type delete to `Delete this contact` contact details or `cancel` to cancel the operation"
      );
      if (decision === "Delete this contact") {
        console.log("You want to delete");
        console.log("targetIndex: ", targetIndex);

        const res = await fetch("http://localhost:3000/api/contact", {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            targetIndex: targetIndex,
          }),
        });

        if (!res.ok) {
          throw new Error("Can not delete contact data");
        }
        if (res.ok) {
          router.push("/admin/contact");
          router.refresh();
          window.alert("Contact details deleted");
          setIsContactDeleted((prev) => !prev);
        }
      } else if (decision === "cancel") {
        console.log("You cancelled the operation");
      } else {
        console.log("Invalid operation");
      }
    }
  };

  const addNewContact = async (e) => {
    e.preventDefault();

    const decision = window.prompt(
      "Type `yes add new contact` to add or type `cancel` to cancel the operation"
    );
    if (decision === "yes add new contact") {
      console.log("You clicked addNewcontact function");
      console.log("You choose to add new contact");

      // console.log("addCountry: ", addCountry);
      // console.log("addAddress: ", addAddress);
      // console.log("addPhone: ", addPhone);
      // console.log("addEmail: ", addEmail);

      const res = await fetch(`http://localhost:3000/api/contact`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          country: addCountry,
          address: addAddress,
          phone: addPhone,
          email: addEmail,
        }),
      });

      if (!res.ok) {
        throw new Error("Error in addNewContact function");
      }
      if (res.ok) {
        router.push("/admin/contact");
        router.refresh();
        window.alert("New Contact added successfully");

        setIsContactAdded((prev) => !prev);

        //clearing the form fields
        setAddCountry("");
        setAddAddress("");
        setAddPhone("");
        setAddEmail("");

        document.getElementById("addContact").close();
      }
    } else if (decision === "cancel") {
      console.log("You cancelled the operation");
    } else {
      console.log("Invalid request");
    }
  };

  return (
    <div className="h-screen overflow-y-auto py-[100px]">
      <h1>Contact Admin Page</h1>
      <div className="fixed">
        <button
          onClick={() => document.getElementById("addContact").showModal()}
          className="btn btn-sm bg-green-500 text-white"
        >
          Add Contact
        </button>
      </div>

      {isClient ? (
        <div className="flex flex-wrap flex-row gap-2 justify-center">
          {data[0]?.contactInfo?.map((item, index) => (
            <div key={index}>
              <div className="w-[90%] mx-auto">
                <form
                  onSubmit={contactUpdateDelete}
                  className="w-[90%] mx-auto border-2 border-slate-400"
                >
                  <div className="flex flex-col flex-wrap">
                    <div className="w-[80%] mx-auto">
                      <label
                        for="country"
                        className="text-gray-600  font-bold text-xl"
                      >
                        Country:
                      </label>
                      {isClient ? (
                        <textarea
                          type="text"
                          id="country"
                          name="country"
                          className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[200px] border-none text-left bg-slate-600 text-white rounded-md"
                          value={country[index]}
                          onChange={(e) => {
                            const updatedCountry = country.map((item, i) =>
                              i === index ? e.target.value : item
                            );
                            setCountry(updatedCountry);
                          }}
                        />
                      ) : (
                        <div>
                          <span className="loading loading-bars loading-xs"></span>
                          <span className="loading loading-bars loading-sm"></span>
                          <span className="loading loading-bars loading-md"></span>
                          <span className="loading loading-bars loading-lg"></span>
                        </div>
                      )}
                    </div>

                    <div className="w-[80%] mx-auto">
                      <label
                        for="address"
                        className="text-gray-600  font-bold text-xl"
                      >
                        Address:
                      </label>
                      {isClient ? (
                        <textarea
                          type="text"
                          id="address"
                          name="address"
                          className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[200px] border-none text-left bg-slate-600 text-white rounded-md"
                          value={address[index]}
                          onChange={(e) => {
                            const updatedAddress = address.map((item, i) =>
                              i === index ? e.target.value : item
                            );
                            setAddress(updatedAddress);
                          }}
                        />
                      ) : (
                        <div>
                          <span className="loading loading-bars loading-xs"></span>
                          <span className="loading loading-bars loading-sm"></span>
                          <span className="loading loading-bars loading-md"></span>
                          <span className="loading loading-bars loading-lg"></span>
                        </div>
                      )}
                    </div>

                    <div className="w-[80%] mx-auto">
                      <label
                        for="phone"
                        className="text-gray-600  font-bold text-xl"
                      >
                        Phone:
                      </label>
                      {isClient ? (
                        <textarea
                          type="text"
                          id="phone"
                          name="phone"
                          className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[200px] border-none text-left bg-slate-600 text-white rounded-md"
                          value={phone[index]}
                          onChange={(e) => {
                            const updatedPhone = phone.map((item, i) =>
                              i === index ? e.target.value : item
                            );
                            setPhone(updatedPhone);
                          }}
                        />
                      ) : (
                        <div>
                          <span className="loading loading-bars loading-xs"></span>
                          <span className="loading loading-bars loading-sm"></span>
                          <span className="loading loading-bars loading-md"></span>
                          <span className="loading loading-bars loading-lg"></span>
                        </div>
                      )}
                    </div>

                    <div className="w-[80%] mx-auto">
                      <label
                        for="email"
                        className="text-gray-600  font-bold text-xl"
                      >
                        Email:
                      </label>
                      {isClient ? (
                        <textarea
                          type="text"
                          id="email"
                          name="email"
                          className="w-[98%] text-[12px] px-[5px] py-[20px] min-h-[100px] max-h-[200px] border-none text-left bg-slate-600 text-white rounded-md"
                          value={email[index]}
                          onChange={(e) => {
                            const updatedEmail = email.map((item, i) =>
                              i === index ? e.target.value : item
                            );
                            setEmail(updatedEmail);
                          }}
                        />
                      ) : (
                        <div>
                          <span className="loading loading-bars loading-xs"></span>
                          <span className="loading loading-bars loading-sm"></span>
                          <span className="loading loading-bars loading-md"></span>
                          <span className="loading loading-bars loading-lg"></span>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-row justify-between my-[10px] mx-[10px]">
                      <div>
                        <button
                          onClick={() => {
                            setTargetIndex(index);
                            setActionUpdateOrEdit("update");
                          }}
                          className="btn btn-sm bg-[#000080] text-white hover:bg-green-500 hover:cursor-pointer"
                        >
                          Update
                        </button>
                      </div>
                      <div>
                        <button
                          onClick={() => {
                            setTargetIndex(index);
                            setActionUpdateOrEdit("delete");
                          }}
                          className="btn btn-sm bg-red-500 text-white hover:bg-red-800 hover:cursor-pointer"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>Loading</div>
      )}

      {/* add contact form */}
      <dialog id="addContact" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add Contact</h3>
          <div>
            <form onSubmit={addNewContact}>
              <div className="flex flex-col flex-wrap">
                <div className="w-[98%] mx-auto">
                  <label htmlFor="country" className="text-gray-600  font-bold">
                    Country:
                  </label>
                  <textarea
                    type="text"
                    id="country"
                    name="country"
                    placeholder="add country"
                    className="w-[98%] px-[5px] pt-[5px] h-[50px] min-h-[50px] max-h-[100px] border-none text-left bg-slate-600 text-white"
                    required={true}
                    value={addCountry}
                    onChange={(e) => setAddCountry(e.target.value)}
                  />
                </div>

                <div className="w-[98%] mx-auto">
                  <label htmlFor="address" className="text-gray-600  font-bold">
                    address:
                  </label>
                  <textarea
                    type="text"
                    id="address"
                    name="address"
                    placeholder="add address"
                    className="w-[98%] px-[5px] pt-[5px] h-[50px] min-h-[50px] max-h-[100px] border-none text-left bg-slate-600 text-white"
                    required={true}
                    value={addAddress}
                    onChange={(e) => setAddAddress(e.target.value)}
                  />
                </div>

                <div className="w-[98%] mx-auto">
                  <label htmlFor="phone" className="text-gray-600  font-bold">
                    phone:
                  </label>
                  <textarea
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="add phone"
                    className="w-[98%] h-[50px] min-h-[50px] max-h-[70px] px-[5px] pt-[5px] border-none text-left bg-slate-600 text-white"
                    value={addPhone}
                    onChange={(e) => setAddPhone(e.target.value)}
                  />
                </div>
                <div className="w-[98%] mx-auto">
                  <label htmlFor="email" className="text-gray-600  font-bold">
                    Email:
                  </label>
                  <textarea
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Add email"
                    className="w-[98%] px-[5px] pt-[5px] h-[50px] min-h-[50px] max-h-[100px] border-none text-left bg-slate-600 text-white"
                    value={addEmail}
                    onChange={(e) => setAddEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="text-center mt-[20px]">
                <button className="btn btn-sm bg-green-500 text-white">
                  Add Contact
                </button>
              </div>
            </form>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ContactAdminPage;
