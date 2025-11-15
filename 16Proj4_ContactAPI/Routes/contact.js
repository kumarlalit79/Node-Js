import express from 'express'
import {deleteContactById, getAllContact, getContactById, newContact, updateContactById} from '../Controllers/contact.js'

import { isAuthenticated } from '../Middlewares/auth.js';

const router = express.Router();


// new contact
// @api description :- creating contact
// @api method : post
// @api endPoint : /api/contact/new
router.post('/new' , isAuthenticated , newContact)


// get contact
// @api description :- fetching contact
// @api method : get
// @api endPoint : /api/contact/
router.get('/' , getAllContact)

// get contact by id
// @api description :- fetching contact by id
// @api method : get
// @api endPoint : /api/contact/id
router.get('/:id' , getContactById)

// Update contact
// @api description :- Update contact by id
// @api method : PUT
// @api endPoint : /api/contact/id
router.put('/:id' , updateContactById)

// Delete contact
// @api description :- Delete contact by id
// @api method : Delete
// @api endPoint : /api/contact/id
router.delete('/:id' , deleteContactById)

export default router;
