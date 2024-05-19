import React, { useState } from "react"; 
import ContactRow from "./ContactRow";
import { useEffect } from "react";

    useEffect(() => {
        async function fetchContacts() {
            try{
                //your fetch logic will go here 
                const response = await response.json();
                setContacts(result);
            } catch {error}{
                console.error(error);
            }
        }
        fetchContacts()
    }, []); 

    const dummyContacts = [
        { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
        { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
        { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
      ];

      export default function ContactList(){
        const [contacts, setContacts] = useState(dummyContacts); 

        console.log("Contacts:", contacts); 
     
    return(
        <table>
            <thead>
                <tr>
                    <th colSpan="3"> Contact List </th>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                </tr>
                </thead>
            <tbody>
                {contacts.map((contact) => (
                    <ContactRow key={contact.id} contact={contact} />
                ))}

            </tbody>
        </table>
        
    );        
}
