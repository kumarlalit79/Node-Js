import {Contact} from '../Models/Contact.js'

// get all contact
export const getAllContact = async (req,res) => {
    const userContact = await Contact.find();

    // agr data nahi mila to
    if(!userContact){
        return res.json({
            message : "No contact exists",
            success : false
        })
    }

    // agr data mil jaye to
    res.json({
        message : "All contact fetched",
        userContact : userContact,
        success : true
    });
}

// create new contact
export const newContact = async (req , res) => {
 
    const{name,email,phone,type} = req.body

    // agr koi field nahi diya to
    if(name == "" || email == "" || phone == "" || type == ""){
        return res.json({
            message : "All fields are required",
            success : false
        })
    }

    // agr saare fields de diye to save kara do db mai
    let saveContact = await Contact.create({name,email,phone,type});

    res.json({
        message : "Contact saved successfully",
        saveContact : saveContact,
        success : true
    })
    
}

// get by id
export const getContactById = async (req , res) => {
    const id = req.params.id 
    const userId = await Contact.findById(id);
    if(!userId){
        return res.json({
            message : "No contact exists with this id",
            success : false
        }) 
    }

    // agr data mil jaye to
    res.json({
        message : "Contact with given id is fetched",
        userId : userId,
        success : true
    });
}

// update contact
export const updateContactById = async (req,res) => {
    
    const id = req.params.id; // id nikaal li

    // ab id ke basis pe kya kya data change karna hai wo bhi nikaalna hoga
    const{name,email,phone,type} = req.body 

    let updatedContact = await Contact.findByIdAndUpdate(id , {name,email,phone,type},{new:true})
    if(!updatedContact){
        return res.json({
            message : "No contact exists with this id",
            success : false
        }) 
    }

    // agr data mil jaye to
    res.json({
        message : "Contact with given id is fetched",
        updatedContact : updatedContact,
        success : true
    });
}

// delete contact
export const deleteContactById = async (req,res) => {
    
    const id = req.params.id; // id nikaal li

    let deleteContact = await Contact.findByIdAndDelete(id)
    if(!deleteContact){
        return res.json({
            message : "No contact exists with this id",
            success : false
        }) 
    }

    // agr data mil jaye to
    res.json({
        message : "Contact with given id is deleted",
        deleteContact : deleteContact,
        success : true
    });
}