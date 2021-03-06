
// Express Configuration
import express from 'express';
import {DisplayContactListPage, DisplayEditPage} from '../Controllers/contact-list';
const router = express.Router();
export default router;

// Contact Model
import Contact from "../Models/contact";

/* GET contact-list page - with /contact-list */
router.get('/', DisplayContactListPage);


/* Display edit/:id page - with /edit/:id */
router.get('/edit/:id', function(req, res, next) 
{

  
});

/* Process edit/:id page - with /edit/:id */
router.post('/edit/:id', DisplayEditPage);

/* Display add page - with /add */
router.get('/add', function(req, res, next) 
{
 
});

/* Process edit/:id page - with /edit/:id */
router.post('/add', function(req, res, next) 
{
  
});

/* Process delete/:id page - with /delete/:id */
router.get('/delete/:id', function(req, res, next) 
{
  
  
});